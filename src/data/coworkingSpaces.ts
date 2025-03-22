export interface CoworkingSpace {
  name: string;
  location: string;
  category: string;
  price: string;
  coordinates: [number, number];
  poc?: {
    name: string;
    contact: string;
  };
}

export const coworkingSpaces: CoworkingSpace[] = [
  {
    name: "P-Squared",
    location: "HSR Layout",
    category: "Budgeted(6k or less)",
    price: "3500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Rakesh",
      contact: "9606116203"
    }
  },
  {
    name: "PRI Co working",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Sumalatha",
      contact: "9738028520"
    }
  },
  {
    name: "Business Hut",
    location: "Residency Road",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Ram",
      contact: "9360000439/8048036923"
    }
  },
  {
    name: "Rainmakers",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Deepika/Vidya/Preetham",
      contact: "7349777374/6364122212/8904068462"
    }
  },
  {
    name: "Nomads - 86",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "150000 managed office",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Pooja/Satish",
      contact: "8884311166/8884311155"
    }
  },
  {
    name: "Up start Coworking",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Shalini",
      contact: "7899080544"
    }
  },
  {
    name: "Up start Coworking",
    location: "Siddapura",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9113, 77.6095],
    poc: {
      name: "Shalini",
      contact: "7899080544"
    }
  },
  {
    name: "People Hub - 1",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Vijendra Prasad",
      contact: "09880566550"
    }
  },
  {
    name: "People Hub - 2",
    location: "Electronic City",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.8416, 77.6636],
    poc: {
      name: "Vijendra Prasad",
      contact: "098805 66550"
    }
  },
  {
    name: "The Venture Studios",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Vincent",
      contact: "9741595778"
    }
  },
  {
    name: "Unispace business center Co-workings",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Prajwal",
      contact: "9100080014"
    }
  },
  {
    name: "Office republic",
    location: "Double road",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9535, 77.6017],
    poc: {
      name: "Jagannath",
      contact: "8494935126/6364005126"
    }
  },
  {
    name: "Nomads - Micro",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Pooja/Satish",
      contact: "8884311166/8884311155"
    }
  },
  {
    name: "Toyama Bizhub",
    location: "Thanisandra",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [13.0647, 77.6227],
    poc: {
      name: "Shaik Azeez",
      contact: "9341810663"
    }
  },
  {
    name: "Workin style",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Hussain/Matt",
      contact: "78999 33377"
    }
  },
  {
    name: "Obeya Verve",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Priya",
      contact: "9742812891/9428772431"
    }
  },
  {
    name: "Golden Square",
    location: "CBD",
    category: "Budgeted(6k or less)",
    price: "8500",
    coordinates: [12.9719, 77.5946],
    poc: {
      name: "David/Som Shekhar",
      contact: "9986452888/9945664830"
    }
  },
  {
    name: "Golden Square",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "David/Som Shekhar",
      contact: "9986452888/9945664830"
    }
  },
  {
    name: "Golden Square",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "David/Som Shekhar/Gowtham",
      contact: "9986452888/9945664830/9742919244"
    }
  },
  {
    name: "Golden Square",
    location: "Vittal Mallya Rd",
    category: "Sub premium (6k-12k)",
    price: "12000",
    coordinates: [12.9715, 77.5967],
    poc: {
      name: "David/Som Shekhar",
      contact: "9986452888/9945664830"
    }
  },
  {
    name: "Kokarya Business Synergy Centre",
    location: "Jayanagar",
    category: "Budgeted(6k or less)",
    price: "5500",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Sharath/Kiran",
      contact: "9886045478/9008857907"
    }
  },
  {
    name: "Kokarya Business Synergy Centre",
    location: "Banashankari",
    category: "Budgeted(6k or less)",
    price: "5500",
    coordinates: [12.9250, 77.5440],
    poc: {
      name: "Sharath",
      contact: "9886045478/9008857907"
    }
  },
  {
    name: "WoodStock Business Centre",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Vibha",
      contact: "9035003176/9035003175"
    }
  },
  {
    name: "Sparkplug coworks",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Varun/Rohit",
      contact: "9620351127/97422 20607"
    }
  },
  {
    name: "The Rook India",
    location: "Kasturi Nagar",
    category: "Budgeted(6k or less)",
    price: "5500",
    coordinates: [13.0196, 77.6585],
    poc: {
      name: "Dharmendra/Manoj",
      contact: "09108166028/9886881203"
    }
  },
  {
    name: "365 shared - Pinnacle",
    location: "HSR Layout",
    category: "Budgeted(6k or less)",
    price: "5500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sudheer",
      contact: "9986235345"
    }
  },
  {
    name: "365 shared - Nova",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sudheer",
      contact: "9986235345"
    }
  },
  {
    name: "IndiQube Townhub",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Gamma",
    location: "Kadubeesanahalli",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Omega",
    location: "ITPL",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9856, 77.7359],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube ETA",
    location: "Mahadevapura",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9916, 77.6958],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Orion",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Edge",
    location: "Bellandur",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Octagon",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube South Island",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Awfis - Kirloskar Business Park",
    location: "Hebbal",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [13.0358, 77.5970],
    poc: {
      name: "Jayanth/Krithika/Kshitiz/Nalini",
      contact: "9964128544/80882 10031/76250 63367/9113008624"
    }
  },
  {
    name: "IndiQube Southmile",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Lexington",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Penta",
    location: "Richmond",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9612, 77.6050],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Zip",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Opal",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Coral",
    location: "C V Raman Nagar",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9891, 77.6585],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Boot start",
    location: "Sanjaynagar",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [13.0350, 77.5800],
    poc: {
      name: "Srikanth",
      contact: "7205411413"
    }
  },
  {
    name: "GoodWorks - 1",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Arun/Krithik",
      contact: "7411575652/9035460930"
    }
  },
  {
    name: "GoodWorks",
    location: "Electronic City Phase I",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.8416, 77.6636],
    poc: {
      name: "Arun/Krithik",
      contact: "7411575652/9035460930"
    }
  },
  {
    name: "GoodWorks",
    location: "Indiranagar",
    category: "Premium(12K or More)",
    price: "13000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Arun/Krithik",
      contact: "7411575652/9035460930"
    }
  },
  {
    name: "GoodWorks - 2",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Arun/Krithik",
      contact: "7411575652/9035460930"
    }
  },
  {
    name: "Co start hub",
    location: "Sanjaynagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [13.0350, 77.5800],
    poc: {
      name: "Mani",
      contact: "9590166109"
    }
  },
  {
    name: "Evolve",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Brijesh/Nitin",
      contact: "9880110193/9108447829"
    }
  },
  {
    name: "Evoma EPIP 1",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Malthy/Vijaylaxmi",
      contact: "74116 14574/9611763444"
    }
  },
  {
    name: "Evoma EPIP 2",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Malthy/Vijaylaxmi",
      contact: "74116 14574/9611763444"
    }
  },
  {
    name: "GoSpaze Coworking Centre",
    location: "Bellandur",
    category: "Sub premium (6k-12k)",
    price: "7400",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Shinoj/Vinodh/Anjali",
      contact: "88804 44111/9108262299/9606747583"
    }
  },
  {
    name: "Sierra Cartel-2",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Bharath/Nandini",
      contact: "9986357680/6366469843"
    }
  },
  {
    name: "Wolfpack",
    location: "Vasanth Nagar",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9881, 77.5925],
    poc: {
      name: "Boje",
      contact: "074061 32999"
    }
  },
  {
    name: "UrbanVault 72",
    location: "Marathahalli",
    category: "Sub premium (6k-12k)",
    price: "6999",
    coordinates: [12.9550, 77.7011],
    poc: {
      name: "Bhavana/Ankit",
      contact: "8904047515/76767 89126"
    }
  },
  {
    name: "Novel Tech Park",
    location: "Hosur Rd",
    category: "Sub premium (6k-12k)",
    price: "8900",
    coordinates: [12.8406, 77.6613],
    poc: {
      name: "Sohail/Kshitija/Vedik",
      contact: "9513325109/7760239187/6366289454"
    }
  },
  {
    name: "Iblue hub",
    location: "Hebbal",
    category: "Budgeted(6k or less)",
    price: "6000",
    coordinates: [13.0358, 77.5970],
    poc: {
      name: "Manmohit",
      contact: "097313 39991"
    }
  },
  {
    name: "Novel office",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Sohail/Kshitija/Vedik",
      contact: "9513325109/7760239187/6366289454"
    }
  },
  {
    name: "Share Studio",
    location: "Sadashiva Nagar",
    category: "Sub premium (6k-12k)",
    price: "5500",
    coordinates: [13.0109, 77.5800],
    poc: {
      name: "Sharath",
      contact: "9886615250"
    }
  },
  {
    name: "Classic Converge",
    location: "HSR Layout",
    category: "Budgeted(6k or less)",
    price: "4000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Naunita/Vijay",
      contact: "96067 92069/8840046370"
    }
  },
  {
    name: "Excel Coworks",
    location: "Naagarabhaavi",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [12.9592, 77.5093],
    poc: {
      name: "Shiva Kumar",
      contact: "9060906352"
    }
  },
  {
    name: "office republic",
    location: "HSR Layout",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Jagannath",
      contact: "8494935126"
    }
  },
  {
    name: "Incubex coworks - Manyata Tech Park",
    location: "Nagavara",
    category: "Sub premium (6k-12k)",
    price: "12500",
    coordinates: [13.0500, 77.6200],
    poc: {
      name: "Zeenat/Shragvi/Arjun/Aman",
      contact: "9980862404/6366975276/9611934103/9513374408"
    }
  },
  {
    name: "Kolab",
    location: "Jayanagar",
    category: "Budgeted(6k or less)",
    price: "4000/Seat",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Nimith",
      contact: "9535964144"
    }
  },
  {
    name: "Peridot",
    location: "Basavanagudi",
    category: "Sub premium (6k-12k)",
    price: "4000",
    coordinates: [12.9416, 77.5736],
    poc: {
      name: "Chethan",
      contact: "080 4150 8899"
    }
  },
  {
    name: "Founders Cube",
    location: "Mahadevapura",
    category: "Sub premium (6k-12k)",
    price: "5900",
    coordinates: [12.9916, 77.6958],
    poc: {
      name: "Manobin",
      contact: "6362264830"
    }
  },
  {
    name: "UrbanVault 2024",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Bhavana/Ankit",
      contact: "8904047515/76767 89126"
    }
  },
  {
    name: "UrbanVault 22",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "5000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Bhavana/Ankit",
      contact: "8904047515/76767 89126"
    }
  },
  {
    name: "UrbanVault 316",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "5000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Bhavana/Ankit",
      contact: "8904047515/76767 89126"
    }
  },
  {
    name: "UrbanVault 591",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "5000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Bhavana/Ankit",
      contact: "8904047515/76767 89126"
    }
  },
  {
    name: "IndiQube Marriott",
    location: "Nagavara",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [13.0500, 77.6200],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Work2Gather",
    location: "Kasturi Nagar",
    category: "Budgeted(6k or less)",
    price: "6000",
    coordinates: [13.0196, 77.6585],
    poc: {
      name: "Anu/Sanjay",
      contact: "9611965087/6360189827"
    }
  },
  {
    name: "Workshaala - Vista",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Aravind/Pooja",
      contact: "86677 66403/9916440700"
    }
  },
  {
    name: "Workshaala - Neo",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Aravind/Pooja",
      contact: "86677 66403/9916440700"
    }
  },
  {
    name: "Workshaala - Xenon",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Aravind/Pooja",
      contact: "86677 66403/9916440700"
    }
  },
  {
    name: "IndiQube Opus",
    location: "Sanjeevini Nagar",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [13.0500, 77.5600],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Dolpin connects",
    location: "Kasturi Nagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [13.0196, 77.6585],
    poc: {
      name: "Pavithra",
      contact: "9731229933"
    }
  },
  {
    name: "Novel office Business Park",
    location: "HSR Layout",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Kshitija/Vedik",
      contact: "7760239187/6366289454"
    }
  },
  {
    name: "Bubblespace",
    location: "HRBR Layout",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [13.0196, 77.6425],
    poc: {
      name: "Shaheed",
      contact: "91088 15392"
    }
  },
  {
    name: "Novel office",
    location: "Kudlu Gate",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.8890, 77.6392],
    poc: {
      name: "Sohail/Kshitija/Vedik",
      contact: "9513325109/7760239187/6366289454"
    }
  },
  {
    name: "PiNC Squares",
    location: "Sadashiva Nagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [13.0109, 77.5800],
    poc: {
      name: "Prabhu/Sunanda",
      contact: "96861 98690/9986041241"
    }
  },
  {
    name: "Novel office (Brigade Tech Park)",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "8490",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Sohail/Kshitija/Vedik",
      contact: "9513325109/7760239187/6366289454"
    }
  },
  {
    name: "Novel office",
    location: "Electronic City",
    category: "Sub premium (6k-12k)",
    price: "10500",
    coordinates: [12.8416, 77.6636],
    poc: {
      name: "Sohail/Kshitija/Vedik",
      contact: "9513325109/7760239187/6366289454"
    }
  },
  {
    name: "co workqube",
    location: "Marathahalli",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9550, 77.7011],
    poc: {
      name: "Saurabh Singh",
      contact: "93796 09441"
    }
  },
  {
    name: "Workshaala - Regal",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Pooja",
      contact: "9916440700"
    }
  },
  {
    name: "Novel office",
    location: "Bellandur",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Sohail/Kshitija/Vedik",
      contact: "9513325109/7760239187/6366289454"
    }
  },
  {
    name: "Clayworks Create",
    location: "Bannerghatta",
    category: "Premium(12K or More)",
    price: "12000",
    coordinates: [12.8000, 77.5770],
    poc: {
      name: "Tushar/Deen Dayal",
      contact: "8400292929/9632571010"
    }
  },
  {
    name: "Awfis Derbi Foundation",
    location: "Kudlu Gate",
    category: "Sub premium (6k-12k)",
    price: "8000+",
    coordinates: [12.8890, 77.6392],
    poc: {
      name: "Jayanth/Krithika/Nalini/Kshitiz",
      contact: "9964128544/80882 10031/91130 08624/76250 63367"
    }
  },
  {
    name: "The19th BTM",
    location: "BTM Layout",
    category: "Sub premium (6k-12k)",
    price: "8000/seat",
    coordinates: [12.9165, 77.6101],
    poc: {
      name: "Rishank",
      contact: "95999 27597"
    }
  },
  {
    name: "Awfis Prestige UB City",
    location: "Ashok Nagar",
    category: "Sub premium (6k-12k)",
    price: "10500",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Jayanth/Krithika/Kshitiz",
      contact: "9964128544/80882 10031/76250 63367"
    }
  },
  {
    name: "Awfis Raheja Towers",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "10500",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Jayanth/Krithika/Kshitiz",
      contact: "9964128544/8088210031/76250 63367"
    }
  },
  {
    name: "Awfis Renaissance Centra",
    location: "Mission Road",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9615, 77.5860],
    poc: {
      name: "Jayanth/Krithika/Kshitiz",
      contact: "9964128544/80882 10031/76250 63367"
    }
  },
  {
    name: "Awfis - Vajram Esteva",
    location: "ORR",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9500, 77.7000],
    poc: {
      name: "Jayanth/Krithika/Kshitiz",
      contact: "9964128544/80882 10031/76250 63367"
    }
  },
  {
    name: "Awfis Sabari Complex",
    location: "Residency Road",
    category: "Sub premium (6k-12k)",
    price: "10500",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Jayanth/Krithika/Kshitiz",
      contact: "9964128544/80882 10031/76250 63367"
    }
  },
  {
    name: "Awfis Samrah Plaza",
    location: "St Marks Road",
    category: "Sub premium (6k-12k)",
    price: "10500",
    coordinates: [12.9740, 77.6040],
    poc: {
      name: "Jayanth/Krithika/Kshitiz",
      contact: "9964128544/80882 10031/76250 63367"
    }
  },
  {
    name: "Awfis - Prestige Shantiniketan 1",
    location: "ITPL",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9856, 77.7359],
    poc: {
      name: "Jayanth/Krithika/Kshitiz",
      contact: "9964128544/80882 10031/76250 63367"
    }
  },
  {
    name: "Muse Hub",
    location: "Marathahalli",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9550, 77.7011],
    poc: {
      name: "Arshad",
      contact: "096333 66916"
    }
  },
  {
    name: "Mindcraft spaces",
    location: "Doddakallasandra",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.8880, 77.5540],
    poc: {
      name: "Ankur",
      contact: "9845170988"
    }
  },
  {
    name: "myntWorks",
    location: "Naagarabhaavi",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9592, 77.5093],
    poc: {
      name: "Vinay",
      contact: "082174 75962"
    }
  },
  {
    name: "Starttopia",
    location: "BTM Layout",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9165, 77.6101],
    poc: {
      name: "Anand/Srinivas",
      contact: "9448342964/9448500000"
    }
  },
  {
    name: "Genius co-working",
    location: "Vijaynagar",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9716, 77.5300],
    poc: {
      name: "Narendra",
      contact: "96200 00027"
    }
  },
  {
    name: "Deskhub",
    location: "Rajajinagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9915, 77.5547],
    poc: {
      name: "Srinath",
      contact: "97430 56173"
    }
  },
  {
    name: "nAble Co-working",
    location: "Electronic City",
    category: "Sub premium (6k-12k)",
    price: "4999",
    coordinates: [12.8416, 77.6636],
    poc: {
      name: "Rakesh",
      contact: "9945605112"
    }
  },
  {
    name: "Oyo WorkSpaces - WorkFlo Ranka Junction",
    location: "KR Puram",
    category: "Sub premium (6k-12k)",
    price: "6900",
    coordinates: [12.9960, 77.6960],
    poc: {
      name: "Taranpal Singh/Shivam",
      contact: "8792300847/9582678191"
    }
  },
  {
    name: "Gopalan Promenade Mall",
    location: "Banashankari",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9250, 77.5440],
    poc: {
      name: "Sandip/Sachin/Prabhu",
      contact: "7019798151/9611848269/9916984795"
    }
  },
  {
    name: "Gopalan Innovation",
    location: "Bannerghatta",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.8000, 77.5770],
    poc: {
      name: "Sandip/Sachin/Prabhu",
      contact: "7019798151/9611848269/9916984795"
    }
  },
  {
    name: "Gopalan Millennium Tower",
    location: "Brookefield",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9698, 77.7500],
    poc: {
      name: "Sandip/Sachin/Prabhu",
      contact: "7019798151/9611848269/9916984795"
    }
  },
  {
    name: "Gopalan Corner",
    location: "Ibrahim Sahib Street",
    category: "Sub premium (6k-12k)",
    price: "12000",
    coordinates: [12.9840, 77.6040],
    poc: {
      name: "Sandip/Sachin/Prabhu",
      contact: "7019798151/9611848269/9916984795"
    }
  },
  {
    name: "Gopalan signature",
    location: "Bennigana Halli",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9900, 77.6700],
    poc: {
      name: "Sandip/Sachin/Prabhu",
      contact: "7019798151/9611848269/9916984795"
    }
  },
  {
    name: "nAble Co-working",
    location: "Hosur Rd",
    category: "Budgeted(6k or less)",
    price: "6000",
    coordinates: [12.8406, 77.6613],
    poc: {
      name: "Rakesh",
      contact: "9945605112"
    }
  },
  {
    name: "Office Republic",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Jagannath",
      contact: "8494935126, 6364145126"
    }
  },
  {
    name: "Riseworx",
    location: "Hebbal",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [13.0358, 77.5970],
    poc: {
      name: "Sunil",
      contact: "9686579781"
    }
  },
  {
    name: "Vatika",
    location: "Kadubeesnahalli",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Kuganathan Rajashekar",
      contact: "9000012319"
    }
  },
  {
    name: "Dongle desk",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "10500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Vijay/Ramond",
      contact: "95919 40990/9606333284"
    }
  },
  {
    name: "Phoenix workspace",
    location: "J. P. Nagar",
    category: "Budgeted(6k or less)",
    price: "4000",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Shekhar",
      contact: "9945419005"
    }
  },
  {
    name: "Lad workspaces",
    location: "Bellandur",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Vivek",
      contact: "080700 94700"
    }
  },
  {
    name: "Metro Mingle",
    location: "Rajajinagar",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9915, 77.5547],
    poc: {
      name: "Mohit/Suchan",
      contact: "9008596806/9606292227/8970401520"
    }
  },
  {
    name: "Anthill IQ Workspace",
    location: "Bannerghatta",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.8000, 77.5770],
    poc: {
      name: "Faiz Pasha",
      contact: "9886363099"
    }
  },
  {
    name: "Precedence cowork",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "8500+",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sanket",
      contact: "9880662827"
    }
  },
  {
    name: "Collaboworks",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Vishal",
      contact: "9886534078"
    }
  },
  {
    name: "Trend india",
    location: "Brigade Road",
    category: "Premium(12K or More)",
    price: "14000",
    coordinates: [12.9719, 77.6070],
    poc: {
      name: "Vasudevan/Raja/Vijay/Soya",
      contact: "80562 99002/98805 94864/9043101785/9176145700"
    }
  },
  {
    name: "Novel office",
    location: "Kudlu Gate",
    category: "Sub premium (6k-12k)",
    price: "5990",
    coordinates: [12.8890, 77.6392],
    poc: {
      name: "Sohail/Kshitija/Vedik",
      contact: "9513325109/7760239187/6366289454"
    }
  },
  {
    name: "Novel office Business park",
    location: "Adugodi",
    category: "Sub premium (6k-12k)",
    price: "6990",
    coordinates: [12.9480, 77.6200],
    poc: {
      name: "Sohail/Kshitija/Vedik",
      contact: "9513325109/7760239187/6366289454"
    }
  },
  {
    name: "Startup Huts - 1(Corporate office)",
    location: "HSR Layout",
    category: "Budgeted(6k or less)",
    price: "A/C 6000 Non A/C 5000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Imran/Sonu",
      contact: "96630 03001/7019721669"
    }
  },
  {
    name: "Startup Huts - 2",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "8900",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Imran/Sonu",
      contact: "96630 03001/7019721669"
    }
  },
  {
    name: "Startup Huts - 3",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "8200",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Imran/Sonu",
      contact: "96630 03001/7019721669"
    }
  },
  {
    name: "Startup Huts - 4",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "8200",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Imran/Sonu",
      contact: "96630 03001/7019721669"
    }
  },
  {
    name: "Go workzone",
    location: "Dumlur",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9600, 77.6400],
    poc: {
      name: "Sundaraman",
      contact: "9880485208"
    }
  },
  {
    name: "91 Springboard - MG Road",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "9700",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Sujith/Anshul",
      contact: "6363494868/9818191615"
    }
  },
  {
    name: "91 Springboard - 8th block",
    location: "HSR Layout",
    category: "Budgeted(6k or less)",
    price: "4500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sujith/Anshul",
      contact: "6363494868/9818191615"
    }
  },
  {
    name: "91 Springboard - Indiranagar",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "9700",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Sujith/Anshul",
      contact: "6363494868/9818191615"
    }
  },
  {
    name: "91 Springboard - 7th block",
    location: "HSR Layout",
    category: "Budgeted(6k or less)",
    price: "5200",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sujith/Anshul",
      contact: "6363 494 868/9818191615"
    }
  },
  {
    name: "91 Springboard - JP Nagar",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "8900",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Sujith/Anshul",
      contact: "6363494868/9818191615"
    }
  },
  {
    name: "91 Springboard - ITPL Main Road, Mahadevapura",
    location: "Mahadevapura",
    category: "Sub premium (6k-12k)",
    price: "10700",
    coordinates: [12.9916, 77.6958],
    poc: {
      name: "Sujith/Anshul",
      contact: "6363 494 868/9818191615"
    }
  },
  {
    name: "91 Springboard - Mahadevapura ORR",
    location: "Mahadevapura",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9916, 77.6958],
    poc: {
      name: "Sujith/Anshul",
      contact: "6363 494 868/9818191615"
    }
  },
  {
    name: "Attic Space Symbyosis",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Chandrashekhar/Shonali",
      contact: "9880234567/9538805490"
    }
  },
  {
    name: "Attic Space Trishul",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Chandrashekhar/Sharmishta",
      contact: "9880234567/9538805490"
    }
  },
  {
    name: "Friends Global Coworks",
    location: "Adugodi",
    category: "Budgeted(6k or less)",
    price: "5500",
    coordinates: [12.9480, 77.6200],
    poc: {
      name: "Sarosh Gupta",
      contact: "8884740361"
    }
  },
  {
    name: "Incubes coworking",
    location: "Brookefield",
    category: "Budgeted(6k or less)",
    price: "4000",
    coordinates: [12.9698, 77.7500],
    poc: {
      name: "Radhika",
      contact: "9845947012/8147005660"
    }
  },
  {
    name: "The Executive Centre - Kaman Amaryllis",
    location: "Domlur",
    category: "Premium(12K or More)",
    price: "25000",
    coordinates: [12.9600, 77.6400],
    poc: {
      name: "Salomi",
      contact: "9930404577"
    }
  },
  {
    name: "The Executive Centre - Safina Towers",
    location: "Ali Asker Road",
    category: "Premium(12K or More)",
    price: "30000",
    coordinates: [12.9840, 77.5940],
    poc: {
      name: "Salome",
      contact: "9930404577"
    }
  },
  {
    name: "The Executive Centre - Helios Business Park",
    location: "Kadubeesnahalli",
    category: "Premium(12K or More)",
    price: "12000",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Salomi",
      contact: "9930404577"
    }
  },
  {
    name: "The Executive Centre - Prestige Trade Tower",
    location: "Palace Road",
    category: "Premium(12K or More)",
    price: "37000",
    coordinates: [12.9840, 77.5840],
    poc: {
      name: "Salome",
      contact: "9930404577"
    }
  },
  {
    name: "The Executive Centre - UB City",
    location: "Vittal Mallya Rd",
    category: "Premium(12K or More)",
    price: "12000",
    coordinates: [12.9715, 77.5967],
    poc: {
      name: "Salomi",
      contact: "9930404577"
    }
  },
  {
    name: "IndiQube Sigma",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Arcade",
    location: "Bannerghatta",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.8000, 77.5770],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Ascent",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Amber",
    location: "Domlur",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9600, 77.6400],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Brigade",
    location: "Halasuru",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9730, 77.6220],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Golf View",
    location: "Rustam Bagh Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9600, 77.6500],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Lakeside",
    location: "ORR",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9500, 77.7000],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Treya",
    location: "Kadubeesnahalli",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Embassy Prime",
    location: "C V Raman Nagar",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9891, 77.6585],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Park",
    location: "Domlur",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9600, 77.6400],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Workshaala - Ignis",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Pooja",
      contact: "9916440700"
    }
  },
  {
    name: "Workshaala - Argus",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Pooja",
      contact: "9916440700"
    }
  },
  {
    name: "IndiQube VSPL",
    location: "Sanjeevini Nagar",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [13.0500, 77.5600],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Hexa",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Pacifica",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube ZETA",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "office republic",
    location: "HSR Layout",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Jagannath",
      contact: "8494935126"
    }
  },
  {
    name: "Workden Classic - Domlur Krishna Layout",
    location: "Domlur",
    category: "Budgeted(6k or less)",
    price: "5500",
    coordinates: [12.9600, 77.6400],
    poc: {
      name: "Kunal/Priya",
      contact: "98862 31266/6364000462"
    }
  },
  {
    name: "Evolve",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Nitin/Brijesh",
      contact: "9108447830/9880110193"
    }
  },
  {
    name: "The Executive Centre - Prestige Technostar",
    location: "Whitefield",
    category: "Premium(12K or More)",
    price: "20000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Salomi",
      contact: "9930404577"
    }
  },
  {
    name: "Workden India LLP (100 ft road 1)",
    location: "Indiranagar",
    category: "Budgeted(6k or less)",
    price: "10000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Kunal/Priya",
      contact: "98862 31266/6364000462"
    }
  },
  {
    name: "Workshaala - Cosmic",
    location: "Kadubeesnahalli",
    category: "Sub premium (6k-12k)",
    price: "8499",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Pooja",
      contact: "9916440700"
    }
  },
  {
    name: "VIJETHA SOLUTIONS",
    location: "BCC Layout",
    category: "Budgeted(6k or less)",
    price: "6000",
    coordinates: [12.9633, 77.5250],
    poc: {
      name: "Vijay",
      contact: "9448495281"
    }
  },
  {
    name: "Mangalam Business Centre",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Pratik",
      contact: "9739468098"
    }
  },
  {
    name: "Awfis - St Marks Road 2",
    location: "Ashok Nagar",
    category: "Sub premium (6k-12k)",
    price: "10500",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Jayanth/Krithika/Kshitiz",
      contact: "9964128544/80882 10031/76250 63367"
    }
  },
  {
    name: "Awfis - Lavelle Road 2",
    location: "Ashok Nagar",
    category: "Sub premium (6k-12k)",
    price: "10500",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Jayanth/Krithika/Kshitiz",
      contact: "9964128544/80882 10031/76250 63367"
    }
  },
  {
    name: "TGL Co-Works/Workology",
    location: "Adugodi",
    category: "Sub premium (6k-12k)",
    price: "8990",
    coordinates: [12.9480, 77.6200],
    poc: {
      name: "Mohan",
      contact: "81979 31933/63634 31332"
    }
  },
  {
    name: "Ataura Business Centre",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Nawaz/Sheik",
      contact: "9141399998/9916754999"
    }
  },
  {
    name: "Workshaala - Prime",
    location: "Kadubeesnahalli",
    category: "Sub premium (6k-12k)",
    price: "8500+",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Pooja",
      contact: "9916440700"
    }
  },
  {
    name: "Workshaala - Orbit",
    location: "Nagawara",
    category: "Sub premium (6k-12k)",
    price: "8499",
    coordinates: [13.0500, 77.6200],
    poc: {
      name: "Pooja",
      contact: "9916440700"
    }
  },
  {
    name: "Office Republic",
    location: "Amruthalli",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [13.0672, 77.5978],
    poc: {
      name: "Jagannath",
      contact: "8494935126"
    }
  },
  {
    name: "The Hive Collaborative Workspaces",
    location: "ITPL",
    category: "Premium(12K or More)",
    price: "14000",
    coordinates: [12.9856, 77.7359],
    poc: {
      name: "Aman",
      contact: "8826975747"
    }
  },
  {
    name: "IndiQube Aerial",
    location: "Hosur Rd",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.8406, 77.6613],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "GiGa 363",
    location: "Rajajinagar",
    category: "Budgeted(6k or less)",
    price: "5500",
    coordinates: [12.9915, 77.5547],
    poc: {
      name: "Geetha/Bhavani",
      contact: "8023133232/9110260709"
    }
  },
  {
    name: "My work area",
    location: "Seshadripuram",
    category: "Sub premium (6k-12k)",
    price: "7250",
    coordinates: [12.9915, 77.5798],
    poc: {
      name: "Krishna",
      contact: "9663301113/9663113502"
    }
  },
  {
    name: "Insta Office",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Venkat",
      contact: "099585 63555"
    }
  },
  {
    name: "Incubex coworks - 1",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Zeenat/Shragvi/Arjun/Aman",
      contact: "9980862404/6366975276/9611934103/9513374408"
    }
  },
  {
    name: "Insta Office",
    location: "Sarjapura",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.8602, 77.7855],
    poc: {
      name: "Venkat",
      contact: "099585 63555"
    }
  },
  {
    name: "ikeva",
    location: "ORR",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9500, 77.7000],
    poc: {
      name: "Asma/Shruthi/Tanya",
      contact: "8105846274/9899856458/8105350443"
    }
  },
  {
    name: "office republic",
    location: "Banashankari",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9250, 77.5440],
    poc: {
      name: "Jagannath",
      contact: "8494935126"
    }
  },
  {
    name: "office republic",
    location: "Basavanagudi",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9416, 77.5736],
    poc: {
      name: "Jagannath",
      contact: "8494935126"
    }
  },
  {
    name: "Incubinet",
    location: "J. P. Nagar",
    category: "Premium(12K or More)",
    price: "16000",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Soumya/Vrushali",
      contact: "96200 88831/099024 83389"
    }
  },
  {
    name: "SNY COSMOS Overseas Edu Consultants Pvt Ltd",
    location: "Jayanagar",
    category: "Premium(12K or More)",
    price: "300000+GST managed office",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Siva Kumar",
      contact: "8904427404"
    }
  },
  {
    name: "UrbanDesk",
    location: "Mahalakshmipuram",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [13.0068, 77.5452],
    poc: {
      name: "Abhijith",
      contact: "78998 00771"
    }
  },
  {
    name: "UrbanVault 1133",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Bhavana/Hamsa/Ankit",
      contact: "8904047515/8042994299/76767 89126"
    }
  },
  {
    name: "UrbanVault 97",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Bhavana/Hamsa/Ankit",
      contact: "8904047515/8042994299/76767 89126"
    }
  },
  {
    name: "One Co.Work",
    location: "HSR Layout",
    category: "Budgeted(6k or less)",
    price: "3500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Umesh",
      contact: "7975582128"
    }
  },
  {
    name: "Hobnob HQ Coworking",
    location: "Vasanth Nagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9881, 77.5925],
    poc: {
      name: "Srinivas",
      contact: "99008 18181"
    }
  },
  {
    name: "Uniwork spaces",
    location: "Banashankari",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9250, 77.5440],
    poc: {
      name: "Santosh",
      contact: "9591911119"
    }
  },
  {
    name: "Uniwork spaces",
    location: "HRBR Layout",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [13.0196, 77.6425],
    poc: {
      name: "Santosh",
      contact: "9591911119"
    }
  },
  {
    name: "Co-Gravity",
    location: "Malleswaram",
    category: "Sub premium (6k-12k)",
    price: "5000",
    coordinates: [13.0022, 77.5699],
    poc: {
      name: "Srinivas",
      contact: "9535667862"
    }
  },
  {
    name: "Cospaze managed office",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Aditya",
      contact: "98868 68815"
    }
  },
  {
    name: "Bhive Premium HSR Campus",
    location: "Hosur Rd",
    category: "Sub premium (6k-12k)",
    price: "8600/Seat",
    coordinates: [12.8406, 77.6613],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Bhive coworks - off CMH Road (Premium)",
    location: "Indiranagar",
    category: "Premium(12K or More)",
    price: "16400",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Share Office Solutions",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Sandya/Priya",
      contact: "97399 66778"
    }
  },
  {
    name: "Startup Huts - 5",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sonu",
      contact: "96630 03001"
    }
  },
  {
    name: "Novel office Queens Road",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "10990",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Sohail/Kshitija/Vedik",
      contact: "9513325109/7760239187/6366289454"
    }
  },
  {
    name: "Proworks Ikon",
    location: "Marathahalli",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9550, 77.7011],
    poc: {
      name: "Deepak",
      contact: "9742081612"
    }
  },
  {
    name: "Startup Huts",
    location: "Residency Road",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Sonu",
      contact: "96630 03001"
    }
  },
  {
    name: "GIGA 364",
    location: "Rajajinagar",
    category: "Sub premium (6k-12k)",
    price: "7200",
    coordinates: [12.9915, 77.5547],
    poc: {
      name: "Geetha/Bhavani",
      contact: "8023133232/9110260709"
    }
  },
  {
    name: "Nomads - Branch Out",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Pooja/Satish",
      contact: "8884311166/8884311155"
    }
  },
  {
    name: "Incubex coworks",
    location: "Bannerghatta",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.8000, 77.5770],
    poc: {
      name: "Zeenat/Shragvi/Arjun/Aman",
      contact: "9980862404/6366975276/9611934103/9513374408"
    }
  },
  {
    name: "Incubex coworks - 1 (Thrive) Hub",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Zeenat/Shragvi/Arjun/Aman",
      contact: "9980862404/6366975276/9611934103/9513374408"
    }
  },
  {
    name: "Incubex coworks(HSR23) Hub",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Zeenat/Shragvi/Arjun/Aman",
      contact: "9980862404/6366975276/9611934103/9513374408"
    }
  },
  {
    name: "Incubex coworks - (INR4) Hub",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Zeenat/Shragvi/Arjun/Aman",
      contact: "9980862404/6366975276/9611934103/9513374408"
    }
  },
  {
    name: "Incubex coworks - KRMI Hub",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Zeenat/Shragvi/Arjun/Aman",
      contact: "9980862404/6366975276/9611934103/9513374408"
    }
  },
  {
    name: "Cube27 coworks",
    location: "J. P. Nagar",
    category: "Budgeted(6k or less)",
    price: "4000",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Indradeep",
      contact: "8105133444"
    }
  },
  {
    name: "Kick Workhubs",
    location: "Doddakallasandra",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [12.8880, 77.5540],
    poc: {
      name: "Suman",
      contact: "9535672727"
    }
  },
  {
    name: "WeWork Manyata NXT",
    location: "Nagavara",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [13.0500, 77.6200],
    poc: {
      name: "Upasana/Aksha",
      contact: "9538808891/91677 03391"
    }
  },
  {
    name: "AICDSU Coworks",
    location: "Kudlu Gate",
    category: "Budgeted(6k or less)",
    price: "2950",
    coordinates: [12.8890, 77.6392],
    poc: {
      name: "Vinod",
      contact: "9845757103"
    }
  },
  {
    name: "Invincible coworks",
    location: "Naagarabhaavi",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9592, 77.5093],
    poc: {
      name: "Shashidhar",
      contact: "063601 07135"
    }
  },
  {
    name: "COFFICE Coworking Space",
    location: "Vijaynagar",
    category: "Budgeted(6k or less)",
    price: "4000",
    coordinates: [12.9716, 77.5300],
    poc: {
      name: "Latha",
      contact: "8884343110"
    }
  },
  {
    name: "Bizz hub",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Nikith",
      contact: "9686765227"
    }
  },
  {
    name: "88 spaces",
    location: "Hosur Rd",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.8406, 77.6613],
    poc: {
      name: "Rajesh",
      contact: "8088121313"
    }
  },
  {
    name: "Rent a desk",
    location: "Shivaji Nagar",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9833, 77.6056],
    poc: {
      name: "Hussain/Saiyyad",
      contact: "9951891400/9885421400"
    }
  },
  {
    name: "The Executive Centre - Manyata Tech Park",
    location: "Hebbal",
    category: "Premium(12K or More)",
    price: "25000",
    coordinates: [13.0358, 77.5970],
    poc: {
      name: "Salomi",
      contact: "9930404577"
    }
  },
  {
    name: "Next coworks",
    location: "J. P. Nagar",
    category: "Budgeted(6k or less)",
    price: "5500",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Manish",
      contact: "96867 98170"
    }
  },
  {
    name: "Social Coworking Spaces",
    location: "HRBR Layout",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [13.0196, 77.6425],
    poc: {
      name: "Subhashini",
      contact: "7892785660/9902070719"
    }
  },
  {
    name: "Lorven cowork",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Rangaswami",
      contact: "094806 60777"
    }
  },
  {
    name: "Worktrees",
    location: "Doddanekkundi",
    category: "Budgeted(6k or less)",
    price: "5500",
    coordinates: [12.9701, 77.7042],
    poc: {
      name: "Tejus",
      contact: "099809 92269"
    }
  },
  {
    name: "Workshaala - Delta",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Pooja",
      contact: "9916440700"
    }
  },
  {
    name: "DEX Co works",
    location: "Nagavara",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [13.0500, 77.6200],
    poc: {
      name: "Sajitha",
      contact: "9686404598"
    }
  },
  {
    name: "WorkX Coworking Space",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Harish",
      contact: "7483304093"
    }
  },
  {
    name: "WeWork Salarpuria Symbyosis",
    location: "Bannerghatta",
    category: "Sub premium (6k-12k)",
    price: "10000+",
    coordinates: [12.8000, 77.5770],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "Ventia Coworks",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sufyan",
      contact: "9845882216"
    }
  },
  {
    name: "Colony Coworks",
    location: "Seshadripuram",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9915, 77.5798],
    poc: {
      name: "Bharath",
      contact: "9844354097"
    }
  },
  {
    name: "WeWork Cinnabar Hills",
    location: "Domlur",
    category: "Premium(12K or More)",
    price: "10000+",
    coordinates: [12.9600, 77.6400],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "Beginest harbor - 1",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Amal/Deepa",
      contact: "9108029762/97428 44111"
    }
  },
  {
    name: "Beginest harbor - 2",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Amal/Deepa",
      contact: "9108029762/97428 44111"
    }
  },
  {
    name: "Beginest harbor - 3",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Amal/Deepa",
      contact: "9108029762/97428 44111"
    }
  },
  {
    name: "Beginest harbor - 5",
    location: "Residency Road",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Archana/Deepa",
      contact: "9108029762/97428 44111"
    }
  },
  {
    name: "Common Desk",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Jay Kumar",
      contact: "9986888639"
    }
  },
  {
    name: "WeWork Northgate Business Park",
    location: "Chowdeshwari Layout",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [13.0157, 77.5558],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "Workshaala - Plush",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Aravind/Pooja",
      contact: "86677 66403/9916440700"
    }
  },
  {
    name: "Workshaala - Urban",
    location: "Ashok Nagar",
    category: "Sub premium (6k-12k)",
    price: "8500+",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Aravind/Pooja",
      contact: "86677 66403/9916440700"
    }
  },
  {
    name: "Workshaala - Uno",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "8499",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Aravind/Pooja",
      contact: "86677 66403/9916440700"
    }
  },
  {
    name: "Orbit coworks",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Praveen/Zaki",
      contact: "8050405151/7353779472"
    }
  },
  {
    name: "315 Work Avenue GR tech Park",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Suman",
      contact: "8884465601"
    }
  },
  {
    name: "Sierra Cartel",
    location: "Indiranagar",
    category: "Budgeted(6k or less)",
    price: "6000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Bharath/Nandini",
      contact: "9986357680/6366469843"
    }
  },
  {
    name: "Grayspace Coworks",
    location: "Primrose Rd",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9736, 77.6084],
    poc: {
      name: "Suman",
      contact: "9902992211"
    }
  },
  {
    name: "Workafella",
    location: "Vasanth Nagar",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9881, 77.5925],
    poc: {
      name: "Swetha/Krishna",
      contact: "7397480134/73974 42666"
    }
  },
  {
    name: "The Executive Centre - Prestige Khoday Tower",
    location: "Raj Bhavan Road",
    category: "Premium(12K or More)",
    price: "35000",
    coordinates: [12.9830, 77.5881],
    poc: {
      name: "Salomi",
      contact: "9930404577"
    }
  },
  {
    name: "Quest Offices",
    location: "MG Road",
    category: "Premium(12K or More)",
    price: "13000+",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Rahul",
      contact: "9674899075"
    }
  },
  {
    name: "Workpace",
    location: "Vijaynagar",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9716, 77.5300],
    poc: {
      name: "Nandishwara",
      contact: "7406990090"
    }
  },
  {
    name: "Bhive coworks - (Next to Forum Mall)",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Bhive coworks - 5th Block",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "11600",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Bhive coworks - 27th Main Road",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Bhive Premium Sector 6",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Bhive coworks - Sector 6 Service Road",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "8900",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Bhive coworks - (Next to Trinity Metro)",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "13600",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Clayworks Miniforest",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "12000",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Tushar/Deen Dayal",
      contact: "8400292929/9632571010"
    }
  },
  {
    name: "Clayworks 5B",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "11600",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Tushar/Deen Dayal",
      contact: "8400292929/9632571010"
    }
  },
  {
    name: "SB Office Business solutions",
    location: "Kodhichikkanahalli",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.8885, 77.6234],
    poc: {
      name: "Umar Mohammed",
      contact: "8310963069"
    }
  },
  {
    name: "Venturepluz",
    location: "Shivaji Nagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9833, 77.6056],
    poc: {
      name: "Khan",
      contact: "9620178786"
    }
  },
  {
    name: "IRA Library",
    location: "Jayanagar",
    category: "Budgeted(6k or less)",
    price: "4500",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Sharan/Ranjitha",
      contact: "9886237302/9535049833"
    }
  },
  {
    name: "Workrubix",
    location: "BTM Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9165, 77.6101],
    poc: {
      name: "Raj",
      contact: "9900438961"
    }
  },
  {
    name: "smartworks-olympia national",
    location: "Bellandur",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Rawal/Antoinette",
      contact: "9036005010/80564 65833"
    }
  },
  {
    name: "Workhome",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Phalgun",
      contact: "98868 95136"
    }
  },
  {
    name: "nAble Coworking Office Space",
    location: "Bommasandra",
    category: "Budgeted(6k or less)",
    price: "4000",
    coordinates: [12.8000, 77.7000],
    poc: {
      name: "Rakesh/Suganya",
      contact: "9945605112/95389 61909"
    }
  },
  {
    name: "SmartWorks - Golden Millenium",
    location: "Vasanth Nagar",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9881, 77.5925],
    poc: {
      name: "Rawal/Antoinette",
      contact: "9036005010/80564 65833"
    }
  },
  {
    name: "MindSpaces",
    location: "RR Nagar",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9360, 77.5200],
    poc: {
      name: "Akshay",
      contact: "9916574985"
    }
  },
  {
    name: "BHIVE Workspace (Garuda)",
    location: "BTM Layout",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9165, 77.6101],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Regus raheja towers",
    location: "MG Road",
    category: "Premium(12K or More)",
    price: "20000",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Veenitha/Martin",
      contact: "89432 23999/7001578069"
    }
  },
  {
    name: "Regus IBIS Hotel",
    location: "Garvebhavi Palya",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [12.9000, 77.6300],
    poc: {
      name: "Veenitha/Martin",
      contact: "8943223999/7001578069"
    }
  },
  {
    name: "Regus Manyata Tech Park",
    location: "Thanisandra",
    category: "Premium(12K or More)",
    price: "20000",
    coordinates: [13.0647, 77.6227],
    poc: {
      name: "Veenitha/Martin",
      contact: "89432 23999/7001578069"
    }
  },
  {
    name: "SmartWorks - Sirius Building",
    location: "Vasanth Nagar",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9881, 77.5925],
    poc: {
      name: "Rawal/Antoinette",
      contact: "9036005010/80564 65833"
    }
  },
  {
    name: "SmartWorks - Sargod Imperial",
    location: "Ashok Nagar",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Rawal/Antoinette",
      contact: "9036005010/80564 65833"
    }
  },
  {
    name: "SmartWorks - DSR Techno Cube",
    location: "Varthur Rd",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9439, 77.7372],
    poc: {
      name: "Rawal/Antoinette",
      contact: "9036005010/80564 65833"
    }
  },
  {
    name: "Regus world trade centre",
    location: "Rajajinagar",
    category: "Premium(12K or More)",
    price: "20000",
    coordinates: [12.9915, 77.5547],
    poc: {
      name: "Veenitha/Martin",
      contact: "89432 23999/7001578069"
    }
  },
  {
    name: "Regus Brigade IRV Centre",
    location: "Whitefield",
    category: "Premium(12K or More)",
    price: "20000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Veenitha/Martin",
      contact: "8943223999/7001578069"
    }
  },
  {
    name: "Regus concorde towers",
    location: "Ashok Nagar",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Veenitha/Martin",
      contact: "89432 23999/7001578069"
    }
  },
  {
    name: "Regus Fairway Business Park",
    location: "Challaghatta",
    category: "Premium(12K or More)",
    price: "15000",
    coordinates: [12.9530, 77.6489],
    poc: {
      name: "Veenitha/Martin",
      contact: "89432 23999/7001578069"
    }
  },
  {
    name: "Regus Crescent Tower 4",
    location: "Hobli",
    category: "Premium(12K or More)",
    price: "15000",
    coordinates: [12.9540, 77.6300],
    poc: {
      name: "Veenitha/Martin",
      contact: "89432 23999/7001578069"
    }
  },
  {
    name: "Regus Supreme Overseas Exports Building",
    location: "Jayanagar",
    category: "Premium(12K or More)",
    price: "12000",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Veenitha/Martin",
      contact: "89432 23999/7001578069"
    }
  },
  {
    name: "Regus The Estate Building",
    location: "Yellappa Chetty Layout",
    category: "Premium(12K or More)",
    price: "12000",
    coordinates: [12.9750, 77.5940],
    poc: {
      name: "Veenitha/Martin",
      contact: "89432 23999/7001578069"
    }
  },
  {
    name: "Regus Tejas Arcade 527",
    location: "Rajajinagar",
    category: "Premium(12K or More)",
    price: "12000",
    coordinates: [12.9915, 77.5547],
    poc: {
      name: "Veenitha/Martin",
      contact: "89432 23999/7001578069"
    }
  },
  {
    name: "SmartWorks - Prestige Zeenath",
    location: "Rama Nagar",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9726, 77.5934],
    poc: {
      name: "Rawal/Antoinette",
      contact: "9036005010/80564 65833"
    }
  },
  {
    name: "SmartWorks - Karle Town",
    location: "Nagavara",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [13.0500, 77.6200],
    poc: {
      name: "Rawal/Antoinette",
      contact: "9036005010/80564 65833"
    }
  },
  {
    name: "Rainmakers",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Deepika/Aparna/Vidya",
      contact: "7349877374/6364 122 212/6364122212"
    }
  },
  {
    name: "Sierra Cartel",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Bharath/Nandini",
      contact: "9986357680/6366469843"
    }
  },
  {
    name: "Golden Square",
    location: "Hebbal",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [13.0358, 77.5970],
    poc: {
      name: "David/Som Shekhar",
      contact: "9986452888/9945664830"
    }
  },
  {
    name: "IndiQube Celestia",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube The Leela",
    location: "HAL",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9600, 77.6515],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube HM Vibha",
    location: "Adugodi",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9480, 77.6200],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Logos",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Epsilon",
    location: "Domlur",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9600, 77.6400],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Garden",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Grandeur",
    location: "Ashok Nagar",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Attic Space Greenage",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Chandrashekhar/Shonali",
      contact: "9880234567/9538805490"
    }
  },
  {
    name: "Nomads - Daily Huddle",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "1,50,000/month",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Pooja/Satish",
      contact: "8884311166/8884311155"
    }
  },
  {
    name: "Attic Space Lotus",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Chandrashekhar/Shanali",
      contact: "9880234567/9538805490"
    }
  },
  {
    name: "Office Republic",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Jagannath",
      contact: "8494935126"
    }
  },
  {
    name: "SmartWorks - Vaishnavi Tech Park",
    location: "Bellandur",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Rawal/Antoinette",
      contact: "9036005010/80564 65833"
    }
  },
  {
    name: "Coworks 99",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "",
      contact: "8867005405"
    }
  },
  {
    name: "SmartWorks - Vaishnavi Tech Square",
    location: "Begur",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.8523, 77.6261],
    poc: {
      name: "Rawal/Antoinette",
      contact: "9036005010/80564 65833"
    }
  },
  {
    name: "Obeya Elan",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Josy",
      contact: "9742812891"
    }
  },
  {
    name: "Hyperspace Techno",
    location: "Kaikondrahalli",
    category: "Budgeted(6k or less)",
    price: "4000",
    coordinates: [12.9163, 77.6821],
    poc: {
      name: "Dhana Sekar",
      contact: "9025721898"
    }
  },
  {
    name: "Oyo WorkSpaces - WorkFlo Hosur Road",
    location: "Hosur Rd",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.8406, 77.6613],
    poc: {
      name: "Shivam/Taranpal",
      contact: "9582678191/8792300847"
    }
  },
  {
    name: "WeWork Embassy Golf links",
    location: "Domlur",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [12.9600, 77.6400],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "WeWork Galaxy",
    location: "Residency Road",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "WeWork Prestige Atlanta",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "WeWork Prestige Cube",
    location: "Adugodi",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [12.9480, 77.6200],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "WeWork Embassy Tech Village",
    location: "Bellandur",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "WeWork Prestige Central",
    location: "Shivaji Nagar",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [12.9833, 77.6056],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "WeWork Salarpuria Magnificia",
    location: "KR Puram",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [12.9960, 77.6960],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "WeWork RMZ Latitude Commercial",
    location: "Hebbal",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [13.0358, 77.5970],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "WeWork The Pavillion",
    location: "Church Street",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [12.9754, 77.6059],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "WeWork Vaishnavi Signature",
    location: "Bellandur",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "WeWork Embassy Quest",
    location: "Brigade Road",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [12.9719, 77.6070],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "Proworks Suraksha",
    location: "Ashok Nagar",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Deepak",
      contact: "9742081612/7303413027"
    }
  },
  {
    name: "Proworks Edge",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Deepak",
      contact: "97420 81612"
    }
  },
  {
    name: "Proworks Statesman",
    location: "Bellandur",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Deepak",
      contact: "97420 81612"
    }
  },
  {
    name: "Proworks Avenue",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Deepak",
      contact: "97420 81612"
    }
  },
  {
    name: "Oyo WorkSpaces - Innov8 Prestige tech park",
    location: "Kadubeesnahalli",
    category: "Sub premium (6k-12k)",
    price: "13500",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Shivam/Taranpal",
      contact: "9582678191/8792300847"
    }
  },
  {
    name: "Oyo WorkSpaces - WorkFlo Kalakota Heights",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Suresh/Shivam",
      contact: "93437 38695/9582678191"
    }
  },
  {
    name: "Oyo WorkSpaces - WorkFlo Somara CoWorks",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Somashekar",
      contact: "9880477447"
    }
  },
  {
    name: "Oyo WorkSpaces - WorkFlo Domlur",
    location: "Domlur",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9600, 77.6400],
    poc: {
      name: "Suresh/Shivam",
      contact: "93437 38695/9582678191"
    }
  },
  {
    name: "Incuspaze - Madhu Malini",
    location: "Electronic City",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.8416, 77.6636],
    poc: {
      name: "Sarthak",
      contact: "9205955564"
    }
  },
  {
    name: "Incuspaze - Space H",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sarthak",
      contact: "9205955564"
    }
  },
  {
    name: "Trend India 2",
    location: "Rahija Towers",
    category: "Premium(12K or More)",
    price: "15000",
    coordinates: [12.9750, 77.6030],
    poc: {
      name: "Vasudevan/Raja/Vijay",
      contact: "80562 99002/98805 94864/9043101785"
    }
  },
  {
    name: "Hustle Hub",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Reshma/Ligi/Prathibha/Divya",
      contact: "8792515528/9663939505/91086 24982/6960316778"
    }
  },
  {
    name: "Oyo Innov8 _ Golden Towers",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Shivam",
      contact: "9582678191"
    }
  },
  {
    name: "WeWork RMZ Latitude Commercial",
    location: "Hebbal",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [13.0358, 77.5970],
    poc: {
      name: "Upasana/Aksha/Laksha",
      contact: "9538808891/91677 03391/9148427038"
    }
  },
  {
    name: "Hustle Hub",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Reshma/Ligi/Prathibha/Divya",
      contact: "8792515528/9663939505/91086 24982/6960316778"
    }
  },
  {
    name: "Ira Study Room",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sharan",
      contact: "9886237302/8971858999"
    }
  },
  {
    name: "Attic Space Sarvatra",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Chandrashekhar/Shonali",
      contact: "9880234567/9538805490"
    }
  },
  {
    name: "Cowrks",
    location: "Yelahanka",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [13.1000, 77.6000],
    poc: {
      name: "Megha",
      contact: "7996577599"
    }
  },
  {
    name: "Cowrks Infinity",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Megha",
      contact: "7996577599"
    }
  },
  {
    name: "Cowrks Ecoworld",
    location: "Ecoworld",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9250, 77.6840],
    poc: {
      name: "Megha",
      contact: "7996577599"
    }
  },
  {
    name: "Cowrks NXT",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Megha",
      contact: "7996577599"
    }
  },
  {
    name: "Cowrks Residency",
    location: "Residency Road",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Megha",
      contact: "7996577599"
    }
  },
  {
    name: "UrbanVault 107",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Bhavana/Hamsa/Ankit",
      contact: "8904047515/8042994299/76767 89126"
    }
  },
  {
    name: "Novel office",
    location: "CBD",
    category: "Sub premium (6k-12k)",
    price: "10990",
    coordinates: [12.9719, 77.5946],
    poc: {
      name: "Sohail/Kshitija/Vedik",
      contact: "9513325109/7760239187/6366289454"
    }
  },
  {
    name: "Kokarya Business Synergy Centre",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sharath",
      contact: "9886045479/9008857909"
    }
  },
  {
    name: "365 shared - Invision",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Sudheer",
      contact: "9986235345"
    }
  },
  {
    name: "Indiqube Ashford",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Indiqube Garden, Tower B",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Indiqube Sunshine",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube AMR",
    location: "Garvebhavi Palya",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9000, 77.6300],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Indiqube AMR, Tower A",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6900",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Indiqube Aura",
    location: "Silk Board",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9200, 77.6200],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Indiqube GVH, Tower B",
    location: "Rustam Bagh Layout",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9600, 77.6500],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Indiqube Plaza",
    location: "Murgesh Pallya",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9600, 77.6500],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube Alpha",
    location: "Kadubeesnahalli",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "IndiQube iNiche",
    location: "ORR",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9500, 77.7000],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Indiqube The Fore",
    location: "Ambedkar Nagar",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9500, 77.5541],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Indiqube Crystal",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Indiqube Sapphire",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Indiqube Miniforest",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "12000",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "Indiqube South Summit",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Karthik/Menaka/Ranjith",
      contact: "97414 22704/9980006520/6364895937"
    }
  },
  {
    name: "ISprout Shilpitha Techpark",
    location: "ORR",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9500, 77.7000],
    poc: {
      name: "Rahul Shenoy",
      contact: "8712606290"
    }
  },
  {
    name: "GoodWorks",
    location: "ITPL",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9856, 77.7359],
    poc: {
      name: "Arun/Krithik",
      contact: "7411575652/9035460930"
    }
  },
  {
    name: "GoodWorks",
    location: "Nallurahalli",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9740, 77.7332],
    poc: {
      name: "Arun/Krithik",
      contact: "7411575652/9035460930"
    }
  },
  {
    name: "GoodWorks",
    location: "Bellandur",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Arun/Krithik",
      contact: "7411575652/9035460930"
    }
  },
  {
    name: "GoodWorks",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Arun/Krithik",
      contact: "7411575652/9035460930"
    }
  },
  {
    name: "GoodWorks",
    location: "Manayata Tech Park",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [13.0592, 77.6154],
    poc: {
      name: "Arun/Krithik",
      contact: "7411575652/9035460930"
    }
  },
  {
    name: "GoodWorks",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Arun/Krithik",
      contact: "7411575652/9035460930"
    }
  },
  {
    name: "Incubex coworks - Langford Rd",
    location: "Shanti Nagar",
    category: "Sub premium (6k-12k)",
    price: "14499",
    coordinates: [12.9552, 77.5912],
    poc: {
      name: "Zeenat/Shragvi/Arjun/Aman",
      contact: "9980862404/6366975276/9611934103/9513374408"
    }
  },
  {
    name: "Incubex- Brigade Triumph Hub",
    location: "Hebbal",
    category: "Sub premium (6k-12k)",
    price: "10500",
    coordinates: [13.0358, 77.5970],
    poc: {
      name: "Zeenat/Shragvi/Arjun/Aman",
      contact: "9980862404/6366975276/9611934103/9513374408"
    }
  },
  {
    name: "Incubex - Outer Ring Road (ORR) Hub",
    location: "Kadubeesnahalli",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Zeenat/Shragvi/Arjun/Aman",
      contact: "9980862404/6366975276/9611934103/9513374408"
    }
  },
  {
    name: "UrbanVault 761",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Bhavana/Hamsa/Ankit",
      contact: "8904047515/8042994299/76767 89126"
    }
  },
  {
    name: "UrbanVault 1608",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Bhavana/Hamsa/Ankit",
      contact: "8904047515/8042994299/76767 89126"
    }
  },
  {
    name: "UrbanVault 2908",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Bhavana/Hamsa/Ankit",
      contact: "8904047515/8042994299/76767 89126"
    }
  },
  {
    name: "Incubex - Tribe",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Zeenat/Shragvi/Arjun/Aman",
      contact: "9980862404/6366975276/9611934103/9513374408"
    }
  },
  {
    name: "Clayworks CBD",
    location: "Ashok Nagar",
    category: "Premium(12K or More)",
    price: "15000",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Tushar/Deen Dayal",
      contact: "8400292929/9632571010"
    }
  },
  {
    name: "Clayworks Shankara",
    location: "Kanakapura Road",
    category: "Premium(12K or More)",
    price: "11000",
    coordinates: [12.8498, 77.5618],
    poc: {
      name: "Tushar/Deen Dayal",
      contact: "8400292929/9632571010"
    }
  },
  {
    name: "Clayworks South End",
    location: "Basavanagudi",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9416, 77.5736],
    poc: {
      name: "Tushar/Deen Dayal",
      contact: "8400292929/9632571010"
    }
  },
  {
    name: "Clayworks HSR",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Tushar/Deen Dayal",
      contact: "8400292929/9632571010"
    }
  },
  {
    name: "Clayworks Inspiron",
    location: "BTM Layout",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9165, 77.6101],
    poc: {
      name: "Tushar/Deen Dayal",
      contact: "8400292929/9632571010"
    }
  },
  {
    name: "Awfis Prestige Technology Park",
    location: "Marathahalli",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9550, 77.7011],
    poc: {
      name: "Jayanth/Krithika/Kshitiz/Nalini",
      contact: "9964128544/80882 10031/76250 63367/9113008624"
    }
  },
  {
    name: "Awfis Soul Space Paradigm",
    location: "Munnekalau Village, Varthur",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9575, 77.7303],
    poc: {
      name: "Jayanth/Krithika/Kshitiz/Nalini/Rohan",
      contact: "9964128544/80882 10031/76250 63367/9113008624/9167180947"
    }
  },
  {
    name: "Awfis Prestige Blue Chip",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Jayanth/Krithika/Kshitiz/Nalini",
      contact: "9964128544/80882 10031/76250 63367/9113008624"
    }
  },
  {
    name: "Awfis Prestige Dotcom",
    location: "Residency Road",
    category: "Sub premium (6k-12k)",
    price: "14000",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Jayanth/Krithika/Kshitiz/Nalini",
      contact: "9964128544/80882 10031/76250 63367/9113008624"
    }
  },
  {
    name: "Awfis- One",
    location: "Halasuru",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9730, 77.6220],
    poc: {
      name: "Jayanth/Krithika/Kshitiz/Nalini",
      contact: "9964128544/80882 10031/76250 63367/9113008624"
    }
  },
  {
    name: "Novel office MSR PARK",
    location: "Marathahalli",
    category: "Sub premium (6k-12k)",
    price: "8490",
    coordinates: [12.9550, 77.7011],
    poc: {
      name: "Sohail/Kshitija/Vedik",
      contact: "9513325109/7760239187/6366289454"
    }
  },
  {
    name: "Startup Huts - 6",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Sonu",
      contact: "9663003001"
    }
  },
  {
    name: "Attic Space Shreyas Plaza",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Chandrashekhar/Shonali",
      contact: "9880234567/9538805490"
    }
  },
  {
    name: "Attic Space Krishvi",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Chandrashekhar/Shonali",
      contact: "9880234567/9538805490"
    }
  },
  {
    name: "Attic Space Moneta",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Chandrashekhar/Sharmishta",
      contact: "9880234567/9538805490"
    }
  },
  {
    name: "Attic Space Vistara",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Chandrashekhar/Shanali",
      contact: "9880234567/9538805490"
    }
  },
  {
    name: "Attic Space Chanakya",
    location: "HSR Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Chandrashekhar/Sharmishta",
      contact: "9880234567/9538805490"
    }
  },
  {
    name: "Attic Space Smart Square",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Chandrashekhar/Shonali",
      contact: "9880234567/9538805490"
    }
  },
  {
    name: "Attic Space Rudra",
    location: "Hsr Layout",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Chandrashekhar/Shanali",
      contact: "9880234567/9538805490"
    }
  },
  {
    name: "Incubes coworking",
    location: "ITPL",
    category: "Budgeted(6k or less)",
    price: "4000",
    coordinates: [12.9856, 77.7359],
    poc: {
      name: "Radhika",
      contact: "9845947012 / 8147005660"
    }
  },
  {
    name: "Workden India LLP - Double Road",
    location: "Indiranagar",
    category: "Budgeted(6k or less)",
    price: "10000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Kunal / Priya",
      contact: "98862 31266 / 6364000462"
    }
  },
  {
    name: "Workden India LLP (100 ft road 2)",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Kunal / Priya",
      contact: "98862 31266 / 6364000462"
    }
  },
  {
    name: "Workden - Old Airport Road",
    location: "Domlur",
    category: "Budgeted(6k or less)",
    price: "7000",
    coordinates: [12.9600, 77.6400],
    poc: {
      name: "Kunal / Priya",
      contact: "98862 31266 / 6364000462"
    }
  },
  {
    name: "Nomads - New Horizon",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "8700",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Pooja / Satish",
      contact: "8884311166 / 8884311155"
    }
  },
  {
    name: "Nomads - 12 TH MAIN | Branch Out",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "550000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Pooja / Satish",
      contact: "8884311166 / 8884311155"
    }
  },
  {
    name: "Nomads - Jeevan Bheema Nagar",
    location: "HAL",
    category: "Sub premium (6k-12k)",
    price: "13000",
    coordinates: [12.9600, 77.6515],
    poc: {
      name: "Pooja / Satish",
      contact: "8884311166 / 8884311155"
    }
  },
  {
    name: "Nomads - Arena",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "250000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Pooja / Satish",
      contact: "8884311166 / 8884311155"
    }
  },
  {
    name: "Nomads - Metro",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Pooja / Satish",
      contact: "8884311166 / 8884311155"
    }
  },
  {
    name: "Collab24 Koramangala",
    location: "Hsr Layout",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "Saurav",
      contact: "9590149742"
    }
  },
  {
    name: "COCKTAIL",
    location: "Hsr Layout",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9116, 77.6386],
    poc: {
      name: "RAGAVENDHRA",
      contact: "9538840016"
    }
  },
  {
    name: "NOVEL-customizable offices&coworking",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Sohail / Kshitija / Vedik",
      contact: "9513325109 / 7760239187 / 6366289454"
    }
  },
  {
    name: "PRO WORKS",
    location: "old airport road",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9615, 77.6484],
    poc: {
      name: "VASANT",
      contact: "9845582857"
    }
  },
  {
    name: "PRO WORKS",
    location: "Kasturi Nagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [13.0196, 77.6585],
    poc: {
      name: "VASANT",
      contact: "9845582857"
    }
  },
  {
    name: "PRO WORKS",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "VASANT",
      contact: "9845582857"
    }
  },
  {
    name: "SYNERGE WORKSPACE",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Melvin",
      contact: "9036009600 / 96639 33767"
    }
  },
  {
    name: "VSION TECH PARK",
    location: "RT Nagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [13.0245, 77.5974],
    poc: {
      name: "Manjunath / Pramodh",
      contact: "6361341780 / 9986975146"
    }
  },
  {
    name: "Attic Spaces MM Enclave",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Chandrashekhar / Shonali",
      contact: "9880234567 / 9538805490"
    }
  },
  {
    name: "Attic Spaces Legacy",
    location: "Bellandur",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Chandrashekhar / Sharmishta",
      contact: "9880234567 / 9538805490"
    }
  },
  {
    name: "Share Space",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Surekha Suresh",
      contact: "9886312798"
    }
  },
  {
    name: "Hubstairs",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "PRIYA",
      contact: "9611567818"
    }
  },
  {
    name: "BHIVE Premium Whitefield Campus & Convention Centre",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "10400",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Hoda Workspace Sector - 6",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "12000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Mandara",
      contact: "9482105411"
    }
  },
  {
    name: "Cre Space",
    location: "Koramangala",
    category: "Budgeted(6k or less)",
    price: "6500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Vijay",
      contact: "96863 17660"
    }
  },
  {
    name: "Spacemakers",
    location: "New BEL Road",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [13.0340, 77.5672],
    poc: {
      name: "Rahul",
      contact: "7411055557"
    }
  },
  {
    name: "Work Theater - CHAITRA VENTURES",
    location: "Naagarabhaavi",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9592, 77.5093],
    poc: {
      name: "Karthik Magaji",
      contact: "8884569990"
    }
  },
  {
    name: "COMFORT WORK",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Lakshmi",
      contact: "9620860860"
    }
  },
  {
    name: "works99",
    location: "Koramangala",
    category: "Budgeted(6k or less)",
    price: "8500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Abhishek / Varun",
      contact: "9980419995 / 88670 05405"
    }
  },
  {
    name: "Proworks",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Bhuvana / Harsha / Suresh",
      contact: "89710 17776 / 9740061872 / 9342194399"
    }
  },
  {
    name: "sun square business hub",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Vandana",
      contact: "8431915291"
    }
  },
  {
    name: "Cosmos PMS Prime",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Amit",
      contact: "74068 98899"
    }
  },
  {
    name: "Ant Spaces",
    location: "Whitefield",
    category: "Budgeted(6k or less)",
    price: "6000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Anuj",
      contact: "7799400500"
    }
  },
  {
    name: "Beginest Harbor",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "DEEPA",
      contact: "9742844111"
    }
  },
  {
    name: "Spiffy Cowork",
    location: "Ganga Nagar, Hebbal",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [13.0366, 77.5971],
    poc: {
      name: "Contact",
      contact: "098860 71333"
    }
  },
  {
    name: "Cove Stays",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "12000",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Mani",
      contact: "8105100800 / 9606113435"
    }
  },
  {
    name: "Cove Offices",
    location: "Richmond",
    category: "Sub premium (6k-12k)",
    price: "12000",
    coordinates: [12.9612, 77.6050],
    poc: {
      name: "Contact",
      contact: "8105100800 / 9606113436"
    }
  },
  {
    name: "My Branch Services pvt ltd",
    location: "Richmond",
    category: "Sub premium (6k-12k)",
    price: "12000",
    coordinates: [12.9612, 77.6050],
    poc: {
      name: "Veenitha",
      contact: "02261378818 / 84519 99506"
    }
  },
  {
    name: "HubX Coworking Offices",
    location: "NS palya",
    category: "Sub premium (6k-12k)",
    price: "250000 per month",
    coordinates: [12.9070, 77.6020],
    poc: {
      name: "Purushotham",
      contact: "95351 59498"
    }
  },
  {
    name: "Incubinet",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Vrushali / Soumya",
      contact: "099024 83389 / 96200 88831"
    }
  },
  {
    name: "Hubnxtdoor",
    location: "J. P. Nagar",
    category: "Budgeted(6k or less)",
    price: "3500",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Priyadarshini",
      contact: "96063 65533"
    }
  },
  {
    name: "MindCraft Spaces",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Ankur",
      contact: "098451 70988"
    }
  },
  {
    name: "MindCraft Spaces",
    location: "Bannerghatta",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.8000, 77.5770],
    poc: {
      name: "Ankur",
      contact: "098451 70988"
    }
  },
  {
    name: "Sarva Space",
    location: "Anjanapura Main Rd",
    category: "Budgeted(6k or less)",
    price: "4000",
    coordinates: [12.8471, 77.5384],
    poc: {
      name: "Asha",
      contact: "98446 00089"
    }
  },
  {
    name: "Spacexworks Business Services",
    location: "Bikasipura",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.8850, 77.5451],
    poc: {
      name: "Contact",
      contact: "099000 29602"
    }
  },
  {
    name: "CO DESKK360",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Sirish",
      contact: "98457 60350"
    }
  },
  {
    name: "Specico Office",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Vishal",
      contact: "9353005914"
    }
  },
  {
    name: "Steadwork",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "11500",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Lavanya",
      contact: "8431494401"
    }
  },
  {
    name: "At Work",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "11500",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Ali",
      contact: "9739714051"
    }
  },
  {
    name: "Spacemakers",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Contact",
      contact: "8884542525"
    }
  },
  {
    name: "Uniwork Spaces",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Contact",
      contact: "98806 67711 / 95919 11119"
    }
  },
  {
    name: "Preppy Workspaces",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Skanda",
      contact: "7019927305"
    }
  },
  {
    name: "KNOVATION",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Akash / Apoorva RK",
      contact: "97422 79972 / 08049527292"
    }
  },
  {
    name: "ClayWorks South End",
    location: "Jayanagar",
    category: "Premium(12K or More)",
    price: "11000",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Tushar / Deen Dayal",
      contact: "8400292929 / 9632571010"
    }
  },
  {
    name: "Mikro Grafeio",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Ratna",
      contact: "8550099887"
    }
  },
  {
    name: "Anthill IQ Workspace",
    location: "Bannerghatta",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.8000, 77.5770],
    poc: {
      name: "Faiz Pasha / Tousif",
      contact: "9886363099 / 8884444641"
    }
  },
  {
    name: "funda spaces",
    location: "Hosur Rd",
    category: "Sub premium (6k-12k)",
    price: "6600",
    coordinates: [12.8406, 77.6613],
    poc: {
      name: "Namrata",
      contact: "73492 12627"
    }
  },
  {
    name: "Creware Coworks",
    location: "Electronic City",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.8416, 77.6636],
    poc: {
      name: "Abhinay / Bhavy / Bhargav",
      contact: "7829413575 / 8559845847 / 9929807846"
    }
  },
  {
    name: "Indus Global Office Space",
    location: "Bommasandra",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [12.8000, 77.7000],
    poc: {
      name: "Naufal",
      contact: "09663380969"
    }
  },
  {
    name: "Liftx Co-works",
    location: "Malleswaram",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [13.0022, 77.5699],
    poc: {
      name: "Kavitha",
      contact: "9113800972"
    }
  },
  {
    name: "Unispaces Business Centre",
    location: "Kadubeesnahalli",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Prajwal",
      contact: "9100080014"
    }
  },
  {
    name: "Incubex (Skav 909 (CBD) Hub",
    location: "Lavelle Road",
    category: "Sub premium (6k-12k)",
    price: "15000",
    coordinates: [12.9694, 77.5947],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Incubex - JP Nagar (JPN) Hub",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Incubex (CBD)",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "10500",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Office Republic Vakil Square",
    location: "Bannerghatta",
    category: "Sub premium (6k-12k)",
    price: "8500/Seat (Negotiable)",
    coordinates: [12.8000, 77.5770],
    poc: {
      name: "Jagannath",
      contact: "8494935126 / 6364005126"
    }
  },
  {
    name: "GoSpaze Coworking Centre",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "9900",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Shinoj / Vinodh / Anjali",
      contact: "88804 44111 / 9108262299 / 9606747583"
    }
  },
  {
    name: "GoSpaze Coworking Centre",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "9900",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Shinoj / Vinodh / Anjali",
      contact: "88804 44111 / 9108262299 / 9606747583"
    }
  },
  {
    name: "Novel Office workhub",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "7990",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Sohail / Kshitija / Vedik",
      contact: "9513325109 / 7760239187 / 6366289454"
    }
  },
  {
    name: "Novel Office Central",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "10990",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Sohail / Kshitija / Vedik",
      contact: "9513325109 / 7760239187 / 6366289454"
    }
  },
  {
    name: "Clayworks Opus",
    location: "Richmond",
    category: "Premium(12K or More)",
    price: "11000",
    coordinates: [12.9612, 77.6050],
    poc: {
      name: "Tushar / Deen Dayal",
      contact: "8400292929 / 9632571010"
    }
  },
  {
    name: "Sparkplug coworks",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Varun / Rohit",
      contact: "9620351127 / 97422 20607"
    }
  },
  {
    name: "Think Tank Offices",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Prabhu",
      contact: "9036349899"
    }
  },
  {
    name: "InURoffice",
    location: "HBR Layout",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [13.0288, 77.6365],
    poc: {
      name: "Renuka",
      contact: "96639 55442"
    }
  },
  {
    name: "Urspace",
    location: "Vijaynagar",
    category: "Budgeted(6k or less)",
    price: "5500",
    coordinates: [12.9716, 77.5300],
    poc: {
      name: "Pramodh",
      contact: "9108299856"
    }
  },
  {
    name: "Pole Workspaces",
    location: "Vijaynagar",
    category: "Sub premium (6k-12k)",
    price: "5000",
    coordinates: [12.9716, 77.5300],
    poc: {
      name: "Ganga",
      contact: "8618326472"
    }
  },
  {
    name: "Spiffy Cowork (HEBBAL)",
    location: "Hebbal",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [13.0358, 77.5970],
    poc: {
      name: "Contact",
      contact: "098860 71333"
    }
  },
  {
    name: "The Hub @ Peepal Tree - Colive",
    location: "ST John's Road",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9822, 77.6097],
    poc: {
      name: "Rakesh",
      contact: "9535137685"
    }
  },
  {
    name: "The Work Address - Vaishnavi",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Kavya",
      contact: "90199 17200"
    }
  },
  {
    name: "365 shared - Delta",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Sudheer (MD)",
      contact: "9986235345"
    }
  },
  {
    name: "Workshaala - #2727",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Pooja",
      contact: "9916440700"
    }
  },
  {
    name: "Workshaala – Prestige Tower",
    location: "CBD",
    category: "Sub premium (6k-12k)",
    price: "8499",
    coordinates: [12.9719, 77.5946],
    poc: {
      name: "Pooja",
      contact: "9916440700"
    }
  },
  {
    name: "Workshaala - Jupiter",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Pooja",
      contact: "9916440700"
    }
  },
  {
    name: "Workshaala - Gama",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7900",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Pooja",
      contact: "9916440700"
    }
  },
  {
    name: "Workshaala – Knowledge Court",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Pooja",
      contact: "9916440700"
    }
  },
  {
    name: "Workshaala – GR Tech Park",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Pooja",
      contact: "9916440700"
    }
  },
  {
    name: "Enzyme Office - The Hub - Coworking space",
    location: "Bellandur",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Sreedhar",
      contact: "7899482939"
    }
  },
  {
    name: "Share Office Solutions",
    location: "Halasuru",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9730, 77.6220],
    poc: {
      name: "Kavitha / Priya",
      contact: "9739966778"
    }
  },
  {
    name: "The Executive Centre - UB City",
    location: "Vittal Mallya Rd",
    category: "Premium(12K or More)",
    price: "12000",
    coordinates: [12.9715, 77.5967],
    poc: {
      name: "Salomi",
      contact: "9930404577"
    }
  },
  {
    name: "The Executive Centre - Helios Business Park",
    location: "Kadubeesnahalli",
    category: "Premium(12K or More)",
    price: "25000",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Salomi",
      contact: "9930404577"
    }
  },
  {
    name: "Giga 368",
    location: "Rajajinagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9915, 77.5547],
    poc: {
      name: "Geetha (CEO) / Bhavani",
      contact: "8023133232 / 9110260709"
    }
  },
  {
    name: "Giga 475",
    location: "Nagapura",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [13.0060, 77.5470],
    poc: {
      name: "Geetha (CEO) / Bhavani",
      contact: "8023133232 / 9110260709"
    }
  },
  {
    name: "Social CoWorking Spaces Community",
    location: "Horamavu",
    category: "Budgeted(6k or less)",
    price: "4500",
    coordinates: [13.0382, 77.6552],
    poc: {
      name: "Subhashini",
      contact: "7892785660"
    }
  },
  {
    name: "Sierra Cartel",
    location: "Kammanahalli",
    category: "Budgeted(6k or less)",
    price: "3250",
    coordinates: [13.0261, 77.6337],
    poc: {
      name: "Bharath / Nandini",
      contact: "9986357680 / 6366469843"
    }
  },
  {
    name: "IndiQube Royal",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Karthik / Menaka / Ranjith",
      contact: "97414 22704 / 9980006520 / 6364895937"
    }
  },
  {
    name: "IndiQube Tech Point",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "9499",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Karthik / Menaka / Ranjith",
      contact: "97414 22704 / 9980006520 / 6364895937"
    }
  },
  {
    name: "IndiQube Helios Tech Park",
    location: "Kadubeesnahalli",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Karthik / Menaka / Ranjith",
      contact: "97414 22704 / 9980006520 / 6364895937"
    }
  },
  {
    name: "IndiQube Serenity",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Karthik / Menaka / Ranjith",
      contact: "97414 22704 / 9980006520 / 6364895937"
    }
  },
  {
    name: "IndiQube Mantri Elegance",
    location: "BTM Layout",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9165, 77.6101],
    poc: {
      name: "Karthik / Menaka / Ranjith",
      contact: "97414 22704 / 9980006520 / 6364895937"
    }
  },
  {
    name: "Makers tribe",
    location: "Whitefield",
    category: "Budgeted(6k or less)",
    price: "3500",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Sakthi",
      contact: "8610086243 / 8870788712"
    }
  },
  {
    name: "Workoville workspaces",
    location: "HRBR Layout",
    category: "Sub premium (6k-12k)",
    price: "100 per sft",
    coordinates: [13.0196, 77.6425],
    poc: {
      name: "Deepthi",
      contact: "95139 00944"
    }
  },
  {
    name: "365 Shared - Echo",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Sudheer (MD)",
      contact: "9986235345"
    }
  },
  {
    name: "Isprout NR Enclave",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Rahul Shenoy",
      contact: "8712606290"
    }
  },
  {
    name: "CACHE",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Mohan / Uday Kumar",
      contact: "98451 48085 / 98459 41965"
    }
  },
  {
    name: "CIIC Co - Working Space",
    location: "Binny Pete",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9770, 77.5531],
    poc: {
      name: "Kiran",
      contact: "9884282809"
    }
  },
  {
    name: "Rudhra Coworks",
    location: "Electronic City",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.8416, 77.6636],
    poc: {
      name: "Mahesh",
      contact: "97037 31311"
    }
  },
  {
    name: "Awfis Residency Square",
    location: "Richmond",
    category: "Sub premium (6k-12k)",
    price: "10500",
    coordinates: [12.9612, 77.6050],
    poc: {
      name: "Jayanth / Krithika / Kshitiz Gupta / Nalini",
      contact: "9964128544 / 80882 10031 / 76250 63367 / 9113008624"
    }
  },
  {
    name: "Awfis Mantri Commerce",
    location: "BTM Layout",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9165, 77.6101],
    poc: {
      name: "Jayanth / Krithika / Kshitiz Gupta / Nalini",
      contact: "9964128544 / 80882 10031 / 76250 63367 / 9113008624"
    }
  },
  {
    name: "Awfis Vista Pixel",
    location: "Jakkuru Layout",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [13.0828, 77.6030],
    poc: {
      name: "Jayanth / Krithika / Kshitiz Gupta / Nalini",
      contact: "9964128544 / 80882 10031 / 76250 63367 / 9113008624"
    }
  },
  {
    name: "Awfis Davanam Plaza",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Jayanth / Krithika / Kshitiz Gupta / Nalini",
      contact: "9964128544 / 80882 10031 / 76250 63367 / 9113008624"
    }
  },
  {
    name: "Awfis Brigade Metropolis",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Jayanth / Krithika / Kshitiz Gupta / Nalini",
      contact: "9964128544 / 80882 10031 / 76250 63367 / 9113008624"
    }
  },
  {
    name: "Hustle Space Cowork",
    location: "Hebbal",
    category: "Budgeted(6k or less)",
    price: "9000",
    coordinates: [13.0358, 77.5970],
    poc: {
      name: "Mohan / Chandan",
      contact: "98459 50789 / 9632577700"
    }
  },
  {
    name: "Awfis GR TechPark Vayu Block 1st Floor",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Jayanth / Krithika / Kshitiz Gupta / Nalini",
      contact: "9964128544 / 80882 10031 / 76250 63367 / 9113008624"
    }
  },
  {
    name: "Incubex (HSR16) Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Incubex (HSR20) Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Incubex (HSR26) Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Classic Converge",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Naunita / Vijay / Ananya",
      contact: "96067 92069 / 8840046370 / 9860323792"
    }
  },
  {
    name: "Classic Converge",
    location: "Koramangala",
    category: "Budgeted(6k or less)",
    price: "4500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Naunita / Vijay / Ananya",
      contact: "96067 92069 / 8840046370 / 9860323792"
    }
  },
  {
    name: "Hoda Workspace Sector - 5",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Mandara",
      contact: "9482105411"
    }
  },
  {
    name: "Bhive Premium Brigade Metropolis Mahadevapura",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "11200",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Bhive coworks Platinum",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "13600",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Honeykomb by Bhive",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Bhive Coworks (Premium)",
    location: "Church Street",
    category: "Sub premium (6k-12k)",
    price: "16700",
    coordinates: [12.9754, 77.6059],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Honeykomb by Bhive",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "11600",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Bhive coworks Platinum",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "13600",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Bhive Workspace Platinum S6",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Honeykomb by Bhive 19th Main",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Sophia",
      contact: "095386 77774"
    }
  },
  {
    name: "Honeykomb by Bhive 27th Main",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Sophia",
      contact: "095386 77775"
    }
  },
  {
    name: "Honeykomb by Bhive Sector 2",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Honeykomb by Bhive Sector 6",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "10000+",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "Regus",
    location: "Electronic City",
    category: "Premium(12K or More)",
    price: "15000",
    coordinates: [12.8416, 77.6636],
    poc: {
      name: "Veenitha / Martin",
      contact: "89432 23999 / 7001578069"
    }
  },
  {
    name: "315 Work Avenue",
    location: "Electronic City",
    category: "Sub premium (6k-12k)",
    price: "11500",
    coordinates: [12.8416, 77.6636],
    poc: {
      name: "Suman",
      contact: "8884465601"
    }
  },
  {
    name: "Ant Spaces",
    location: "Hoodi",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9950, 77.7216],
    poc: {
      name: "Anuj",
      contact: "7799400500"
    }
  },
  {
    name: "Hanto Workspaces - Crescent Centre",
    location: "Ashok Nagar",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Krishna",
      contact: "7330740709"
    }
  },
  {
    name: "Hanto Workspaces - PSN Centre",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Krishna",
      contact: "7330740709"
    }
  },
  {
    name: "Hanto Workspaces - Zenith Centre",
    location: "Indiranagar",
    category: "Premium(12K or More)",
    price: "12000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Krishna",
      contact: "7330740709"
    }
  },
  {
    name: "Attic Spaces Karna",
    location: "Sarjapura",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.8602, 77.7855],
    poc: {
      name: "Chandrashekhar / Sharmishta",
      contact: "9880234567 / 9538805490"
    }
  },
  {
    name: "UrbanVault",
    location: "Hebbal",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [13.0358, 77.5970],
    poc: {
      name: "Bhavana / Hamsa",
      contact: "8904047515 / 8042994299"
    }
  },
  {
    name: "Incubex (HSR4) Hub",
    location: "Koramangala",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Incubex (HSR18) Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "10200",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Incubex (HSR10) Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "9600",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "UrbanVault 88",
    location: "CBD - Residency Road",
    category: "Sub premium (6k-12k)",
    price: "15500",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "UrbanVault 166/A",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "UrbanVault UV 468",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "UrbanVault 196",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "UrbanVault 23",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "UrbanVault UV SJR Primus",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "UrbanVault UV Brigade Summit",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "IndiQube Eco",
    location: "Bellandur",
    category: "Sub premium (6k-12k)",
    price: "14000",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Karthik / Menaka / Ranjith",
      contact: "97414 22704 / 9980006520 / 6364895937"
    }
  },
  {
    name: "UrbanVault 23",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "UrbanVault",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "12000+",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "UrbanVault",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "IndiQube Eco",
    location: "Kadubeesnahalli",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Karthik / Menaka / Ranjith",
      contact: "97414 22704 / 9980006520 / 6364895937"
    }
  },
  {
    name: "Innov8 Mantri Commercio",
    location: "ORR",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9500, 77.7000],
    poc: {
      name: "Shivam",
      contact: "9582678191"
    }
  },
  {
    name: "Nomads Auto Bahn",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Pooja / Satish",
      contact: "8884311166 / 8884311155"
    }
  },
  {
    name: "Nomads Eastern",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Pooja / Satish",
      contact: "8884311166 / 8884311155"
    }
  },
  {
    name: "Nomads Skynet",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "11500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Pooja / Satish",
      contact: "8884311166 / 8884311155"
    }
  },
  {
    name: "Nomads Samhita Plaza",
    location: "Nagavarapalya",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9881, 77.6655],
    poc: {
      name: "Pooja / Satish",
      contact: "8884311166 / 8884311155"
    }
  },
  {
    name: "Nomads Mit",
    location: "Domlur",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9600, 77.6400],
    poc: {
      name: "Pooja / Satish",
      contact: "8884311166 / 8884311155"
    }
  },
  {
    name: "Nomads MN",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Pooja / Satish",
      contact: "8884311166 / 8884311155"
    }
  },
  {
    name: "Sun Square Business Centre",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Website",
      contact: "9902703618"
    }
  },
  {
    name: "Crescent Workspace",
    location: "Banaswadi",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [13.0160, 77.6420],
    poc: {
      name: "Simran",
      contact: "99455 63322"
    }
  },
  {
    name: "Raha Creative CoWorking Hub",
    location: "Kalyan Nagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [13.0282, 77.6426],
    poc: {
      name: "Shahid / Vijay",
      contact: "7829555774 / 8147459371"
    }
  },
  {
    name: "Cubix coworking",
    location: "Kalyan Nagar",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [13.0282, 77.6426],
    poc: {
      name: "Shoaib",
      contact: "96633 41809"
    }
  },
  {
    name: "Symphony Workspace",
    location: "Hennur",
    category: "Sub premium (6k-12k)",
    price: "10500",
    coordinates: [13.0430, 77.6474],
    poc: {
      name: "Contact",
      contact: "96639 33767"
    }
  },
  {
    name: "Collab24 EPIP",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Saurav",
      contact: "9590149742"
    }
  },
  {
    name: "Incubex (HSR5) Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Incubex (HSR11) Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "GoodWorks",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Arun / Krithik",
      contact: "7411575652 / 9035460930"
    }
  },
  {
    name: "GoodWorks",
    location: "Banashankari",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9250, 77.5440],
    poc: {
      name: "Arun / Krithik",
      contact: "7411575652 / 9035460930"
    }
  },
  {
    name: "Anthill IQ Workspace",
    location: "Cunningham Road",
    category: "Premium(12K or More)",
    price: "15000",
    coordinates: [12.9840, 77.5940],
    poc: {
      name: "Faiz Pasha",
      contact: "9886363099"
    }
  },
  {
    name: "WeWork Manyata Redwood",
    location: "Thanisandra",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [13.0647, 77.6227],
    poc: {
      name: "Upasana / Aksha / Laksha",
      contact: "9538808891 / 91677 03391 / 9148427038"
    }
  },
  {
    name: "WeWork Prestige Tech Park",
    location: "Kadubeesnahalli",
    category: "Premium(12K or More)",
    price: "12000+",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Upasana / Aksha / Laksha",
      contact: "9538808891 / 91677 03391 / 9148427038"
    }
  },
  {
    name: "Hustlehub H1701",
    location: "Koramangala",
    category: "Budgeted(6k or less)",
    price: "3500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Reshma / Ligi / Prathibha / Divya",
      contact: "8792515528 / 9663939505 / 91086 24982 / 6960316778"
    }
  },
  {
    name: "Hustlehub Tech Park",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Reshma / Ligi / Prathibha / Divya",
      contact: "8792515528 / 9663939505 / 91086 24982 / 6960316778"
    }
  },
  {
    name: "Hustlehub H203",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Reshma / Ligi / Prathibha / Divya",
      contact: "8792515528 / 9663939505 / 91086 24982 / 6960316778"
    }
  },
  {
    name: "Hustlehub KRM02",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Reshma / Ligi / Prathibha / Divya",
      contact: "8792515528 / 9663939505 / 91086 24982 / 6960316778"
    }
  },
  {
    name: "Hustlehub SB01",
    location: "Silk Board",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9200, 77.6200],
    poc: {
      name: "Reshma / Ligi / Prathibha / Divya",
      contact: "8792515528 / 9663939505 / 91086 24982 / 6960316778"
    }
  },
  {
    name: "Bhive Workspace Premium",
    location: "Indiranagar",
    category: "Premium(12K or More)",
    price: "13600",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Sophia",
      contact: "90197 30436"
    }
  },
  {
    name: "CRE Spacez",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Vijay",
      contact: "9686317660"
    }
  },
  {
    name: "Mindcraft spaces",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Ankur",
      contact: "9845170988"
    }
  },
  {
    name: "Awfis Prestige Technology Park - 2",
    location: "Marathahalli",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9550, 77.7011],
    poc: {
      name: "Jayanth / Krithika / Kshitiz Gupta / Nalini",
      contact: "9964128544 / 80882 10031 / 76250 63367 / 9113008624"
    }
  },
  {
    name: "Awfis Prestige Technology Park - 3",
    location: "Marathahalli",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9550, 77.7011],
    poc: {
      name: "Jayanth / Krithika / Kshitiz Gupta / Nalini",
      contact: "9964128544 / 80882 10031 / 76250 63367 / 9113008624"
    }
  },
  {
    name: "Awfis Prestige Technology Park - 4",
    location: "Marathahalli",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9550, 77.7011],
    poc: {
      name: "Jayanth / Krithika / Kshitiz Gupta / Nalini",
      contact: "9964128544 / 80882 10031 / 76250 63367 / 9113008624"
    }
  },
  {
    name: "Ybhe",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Nagesh",
      contact: "8892676461"
    }
  },
  {
    name: "Excel Coworks",
    location: "Naagarabhaavi",
    category: "Sub premium (6k-12k)",
    price: "5000",
    coordinates: [12.9592, 77.5093],
    poc: {
      name: "Shiva Kumar",
      contact: "9060906352"
    }
  },
  {
    name: "Incubex KRMI Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Incubex INR4 Hub",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "10500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Incubex (HSR26) Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Gopalan coworks",
    location: "Nagavarapalya",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9881, 77.6655],
    poc: {
      name: "Sandip / Sachin / Prabhu",
      contact: "7019798151 / 9611848269 / 9916984795"
    }
  },
  {
    name: "Urban vault HM icon square",
    location: "Ashok Nagar",
    category: "Premium(12K or More)",
    price: "15500",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "Urban vault UV Prestige obelisk",
    location: "Sampangi Rama Nagar",
    category: "Premium(12K or More)",
    price: "12500",
    coordinates: [12.9726, 77.5934],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "Urban vault UV citrine",
    location: "Sanjeevini Nagar",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [13.0500, 77.5600],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "Urban Vault UV 23",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "11000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "Urban Vault UV 115",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "Urban Vault Uv 17 th cross",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "Urban Vault UV 72",
    location: "Marathahalli",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9550, 77.7011],
    poc: {
      name: "Bhavana / Hamsa / Ankit",
      contact: "8904047515 / 8042994299 / 76767 89126"
    }
  },
  {
    name: "Incubex coworks Koramangala 80 Feet Road (Thrive) Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Aspire co-working",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Amrutha",
      contact: "9741006431"
    }
  },
  {
    name: "Gopalan Millennium Tower",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Keerthi Prasad",
      contact: "63643 52184"
    }
  },
  {
    name: "Gopalan Legacy",
    location: "Mysore Road",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9536, 77.5019],
    poc: {
      name: "Keerthi Prasad",
      contact: "63643 52184"
    }
  },
  {
    name: "Cowrks",
    location: "Marathahalli",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9550, 77.7011],
    poc: {
      name: "Megha",
      contact: "7996577599"
    }
  },
  {
    name: "Serene spaces",
    location: "Whitefield",
    category: "",
    price: "",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Meenu",
      contact: "8867738197"
    }
  },
  {
    name: "G K workspace",
    location: "Singasandra",
    category: "Budgeted(6k or less)",
    price: "4500",
    coordinates: [12.8722, 77.6488],
    poc: {
      name: "Nirmal",
      contact: "93538 84349"
    }
  },
  {
    name: "Hubstairs",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Vansh",
      contact: "9611567818"
    }
  },
  {
    name: "Zeevaa Tech Management Services Pvt. Ltd. Work A Holic",
    location: "Vijaynagar",
    category: "Sub premium (6k-12k)",
    price: "5000",
    coordinates: [12.9716, 77.5300],
    poc: {
      name: "Prasanth",
      contact: "70220 50550"
    }
  },
  {
    name: "Prestige Tech Platina",
    location: "Kadubeesnahalli",
    category: "Premium(12K or More)",
    price: "13500",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Shivam Kotha / Taranpal Singh",
      contact: "9582678191 / 8792300847"
    }
  },
  {
    name: "Bloom workspace",
    location: "Yelahanka",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [13.1000, 77.6000],
    poc: {
      name: "Mervyn",
      contact: "9606867166"
    }
  },
  {
    name: "GoSpaze Coworking Centre",
    location: "Kundanahalli",
    category: "Sub premium (6k-12k)",
    price: "6900",
    coordinates: [12.9667, 77.7245],
    poc: {
      name: "Shinoj / Vinodh / Anjali",
      contact: "88804 44111 / 9108262299 / 9606747583"
    }
  },
  {
    name: "GoSpaze Coworking Centre",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Shinoj / Vinodh / Anjali",
      contact: "88804 44111 / 9108262299 / 9606747583"
    }
  },
  {
    name: "Corporat Edge",
    location: "UB City",
    category: "",
    price: "45000",
    coordinates: [12.9719, 77.5964],
    poc: {
      name: "Sakshi / Tushar",
      contact: "9742471622 / 7015231142"
    }
  },
  {
    name: "ISprout Prestige Saleh Ahmed",
    location: "Sampangi Rama Nagar",
    category: "Sub premium (6k-12k)",
    price: "18500",
    coordinates: [12.9726, 77.5934],
    poc: {
      name: "Rahul Shenoy",
      contact: "8712606290"
    }
  },
  {
    name: "ISprout G R Techpark",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Rahul Shenoy",
      contact: "8712606290"
    }
  },
  {
    name: "Red Brick PTP",
    location: "Kadubeesnahalli",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9340, 77.6840],
    poc: {
      name: "Chaitanya",
      contact: "8073244282"
    }
  },
  {
    name: "Red Brick RMZ",
    location: "Bellandur",
    category: "Premium(12K or More)",
    price: "16000",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Chaitanya",
      contact: "8073244282"
    }
  },
  {
    name: "Focus Factory",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Nishanth",
      contact: "9182299625 / 9000987878"
    }
  },
  {
    name: "Hustle Space Cowork",
    location: "Manyata tech park",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [13.0592, 77.6154],
    poc: {
      name: "Chandan",
      contact: "9632577700"
    }
  },
  {
    name: "Surya office space",
    location: "Nallurahalli",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9740, 77.7332],
    poc: {
      name: "Abrar",
      contact: "9820094898"
    }
  },
  {
    name: "Qubex spaces",
    location: "Bellandur",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Keerthan",
      contact: "9916963287"
    }
  },
  {
    name: "Qubex spaces",
    location: "BTM Layout",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [12.9165, 77.6101],
    poc: {
      name: "Keerthan",
      contact: "9916963287"
    }
  },
  {
    name: "Kokarya Business Synergy Centre",
    location: "Uttarahalli",
    category: "Budgeted(6k or less)",
    price: "5500",
    coordinates: [12.9006, 77.5431],
    poc: {
      name: "Sharath (owner)",
      contact: "9886045478 / 9008857907"
    }
  },
  {
    name: "Office Republic",
    location: "Kudlu Gate",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.8890, 77.6392],
    poc: {
      name: "Jagannath",
      contact: "8494935126"
    }
  },
  {
    name: "Obeya North",
    location: "Hebbal",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [13.0358, 77.5970],
    poc: {
      name: "Josy",
      contact: "9742812891"
    }
  },
  {
    name: "Obeya Zen",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Josy",
      contact: "9742812891"
    }
  },
  {
    name: "Obeya Sunshine",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Josy",
      contact: "9742812891"
    }
  },
  {
    name: "Obeya Vibes",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Josy",
      contact: "9742812891"
    }
  },
  {
    name: "Obeya Tulip",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Josy",
      contact: "9742812891"
    }
  },
  {
    name: "Obeya Tranquill",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Josy",
      contact: "9742812891"
    }
  },
  {
    name: "Clayworks Opus",
    location: "Richmond",
    category: "Premium(12K or More)",
    price: "11000",
    coordinates: [12.9612, 77.6050],
    poc: {
      name: "Tushar / Deen Dayal",
      contact: "8400292929 / 9632571010"
    }
  },
  {
    name: "Clayworks Residency",
    location: "Residency Road",
    category: "",
    price: "",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Tushar / Deen Dayal",
      contact: "8400292929 / 9632571010"
    }
  },
  {
    name: "Clayworks 371",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000+",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Tushar / Deen Dayal",
      contact: "8400292929 / 9632571010"
    }
  },
  {
    name: "Clayworks 4B",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Tushar / Deen Dayal",
      contact: "8400292929 / 9632571010"
    }
  },
  {
    name: "Incubex HSR 21 Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "5000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Incubex HSR 24 Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Incubex HSR 25 Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Incubex HSR 27 Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Incubex HSR 28 Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Incubex HSR 29 Hub",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Zeenat Mushtaq / Shragvi / Arjun G R / Aman Kasera",
      contact: "9980862404 / 6366975276 / 9611934103 / 9513374408"
    }
  },
  {
    name: "Hoda Workspace Sector - 2",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "9500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Mandara",
      contact: "9482105411"
    }
  },
  {
    name: "Flex coworks",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "9999",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Namratha",
      contact: "7338260999 / 9611344003"
    }
  },
  {
    name: "Business Hut",
    location: "Residency Road",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Ramanath",
      contact: "9360000439"
    }
  },
  {
    name: "Workie",
    location: "Hebbal",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [13.0358, 77.5970],
    poc: {
      name: "Tulsi",
      contact: "8907741111"
    }
  },
  {
    name: "Workie",
    location: "CBD",
    category: "Premium(12K or More)",
    price: "13000",
    coordinates: [12.9719, 77.5946],
    poc: {
      name: "Tulsi",
      contact: "8907741111"
    }
  },
  {
    name: "Workie",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "7500",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Tulsi",
      contact: "8907741111"
    }
  },
  {
    name: "Comfortwork Tech Private Limited",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "8500",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Mahalakshmi",
      contact: "9620860860"
    }
  },
  {
    name: "Monarch",
    location: "Sampangiram nagar",
    category: "Premium(12K or More)",
    price: "14000",
    coordinates: [12.9726, 77.5934],
    poc: {
      name: "Safia",
      contact: "9844900032"
    }
  },
  {
    name: "The Yard",
    location: "Indiranagar",
    category: "Sub premium (6k-12k)",
    price: "10000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Varnit",
      contact: "9071044440"
    }
  },
  {
    name: "Corporat EDGE",
    location: "UB CITY",
    category: "Premium(12K or More)",
    price: "45000",
    coordinates: [12.9719, 77.5964],
    poc: {
      name: "Sakshi",
      contact: "7015231142"
    }
  },
  {
    name: "Rudhra coworks",
    location: "Electronic city Phase 2",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.8416, 77.6636],
    poc: {
      name: "Vinod",
      contact: "9884521666"
    }
  },
  {
    name: "Tribe coworking",
    location: "Koramangala",
    category: "Sub premium (6k-12k)",
    price: "8000",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Isha",
      contact: "9108988654"
    }
  },
  {
    name: "Ecradle coworking",
    location: "Koramangala",
    category: "",
    price: "",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Tisha",
      contact: "9380082424"
    }
  },
  {
    name: "2gethr Coworking",
    location: "Koramangala",
    category: "",
    price: "",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Anish",
      contact: "9164444024"
    }
  },
  {
    name: "Spacelance virtual office",
    location: "Indiranagar",
    category: "Budgeted(6k or less)",
    price: "25000 for 1 year",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Pratiba",
      contact: "8970881000 / 9400081100"
    }
  },
  {
    name: "Workadda",
    location: "Indiranagar",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Dinesh",
      contact: "9019661554"
    }
  },
  {
    name: "Hanval",
    location: "MG Road",
    category: "Sub premium (6k-12k)",
    price: "9000",
    coordinates: [12.9746, 77.6101],
    poc: {
      name: "Raghavendra",
      contact: "9380274804 / 8296092032"
    }
  },
  {
    name: "Foundry House",
    location: "Banaswadi",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [13.0160, 77.6420],
    poc: {
      name: "Prasanth",
      contact: "8123085658"
    }
  },
  {
    name: "Capsule workspace",
    location: "Ashok Nagar",
    category: "Premium(12K or More)",
    price: "12000",
    coordinates: [12.9719, 77.5996],
    poc: {
      name: "Vishal",
      contact: "8080808420"
    }
  },
  {
    name: "Startup Haven",
    location: "HRBR Layout",
    category: "Budgeted(6k or less)",
    price: "4500",
    coordinates: [13.0196, 77.6425],
    poc: {
      name: "Prasanna",
      contact: "9353668090"
    }
  },
  {
    name: "House of stories",
    location: "Indiranagar",
    category: "Budgeted(6k or less)",
    price: "200 per day",
    coordinates: [12.9716, 77.6413],
    poc: {
      name: "Vrinda",
      contact: "8123085658"
    }
  },
  {
    name: "High Calibre League Coworking",
    location: "Kothanur",
    category: "Sub premium (6k-12k)",
    price: "6000",
    coordinates: [13.0816, 77.6445],
    poc: {
      name: "Lily",
      contact: "7899624805"
    }
  },
  {
    name: "Silicon Opus",
    location: "Jayanagar",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Nandish",
      contact: "9606021759"
    }
  },
  {
    name: "Office Berths co-working space",
    location: "Kankapur road",
    category: "Budgeted(6k or less)",
    price: "5000",
    coordinates: [12.8495, 77.5612],
    poc: {
      name: "Sushma",
      contact: "7619301164"
    }
  },
  {
    name: "Somara coworking",
    location: "J. P. Nagar",
    category: "Sub premium (6k-12k)",
    price: "6500",
    coordinates: [12.9061, 77.5852],
    poc: {
      name: "Somashekar",
      contact: "9880477447"
    }
  },
  {
    name: "Insta Square",
    location: "Jayanagar",
    category: "Budgeted(6k or less)",
    price: "5200",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Thanuja",
      contact: "9901307850 / 9315511265"
    }
  },
  {
    name: "The Capsule",
    location: "Jayanagar",
    category: "Budgeted(6k or less)",
    price: "3500",
    coordinates: [12.9250, 77.5938],
    poc: {
      name: "Prem",
      contact: "9686356555"
    }
  },
  {
    name: "Office Berths co-working space",
    location: "RR Nagar",
    category: "Budgeted(6k or less)",
    price: "3700",
    coordinates: [12.9360, 77.5200],
    poc: {
      name: "Sushma",
      contact: "7619301164"
    }
  },
  {
    name: "2gethr Coworking",
    location: "Bellandur",
    category: "Premium(12K or More)",
    price: "",
    coordinates: [12.9250, 77.6762],
    poc: {
      name: "Anish",
      contact: "9164444024"
    }
  },
  {
    name: "Mayfair",
    location: "Koramangala",
    category: "",
    price: "6500",
    coordinates: [12.9352, 77.6245],
    poc: {
      name: "Swetha",
      contact: "8892146201"
    }
  },
  {
    name: "Unispaces Business Centre",
    location: "Whitefield",
    category: "Sub premium (6k-12k)",
    price: "7000",
    coordinates: [12.9698, 77.7499],
    poc: {
      name: "Prajwal",
      contact: "9100080014"
    }
  },
  
];