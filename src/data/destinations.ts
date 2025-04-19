
export interface Destination {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  busRoutes: BusRoute[];
  mapUrl: string;
}

export interface BusRoute {
  busNumber: string;
  from: string;
  to: string;
  via: string[];
  frequency: string;
  duration: string;
}

export const destinations: Destination[] = [
  {
    id: "rk-beach",
    name: "RK Beach",
    description: "Also known as Ramakrishna Beach, this is one of the most famous beaches in Vizag with stunning coastline views.",
    imageUrl: "/rk-beach.jpg",
    busRoutes: [
      {
        busNumber: "28",
        from: "Railway Station",
        to: "RK Beach",
        via: ["Jagadamba Junction", "RTC Complex", "Beach Road"],
        frequency: "Every 15 minutes",
        duration: "20 mins"
      },
      {
        busNumber: "39",
        from: "Airport",
        to: "RK Beach",
        via: ["NAD Junction", "Gurudwara", "Beach Road"],
        frequency: "Every 25 minutes",
        duration: "40 mins"
      },
      {
        busNumber: "10K",
        from: "Railway Station",
        to: "RK Beach",
        via: ["Dondaparthy", "Asilmetta", "Beach Road"],
        frequency: "Every 20 minutes",
        duration: "25 mins"
      },
      {
        busNumber: "900K",
        from: "Airport",
        to: "RK Beach",
        via: ["Maddilapalem", "Siripuram", "Beach Road"],
        frequency: "Every 30 minutes",
        duration: "45 mins"
      }
    ],
    mapUrl: "https://goo.gl/maps/gqdZnqKpnH8Wzt2r6"
  },
  {
    id: "rushikonda-beach",
    name: "Rushikonda Beach",
    description: "A beautiful golden sandy beach perfect for swimming and water sports, located around 8 km from the city.",
    imageUrl: "/rushikonda-beach.jpg",
    busRoutes: [
      {
        busNumber: "31",
        from: "Railway Station",
        to: "Rushikonda Beach",
        via: ["Jagadamba Junction", "Beach Road", "Sagar Nagar"],
        frequency: "Every 30 minutes",
        duration: "40 mins"
      },
      {
        busNumber: "999",
        from: "Airport",
        to: "Rushikonda Beach",
        via: ["NAD Junction", "Beach Road", "GITAM University"],
        frequency: "Every 45 minutes",
        duration: "60 mins"
      },
      {
        busNumber: "22",
        from: "Railway Station",
        to: "Rushikonda Beach",
        via: ["Jagadamba Junction", "Beach Road", "Yendada"],
        frequency: "Every 35 minutes",
        duration: "50 mins"
      },
      {
        busNumber: "555",
        from: "Airport",
        to: "Rushikonda Beach",
        via: ["Maddilapalem", "MVP Colony", "Sagar Nagar"],
        frequency: "Every 40 minutes",
        duration: "65 mins"
      }
    ],
    mapUrl: "https://goo.gl/maps/rC7h7ZEfzA8rC5at7"
  },
  {
    id: "vuda-park",
    name: "VUDA Park",
    description: "A recreational park with beautiful gardens, musical fountain, and children's play area on the Beach Road.",
    imageUrl: "/vuda-park.jpg",
    busRoutes: [
      {
        busNumber: "28",
        from: "Railway Station",
        to: "VUDA Park",
        via: ["Jagadamba Junction", "RTC Complex"],
        frequency: "Every 15 minutes",
        duration: "25 mins"
      },
      {
        busNumber: "39",
        from: "Airport",
        to: "VUDA Park",
        via: ["NAD Junction", "Gurudwara"],
        frequency: "Every 25 minutes",
        duration: "45 mins"
      },
      {
        busNumber: "300",
        from: "Railway Station",
        to: "VUDA Park",
        via: ["Dwaraka Bus Station", "Diamond Park", "Beach Road"],
        frequency: "Every 20 minutes",
        duration: "30 mins"
      },
      {
        busNumber: "444",
        from: "Airport",
        to: "VUDA Park",
        via: ["Gopalapatnam", "Siripuram", "Beach Road"],
        frequency: "Every 35 minutes",
        duration: "50 mins"
      }
    ],
    mapUrl: "https://goo.gl/maps/conLfotxNrcXV2166"
  },
  {
    id: "devarpalli-waterfalls",
    name: "Devarpalli Waterfalls",
    description: "A scenic waterfall located in the Eastern Ghats, perfect for nature lovers and trekking enthusiasts.",
    imageUrl: "/devarpalli-waterfalls.jpg",
    busRoutes: [
      {
        busNumber: "540",
        from: "Railway Station",
        to: "Devarpalli",
        via: ["Jagadamba Junction", "Pendurthi"],
        frequency: "Every 60 minutes",
        duration: "90 mins"
      },
      {
        busNumber: "400C",
        from: "Airport",
        to: "Devarpalli",
        via: ["NAD Junction", "Pendurthi", "Anandapuram"],
        frequency: "Every 90 minutes",
        duration: "120 mins"
      },
      {
        busNumber: "575",
        from: "Railway Station",
        to: "Devarpalli",
        via: ["Gopalapatnam", "Pendurthi", "Sabbavaram"],
        frequency: "Every 75 minutes",
        duration: "100 mins"
      }
    ],
    mapUrl: "https://goo.gl/maps/pKyW5vHq3b4dmLe99"
  },
  {
    id: "simhachalam",
    name: "Simhachalam Temple",
    description: "Ancient Hindu temple dedicated to Lord Narasimha, located on a hill with beautiful architecture.",
    imageUrl: "/simhachalam.jpg",
    busRoutes: [
      {
        busNumber: "55K",
        from: "Railway Station",
        to: "Simhachalam",
        via: ["Old Post Office", "Dwarakanagar"],
        frequency: "Every 20 minutes",
        duration: "35 mins"
      },
      {
        busNumber: "444",
        from: "Airport",
        to: "Simhachalam",
        via: ["NAD Junction", "Gopalapatnam"],
        frequency: "Every 40 minutes",
        duration: "55 mins"
      },
      {
        busNumber: "65F",
        from: "Railway Station",
        to: "Simhachalam",
        via: ["Jagadamba", "Hanumanthawaka"],
        frequency: "Every 25 minutes",
        duration: "40 mins"
      },
      {
        busNumber: "99T",
        from: "Airport",
        to: "Simhachalam",
        via: ["NAD Junction", "Kancharapalem", "Gopalapatnam"],
        frequency: "Every 30 minutes",
        duration: "50 mins"
      }
    ],
    mapUrl: "https://goo.gl/maps/fEiNZD9qomV75rSs6"
  },
  {
    id: "zoo-park",
    name: "Indira Gandhi Zoological Park",
    description: "One of the largest zoos in India with a wide variety of animals, birds, and reptiles in natural settings.",
    imageUrl: "/zoo-park.jpg",
    busRoutes: [
      {
        busNumber: "31",
        from: "Railway Station",
        to: "Zoo Park",
        via: ["Jagadamba Junction", "Beach Road"],
        frequency: "Every 30 minutes",
        duration: "35 mins"
      },
      {
        busNumber: "999",
        from: "Airport",
        to: "Zoo Park",
        via: ["NAD Junction", "Seethammadhara"],
        frequency: "Every 45 minutes",
        duration: "50 mins"
      },
      {
        busNumber: "333",
        from: "Railway Station",
        to: "Zoo Park",
        via: ["Jagadamba Junction", "Beach Road", "Sagar Nagar"],
        frequency: "Every 25 minutes",
        duration: "40 mins"
      },
      {
        busNumber: "800K",
        from: "Airport",
        to: "Zoo Park",
        via: ["Gopalapatnam", "Hanumanthawaka", "Seethammadhara"],
        frequency: "Every 35 minutes",
        duration: "55 mins"
      }
    ],
    mapUrl: "https://goo.gl/maps/QmBSy5HAhJfPHVbL8"
  },
  {
    id: "ross-hill-church",
    name: "Ross Hill Church",
    description: "A historic church located on one of the three hills of Visakhapatnam, offering panoramic city views.",
    imageUrl: "/ross-hill-church.jpg",
    busRoutes: [
      {
        busNumber: "19",
        from: "Railway Station",
        to: "Ross Hill",
        via: ["Jagadamba Junction", "Old Town"],
        frequency: "Every 25 minutes",
        duration: "30 mins"
      },
      {
        busNumber: "40",
        from: "Airport",
        to: "Ross Hill",
        via: ["NAD Junction", "Convent Junction"],
        frequency: "Every 40 minutes",
        duration: "55 mins"
      },
      {
        busNumber: "29",
        from: "Railway Station",
        to: "Ross Hill",
        via: ["Gnanapuram", "Old Town"],
        frequency: "Every 20 minutes",
        duration: "25 mins"
      },
      {
        busNumber: "50",
        from: "Airport",
        to: "Ross Hill",
        via: ["Gopalapatnam", "Kancharapalem", "Convent Junction"],
        frequency: "Every 35 minutes",
        duration: "50 mins"
      }
    ],
    mapUrl: "https://goo.gl/maps/uWLXtUxDsF5AQGfk8"
  },
  {
    id: "kailasagiri",
    name: "Kailasagiri",
    description: "A hilltop park with panoramic views of the city and Bay of Bengal, featuring Lord Shiva and Parvati statues.",
    imageUrl: "/kailasagiri.jpg",
    busRoutes: [
      {
        busNumber: "31",
        from: "Railway Station",
        to: "Kailasagiri",
        via: ["Jagadamba Junction", "Beach Road", "Rushikonda"],
        frequency: "Every 30 minutes",
        duration: "45 mins"
      },
      {
        busNumber: "999",
        from: "Airport",
        to: "Kailasagiri",
        via: ["NAD Junction", "Seethammadhara", "MVP Colony"],
        frequency: "Every 45 minutes",
        duration: "60 mins"
      },
      {
        busNumber: "22",
        from: "Railway Station",
        to: "Kailasagiri",
        via: ["Siripuram", "MVP Colony", "Yendada"],
        frequency: "Every 40 minutes",
        duration: "50 mins"
      },
      {
        busNumber: "777",
        from: "Airport",
        to: "Kailasagiri",
        via: ["Gopalapatnam", "Hanumanthawaka", "MVP Colony"],
        frequency: "Every 50 minutes",
        duration: "65 mins"
      }
    ],
    mapUrl: "https://goo.gl/maps/QJ7hXBZ2gujk5Wye9"
  }
];

export const startingPoints = [
  { id: "railway-station", name: "Railway Station" },
  { id: "airport", name: "Airport" },
  { id: "rk-beach", name: "RK Beach" },
  { id: "rushikonda-beach", name: "Rushikonda Beach" },
  { id: "vuda-park", name: "VUDA Park" },
  { id: "devarpalli-waterfalls", name: "Devarpalli Waterfalls" },
  { id: "simhachalam", name: "Simhachalam Temple" },
  { id: "zoo-park", name: "Zoo Park" },
  { id: "ross-hill-church", name: "Ross Hill Church" },
  { id: "kailasagiri", name: "Kailasagiri" },
];

export const getDestination = (id: string): Destination | undefined => {
  return destinations.find(destination => destination.id === id);
};

export const getStartingPoint = (id: string): { id: string; name: string } | undefined => {
  return startingPoints.find(point => point.id === id);
};
