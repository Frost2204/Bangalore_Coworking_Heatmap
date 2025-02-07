import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import { DivIcon, LatLngBounds } from "leaflet";
import React, { useState, useMemo, useRef } from "react";
import { coworkingSpaces, CoworkingSpace } from "../data/coworkingSpaces";
import CoworkingSpaceCard from "./CoworkingSpaceCard";
import "leaflet/dist/leaflet.css";
import "swiper/swiper-bundle.css";
import SearchInput from "./SearchInput";
import Draggable from "react-draggable";

const MapViewUpdater = ({ position }: { position: [number, number] }) => {
  const map = useMap();
  map.flyTo(position, map.getZoom(), {
    duration: 1.5,
    easeLinearity: 0.25,
  });
  return null;
};

const getPinColor = (numSpaces: number) => {
  if (numSpaces >= 10) return "red";
  if (numSpaces >= 5) return "orange";
  if (numSpaces >= 2) return "darkblue";
  return "blue";
};

export default function Map() {
  const [activeSpaces, setActiveSpaces] = useState<CoworkingSpace[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const mapRef = useRef<any>(null);

  const filteredSpaces = useMemo(() => {
    return coworkingSpaces.filter((space) =>
      Object.values(space).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setActiveSpaces([]);
  };

  const handleSearchSubmit = () => {
    console.log("Search submitted");
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const groupedSpaces = useMemo(() => {
    const grouped: { [key: string]: CoworkingSpace[] } = {};
    filteredSpaces.forEach((space) => {
      const key = space.coordinates.join(",");
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(space);
    });
    return grouped;
  }, [filteredSpaces]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <SearchInput 
        searchTerm={searchTerm} 
        onSearchChange={handleSearchChange} 
        onSearchSubmit={handleSearchSubmit} 
        onClear={handleClearSearch} 
      />

      <Draggable bounds="parent">
        <div
          style={{
            position: "absolute",
            top: 100,
            right: 10,
            background: "white",
            padding: "10px 15px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            cursor: "grab",
            zIndex: 1000,
          }}
        >
          <strong>Total Results: {filteredSpaces.length}</strong>
        </div>
      </Draggable>

      <MapContainer
        center={[12.9733, 77.6203]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {Object.keys(groupedSpaces).map((key) => {
          const spacesAtLocation = groupedSpaces[key];
          const space = spacesAtLocation[0];
          const numSpaces = spacesAtLocation.length;
          const pinColor = getPinColor(numSpaces);

          return (
            <Marker
              key={key}
              position={space.coordinates}
              icon={new DivIcon({
                className: "custom-div-icon",
                html: `<div style="background-color: ${pinColor}; color: white; padding: 5px; border-radius: 50%; text-align: center; font-size: 12px; font-weight: bold; width: 25px; height: 25px;">${numSpaces}</div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15],
              })}
              eventHandlers={{
                click: () => setActiveSpaces(spacesAtLocation),
              }}
            >
              <Tooltip direction="top" offset={[0, -20]} permanent>
                {space.location}
              </Tooltip>
            </Marker>
          );
        })}

        {activeSpaces.length > 0 && <MapViewUpdater position={activeSpaces[0].coordinates} />}
      </MapContainer>

      {activeSpaces.length > 0 && (
        <CoworkingSpaceCard activeSpaces={activeSpaces} onClose={() => setActiveSpaces([])} />
      )}
    </div>
  );
}