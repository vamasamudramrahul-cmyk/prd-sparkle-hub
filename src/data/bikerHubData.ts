export interface PlaceData {
  name: string;
}

export interface DistrictData {
  name: string;
  places: PlaceData[];
}

export interface StateData {
  name: string;
  shortCode: string;
  districts: DistrictData[];
}

export const statesData: StateData[] = [
  {
    name: "Andhra Pradesh",
    shortCode: "AP",
    districts: [
      {
        name: "Kurnool",
        places: [
          { name: "Gandikota" },
          { name: "Belum Caves" },
          { name: "Yaganti Temple" },
          { name: "Oravakallu Rock Garden" },
          { name: "Srisailam" },
          { name: "Mahanandi" },
        ],
      },
      {
        name: "Anantapur",
        places: [
          { name: "Lepakshi" },
          { name: "Penukonda Fort" },
          { name: "Thimmamma Marrimanu" },
          { name: "Gooty Fort" },
        ],
      },
      {
        name: "Kadapa",
        places: [
          { name: "Gandikota Canyon" },
          { name: "Pushpagiri Temple" },
          { name: "Sidhout Fort" },
          { name: "Devuni Kadapa" },
        ],
      },
      {
        name: "Chittoor",
        places: [
          { name: "Horsley Hills" },
          { name: "Kailasakona Waterfalls" },
          { name: "Talakona Waterfalls" },
          { name: "Nagari Hills" },
          { name: "Kanipakam" },
        ],
      },
      {
        name: "Visakhapatnam",
        places: [
          { name: "Araku Valley" },
          { name: "Lambasingi" },
          { name: "Borra Caves" },
          { name: "Rishikonda Beach" },
          { name: "Yarada Beach" },
        ],
      },
      {
        name: "East Godavari",
        places: [
          { name: "Papikondalu" },
          { name: "Coringa Wildlife Sanctuary" },
          { name: "Draksharamam" },
          { name: "Annavaram" },
        ],
      },
      {
        name: "Nellore",
        places: [
          { name: "Pulicat Lake" },
          { name: "Mypadu Beach" },
          { name: "Penchalakona" },
          { name: "Udayagiri Fort" },
        ],
      },
      {
        name: "Prakasam",
        places: [
          { name: "Ongole" },
          { name: "Kothapatnam Beach" },
          { name: "Cumbum Lake" },
        ],
      },
      {
        name: "Guntur",
        places: [
          { name: "Amaravathi" },
          { name: "Kondaveedu Fort" },
          { name: "Undavalli Caves" },
          { name: "Mangalagiri" },
        ],
      },
      {
        name: "Krishna",
        places: [
          { name: "Machilipatnam Beach" },
          { name: "Manginapudi Beach" },
          { name: "Hamsaladeevi" },
          { name: "Kanaka Durga Temple" },
        ],
      },
      {
        name: "West Godavari",
        places: [
          { name: "Kolleru Lake" },
          { name: "Eluru" },
          { name: "Dwaraka Tirumala" },
        ],
      },
      {
        name: "Srikakulam",
        places: [
          { name: "Arasavilli Sun Temple" },
          { name: "Srikurmam" },
          { name: "Baruva Beach" },
        ],
      },
      {
        name: "Vizianagaram",
        places: [
          { name: "Vizianagaram Fort" },
          { name: "Ramateertham" },
          { name: "Bobbili Fort" },
        ],
      },
    ],
  },
  {
    name: "Telangana",
    shortCode: "TG",
    districts: [
      {
        name: "Hyderabad",
        places: [
          { name: "Charminar" },
          { name: "Golconda Fort" },
          { name: "Hussain Sagar" },
          { name: "Ramoji Film City" },
        ],
      },
      {
        name: "Rangareddy",
        places: [
          { name: "Ananthagiri Hills" },
          { name: "Shamirpet Lake" },
          { name: "Chilkur Balaji Temple" },
          { name: "Kotipalli Reservoir" },
        ],
      },
      {
        name: "Medchal-Malkajgiri",
        places: [
          { name: "Keesara Temple" },
          { name: "Medchal" },
        ],
      },
      {
        name: "Sangareddy",
        places: [
          { name: "Pocharam Dam" },
          { name: "Sangareddy Fort" },
          { name: "Ameenpur Lake" },
        ],
      },
      {
        name: "Warangal",
        places: [
          { name: "Warangal Fort" },
          { name: "Thousand Pillar Temple" },
          { name: "Ramappa Temple" },
          { name: "Laknavaram Lake" },
          { name: "Pakhal Lake" },
        ],
      },
      {
        name: "Karimnagar",
        places: [
          { name: "Elgandal Fort" },
          { name: "Lower Manair Dam" },
          { name: "Kothakonda" },
        ],
      },
      {
        name: "Nizamabad",
        places: [
          { name: "Nizamabad Fort" },
          { name: "Alisagar" },
          { name: "Pocharam Wildlife Sanctuary" },
        ],
      },
      {
        name: "Adilabad",
        places: [
          { name: "Kuntala Waterfalls" },
          { name: "Kawal Wildlife Sanctuary" },
          { name: "Shivaram Wildlife Sanctuary" },
          { name: "Pochera Waterfalls" },
        ],
      },
      {
        name: "Mahabubnagar",
        places: [
          { name: "Pillalamarri" },
          { name: "Jurala Dam" },
          { name: "Somasila Dam" },
        ],
      },
      {
        name: "Nalgonda",
        places: [
          { name: "Nagarjuna Sagar Dam" },
          { name: "Ethipothala Waterfalls" },
          { name: "Devarakonda Fort" },
        ],
      },
      {
        name: "Khammam",
        places: [
          { name: "Khammam Fort" },
          { name: "Kinnerasani Dam" },
          { name: "Parnasala" },
        ],
      },
      {
        name: "Bhadradri Kothagudem",
        places: [
          { name: "Bhadrachalam Temple" },
          { name: "Parnasala" },
          { name: "Kinnerasani Wildlife Sanctuary" },
        ],
      },
    ],
  },
];

export const clubs = [
  {
    id: 1,
    name: "Vizag Riders Club",
    location: "Visakhapatnam, AP",
    description: "Weekend group rides along the coast and Eastern Ghats.",
    contact: "https://instagram.com/bikergram_andrapradesh",
  },
  {
    id: 2,
    name: "Hyderabad Moto Brotherhood",
    location: "Hyderabad, TG",
    description: "Long-distance touring and adventure riding community.",
    contact: "https://instagram.com/bikergram_andrapradesh",
  },
  {
    id: 3,
    name: "Tirupati Throttle Squad",
    location: "Tirupati, AP",
    description: "Temple runs, hill rides, and weekend breakfast meetups.",
    contact: "https://instagram.com/bikergram_andrapradesh",
  },
  {
    id: 4,
    name: "Guntur Gear Heads",
    location: "Guntur, AP",
    description: "Passionate riders exploring the heartland of Andhra Pradesh.",
    contact: "https://instagram.com/bikergram_andrapradesh",
  },
];
