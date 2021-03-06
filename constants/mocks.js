const categories = [
  {
    id: "plants",
    goto: "Journal",
    name: "Journal",
    tags: ["products", "shop"],
    count: 147,
    image: require("../assets/icons/journal.png"),
  },
  {
    id: "seeds",
    goto: "Explore",
    name: "Appointment",
    tags: ["products", "shop"],
    count: 16,
    image: require("../assets/icons/appointment.png"),
  },
  {
    id: "flowers",
    goto: "Waterlevel",
    name: "Water Intake",
    tags: ["products", "inspirations"],
    count: 68,
    image: require("../assets/icons/drop.png"),
  },
  {
    id: "sprayers",
    goto: "Camera",
    name: "Cataract Test",
    tags: ["products", "inspirations"],
    count: 17,
    image: require("../assets/icons/cataract.png"),
  },
  {
    id: "pots",
    goto: "Dietplan",
    name: "Diet",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/diet.png"),
  },
  {
    id: "fertilizers",
    goto: "Chat",
    name: "Chat",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/chat.png"),
  },
];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
    ],
  },
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png"),
];

const profile = {
  username: "Test",
  location: "Europe",
  email: "test@gmail.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false,
};

const hospital = [
  {
    id: 1,
    name: "HealthAlliance Hospital",
    image: require("../assets/images/hospital.jpg"),
    thumbnail: require("../assets/icons/hospital.png"),
    address: "60 Hospital Road, Cambridge",
  },
  {
    id: 2,
    name: "HealthAlliance Hospital",
    image: require("../assets/images/hospital.jpg"),
    thumbnail: require("../assets/icons/hospital.png"),
    address: "60 Hospital Road, Cambridge",
  },
  {
    id: 3,
    name: "HealthAlliance Hospital",
    image: require("../assets/images/hospital.jpg"),
    thumbnail: require("../assets/icons/hospital.png"),
    address: "60 Hospital Road, Cambridge",
  },
  {
    id: 4,
    name: "HealthAlliance Hospital",
    image: require("../assets/images/hospital.jpg"),
    thumbnail: require("../assets/icons/hospital.png"),
    address: "60 Hospital Road, Cambridge",
  },
  {
    id: 5,
    name: "HealthAlliance Hospital",
    image: require("../assets/images/hospital.jpg"),
    thumbnail: require("../assets/icons/hospital.png"),
    address: "60 Hospital Road, Cambridge",
  },
  {
    id: 6,
    name: "HealthAlliance Hospital",
    image: require("../assets/images/hospital.jpg"),
    thumbnail: require("../assets/icons/hospital.png"),
    address: "60 Hospital Road, Cambridge",
  },
  {
    id: 7,
    name: "HealthAlliance Hospital",
    image: require("../assets/images/hospital.jpg"),
    thumbnail: require("../assets/icons/hospital.png"),
    address: "60 Hospital Road, Cambridge",
  },
];
const days = [
  require("../assets/icons/icons8-sunday-64.png"),
  require("../assets/icons/icons8-monday-64.png"),
  require("../assets/icons/icons8-tuesday-64.png"),
  require("../assets/icons/icons8-wednesday-64.png"),
  require("../assets/icons/icons8-thursday-64.png"),
  require("../assets/icons/icons8-friday-64.png"),
  require("../assets/icons/icons8-saturday-64.png"),
];

const glassImage = require("../assets/images/water-glass.png");
const cataractLogo = require("../assets/images/cataract-logo.png");

const recordData=[
  {"address": "RK Nagar VV Vihar", "date": "2020_11_27", "price": 500, "service": "regular checkup", "time": "05:25", "withId": "docId1", "withName": "Dr. Arun"},
  {"address": "RK Nagar VV Vihar", "date": "2020_11_27", "price": 500, "service": "regular checkup", "time": "05:25", "withId": "docId1", "withName": "Dr. Arun"},
  {"address": "RK Nagar VV Vihar", "date": "2020_11_27", "price": 500, "service": "regular checkup", "time": "05:25", "withId": "docId1", "withName": "Dr. Arun"},
  {"address": "RK Nagar VV Vihar", "date": "2020_11_27", "price": 500, "service": "regular checkup", "time": "05:25", "withId": "docId1", "withName": "Dr. Arun"},
  {"address": "RK Nagar VV Vihar", "date": "2020_11_27", "price": 500, "service": "regular checkup", "time": "05:25", "withId": "docId1", "withName": "Dr. Arun"},
]

export {
  categories,
  explore,
  products,
  profile,
  hospital,
  glassImage,
  days,
  cataractLogo,
  recordData
};

