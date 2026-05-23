export interface Destination {
  id: string;
  title: string;
  region: string;
  shortDescription: string;
  description: string;
  bestTime: string;
  howToReach: string;
  image: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: "hunza-valley",
    title: "Hunza Valley",
    region: "Gilgit-Baltistan",
    shortDescription: "A paradise nestled in the Karakoram mountains.",
    description:
      "Hunza Valley is one of Pakistan's most breathtaking destinations. Surrounded by towering peaks including Rakaposhi and Ultar Sar, it offers crystal-clear rivers, ancient forts, and warm hospitality. Famous for apricot orchards that paint the landscape pink every spring.",
    bestTime: "April to October",
    howToReach:
      "By road via Karakoram Highway from Islamabad (~16 hours) or fly to Gilgit then drive (~2 hours).",
    image: "https://images.unsplash.com/photo-1514558427911-8e293bebf18c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVuemF8ZW58MHx8MHx8fDA%3D",
    highlights: ["Baltit Fort", "Attabad Lake", "Eagle's Nest", "Rakaposhi Base Camp"],
  },
  {
    id: "lahore",
    title: "Lahore",
    region: "Punjab",
    shortDescription: "Pakistan's cultural capital with Mughal architecture and street food.",
    description:
      "Lahore is Pakistan's cultural capital, home to some of the world's finest Mughal architecture. The Badshahi Mosque and Lahore Fort are UNESCO World Heritage Sites. The city is equally famous for its legendary food scene.",
    bestTime: "October to March",
    howToReach: "Allama Iqbal International Airport has direct flights worldwide.",
    image: "https://images.unsplash.com/photo-1603491656337-3b491147917c?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Badshahi Mosque", "Lahore Fort", "Food Street", "Wagah Border"],
  },
  {
    id: "skardu",
    title: "Skardu",
    region: "Gilgit-Baltistan",
    shortDescription: "Gateway to K2 and the world's highest peaks.",
    description:
      "Skardu is the adventure capital of Pakistan, base for K2 expeditions. The town sits at 2,438m in a broad valley carved by the Indus River, surrounded by dramatic desert landscapes and towering peaks.",
    bestTime: "May to September",
    howToReach: "Daily flights from Islamabad (1 hour) or road via KKH (~20 hours).",
    image: "https://images.unsplash.com/photo-1602147557719-1d65f9e58a24?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Shangrila Resort", "Deosai National Park", "Shigar Fort", "K2 Base Camp Trek"],
  },
  {
    id: "swat-valley",
    title: "Swat Valley",
    region: "Khyber Pakhtunkhwa",
    shortDescription: "The Switzerland of Pakistan with lush green alpine scenery.",
    description:
      "Known as the Switzerland of the East, Swat Valley is a lush green paradise with emerald rivers, pine forests, and snow-capped peaks. Once an ancient Buddhist kingdom, the valley still has ancient stupas and rock carvings.",
    bestTime: "April to October",
    howToReach: "4-5 hours by road from Peshawar or Islamabad.",
    image: "https://picsum.photos/seed/swat/1200/800",
    highlights: ["Malam Jabba Ski Resort", "Mahodand Lake", "Mingora Bazaar", "Kalam Valley"],
  },
  {
    id: "karachi",
    title: "Karachi",
    region: "Sindh",
    shortDescription: "Pakistan's largest city on the Arabian Sea coast.",
    description:
      "Karachi is Pakistan's largest city and financial heartbeat. Sitting on the Arabian Sea, it is a city of contrasts from historic beaches to bustling bazaars, and its food scene is legendary.",
    bestTime: "November to February",
    howToReach: "Jinnah International Airport is Pakistan's busiest with global connections.",
    image: "https://plus.unsplash.com/premium_photo-1697729902269-70f031f22531?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Clifton Beach", "Quaid's Mausoleum", "Mohatta Palace", "Burns Road Food Street"],
  },
  {
    id: "fairy-meadows",
    title: "Fairy Meadows",
    region: "Gilgit-Baltistan",
    shortDescription: "A magical alpine meadow at the base of Nanga Parbat.",
    description:
      "Fairy Meadows is a stunning alpine meadow at 3,300m with one of the world's most spectacular views of Nanga Parbat (8,126m). The lush green meadow contrasts dramatically with the icy giant looming above.",
    bestTime: "May to September",
    howToReach: "Drive to Raikot Bridge (~8 hrs from Islamabad), jeep track (~1 hr), then 3 hr hike.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    highlights: ["Nanga Parbat Views", "Base Camp Trek", "Star Gazing", "Pine Forests"],
  },
  {
    id: "islamabad",
    title: "Islamabad",
    region: "Islamabad Capital Territory",
    shortDescription: "Pakistan's modern capital framed by the Margalla Hills.",
    description:
      "Islamabad is a planned city known for its clean streets, diplomatic enclaves, and the striking Faisal Mosque. The nearby Margalla Hills offer short hikes and panoramic views over the city.",
    bestTime: "October to March",
    howToReach: "Islamabad International Airport connects to major domestic and international hubs.",
    image: "https://picsum.photos/seed/islamabad/1200/800",
    highlights: ["Faisal Mosque", "Margalla Hills", "Daman-e-Koh", "Pakistan Monument"],
  },
  {
    id: "murree",
    title: "Murree",
    region: "Punjab",
    shortDescription: "A popular hill station with pine forests and cool weather.",
    description:
      "Murree is a short drive from Islamabad and a favorite getaway for families and honeymooners. The Mall Road, chair lifts, and surrounding trails make it an accessible mountain retreat.",
    bestTime: "December to February (snow) and May to September",
    howToReach: "Road journey from Islamabad (~1.5-2 hours).",
    image: "https://images.unsplash.com/photo-1655961856277-63e4725d24e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Mall Road", "Patriata (New Murree)", "Pindi Point", "Kashmir Point"],
  },
  {
    id: "multan",
    title: "Multan",
    region: "Punjab",
    shortDescription: "The City of Saints with rich Sufi heritage and bazaars.",
    description:
      "Multan is famed for its centuries-old shrines, traditional crafts, and vibrant bazaars. It's also an agricultural and cultural hub known for mangoes and pottery.",
    bestTime: "October to March",
    howToReach: "Multan International Airport and rail connections to major cities.",
    image: "https://images.unsplash.com/photo-1610015586724-661cbafc561f?q=80&w=1207&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Shrines of Sufi Saints", "Hussain Agahi Bazaar", "Multan Fort", "Crafts & Pottery"],
  },
  {
    id: "peshawar",
    title: "Peshawar",
    region: "Khyber Pakhtunkhwa",
    shortDescription: "An ancient frontier city with rich history and markets.",
    description:
      "Peshawar sits near the Khyber Pass and has been a crossroads of cultures for millennia. The Qissa Khwani Bazaar and historic Bala Hisar Fort tell stories of its storied past.",
    bestTime: "October to March",
    howToReach: "Peshawar International Airport and road links from Islamabad and Lahore.",
    image: "https://images.unsplash.com/photo-1690015695305-a5e0218125a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Qissa Khwani Bazaar", "Bala Hisar Fort", "Peshawar Museum", "Khyber Pass excursions"],
  },
  {
    id: "naran-kaghan",
    title: "Naran & Kaghan",
    region: "Khyber Pakhtunkhwa",
    shortDescription: "Alpine lakes, meadows, and scenic mountain passes.",
    description:
      "The Naran-Kaghan valley is famous for its turquoise lakes (including Lake Saif-ul-Maluk), lush meadows, and dramatic passes like Babusar Top — ideal for road trips and camping.",
    bestTime: "June to September",
    howToReach: "Drive from Mansehra along the Karakoram Highway and Naran Road.",
    image: "https://images.unsplash.com/photo-1605447610363-4f4f04760114?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Saif-ul-Maluk", "Babusar Top", "Lush Valleys", "Camping & Fishing"],
  },
  {
    id: "gwadar",
    title: "Gwadar",
    region: "Balochistan",
    shortDescription: "Coastal port city with dramatic sea cliffs and beaches.",
    description:
      "Gwadar's coastline on the Arabian Sea features striking blue waters and emerging seaside development. It's a gateway for exploring Balochistan's rugged coastal landscape.",
    bestTime: "October to March",
    howToReach: "Gwadar Airport has limited flights; road access from major cities.",
    image: "https://plus.unsplash.com/premium_photo-1699537319760-ec9e218f584d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Gwadar Port View", "Kund Malir Beach (nearby)", "Sea Cliffs", "Fishing Villages"],
  },
  {
    id: "chitral",
    title: "Chitral",
    region: "Khyber Pakhtunkhwa",
    shortDescription: "Home to the Kalash Valleys and towering Hindu Kush ranges.",
    description:
      "Chitral offers high-mountain scenery, unique Kalash culture in its valleys, and access to remote trekking routes in the Hindu Kush.",
    bestTime: "June to September",
    howToReach: "Flights to Chitral (seasonal) or long road journeys through mountain passes.",
    image: "https://images.unsplash.com/photo-1584562995253-9de7c2a45982?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Kalash Valleys", "Chitral Fort", "Hindu Kush Treks", "Local Festivals"],
  },
];

export function getDestinationById(id: string): Destination | undefined {
  return destinations.find((destination) => destination.id === id);
}
