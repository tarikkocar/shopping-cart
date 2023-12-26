const plants = [
  {
    title: "Money Tree",
    img_1: "/assets/money_tree_1.jpg",
    img_2: "/assets/money_tree_2.jpg",
    petSafe: true,
    easyCare: true,
    succulent: false,
    palm: false,
    price: 24.99,
    height: "80-90 cm",
    description:
      "Invite prosperity with the Money Tree (Pachira aquatica), a symbol of good fortune and financial success, featuring distinctive braided trunks and lush, vibrant foliage.",
    id: 0,
  },
  {
    title: "Peace Lily",
    img_1: "/assets/peace_lily_1.jpg",
    img_2: "/assets/peace_lily_2.jpg",
    petSafe: false,
    easyCare: true,
    succulent: false,
    palm: false,
    price: 14.99,
    height: "40-50 cm",
    description:
      "Embrace serenity with the elegant Peace Lily (Spathiphyllum), known for its graceful white blooms and air-purifying qualities, creating a tranquil indoor oasis.",
    id: 1,
  },
  {
    title: "String of Hearts",
    img_1: "/assets/string_of_hearts_1.jpg",
    img_2: "/assets/string_of_hearts_2.jpg",
    petSafe: true,
    easyCare: false,
    succulent: true,
    palm: false,
    price: 16.99,
    height: "30-40 cm",
    description:
      "Elevate your space with the trailing beauty of String of Hearts (Ceropegia woodii), its heart-shaped leaves cascading gracefully, making it a charming and low-maintenance choice.",
    id: 2,
  },
  {
    title: "Snake Plant",
    img_1: "/assets/snake_plant_1.jpg",
    img_2: "/assets/snake_plant_2.jpg",
    petSafe: true,
    easyCare: true,
    succulent: true,
    palm: false,
    price: 14.99,
    height: "30-40 cm",
    description:
      "Sansevieria trifasciata, or Snake Plant, combines sleek design with air-purifying prowess, thriving in low-light conditions for an effortlessly chic addition to your indoor jungle.",
    id: 3,
  },
  {
    title: "Philodendron",
    img_1: "/assets/philodendron_1.jpg",
    img_2: "/assets/philodendron_2.jpg",
    petSafe: false,
    easyCare: true,
    succulent: false,
    palm: false,
    price: 15.99,
    height: "20-30 cm",
    description:
      "Embrace the timeless allure of Philodendron, a versatile and heart-leafed beauty that effortlessly enhances any space, perfect for both beginners and plant enthusiasts alike.",
    id: 4,
  },
  {
    title: "Spider Plant",
    img_1: "/assets/spider_plant_1.jpg",
    img_2: "/assets/spider_plant_2.jpg",
    petSafe: true,
    easyCare: true,
    succulent: false,
    palm: false,
    price: 19.99,
    height: "30-40 cm",
    description:
      "Chlorophytum comosum, or Spider Plant, adds a touch of whimsy with arching foliage and spiderettes, purifying the air while thriving in various light conditions.",
    id: 5,
  },
  {
    title: "Chinese Evergreen",
    img_1: "/assets/chinese_evergreen_1.jpg",
    img_2: "/assets/chinese_evergreen_2.jpg",
    petSafe: false,
    easyCare: true,
    succulent: false,
    palm: false,
    price: 27.99,
    height: "20-30 cm",
    description:
      "Aglaonema, the Chinese Evergreen, graces your space with lush, variegated leaves, combining beauty with resilience, making it an ideal choice for any indoor environment.",
    id: 6,
  },
  {
    title: "Satin Pothos",
    img_1: "/assets/satin_pothos_1.jpg",
    img_2: "/assets/satin_pothos_2.jpg",
    petSafe: false,
    easyCare: true,
    succulent: false,
    palm: false,
    price: 19.99,
    height: "20-30 cm",
    description:
      "Scindapsus pictus, or Satin Pothos, enchants with its satin-like leaves, thriving in low light and adding a touch of sophistication to your botanical collection.",
    id: 7,
  },
  {
    title: "Inch Plant",
    img_1: "/assets/inch_plant_1.jpg",
    img_2: "/assets/inch_plant_2.jpg",
    petSafe: false,
    easyCare: true,
    succulent: false,
    palm: false,
    price: 14.99,
    height: "20-30 cm",
    description:
      "Tradescantia zebrina, or Inch Plant, delights with trailing vines adorned with vibrant stripes, adding a playful touch to your indoor garden.",
    id: 8,
  },
  {
    title: "String of Pearls",
    img_1: "/assets/string_of_pearls_1.jpg",
    img_2: "/assets/string_of_pearls_2.jpg",
    petSafe: false,
    easyCare: true,
    succulent: true,
    palm: false,
    price: 14.99,
    height: "30-40 cm",
    description:
      "Senecio rowleyanus, the String of Pearls, captivates with its unique bead-like foliage, creating an elegant cascade that's sure to draw admiration.",
    id: 9,
  },
  {
    title: "Boston Fern",
    img_1: "/assets/boston_fern_1.jpg",
    img_2: "/assets/boston_fern_2.jpg",
    petSafe: true,
    easyCare: true,
    succulent: false,
    palm: false,
    price: 16.99,
    height: "30-40 cm",
    description:
      "Nephrolepis exaltata, the Boston Fern, brings lush, feathery fronds into your home, imparting a touch of woodland charm while improving air quality.",
    id: 10,
  },
  {
    title: "Weeping Fig",
    img_1: "/assets/weeping_fig_1.jpg",
    img_2: "/assets/weeping_fig_2.jpg",
    petSafe: false,
    easyCare: false,
    succulent: false,
    palm: false,
    price: 22.99,
    height: "60-70 cm",
    description:
      "Ficus benjamina, the Weeping Fig, graces your space with graceful, arching branches and glossy leaves, making it an elegant addition to your indoor garden.",
    id: 11,
  },
  {
    title: "Jade Plant",
    img_1: "/assets/jade_plant_1.jpg",
    img_2: "/assets/jade_plant_2.jpg",
    petSafe: false,
    easyCare: false,
    succulent: true,
    palm: false,
    price: 13.99,
    height: "20-30 cm",
    description:
      "Crassula ovata, or Jade Plant, symbolizes prosperity and resilience with its fleshy, jade-green leaves, making it a timeless and meaningful choice.",
    id: 12,
  },
  {
    title: "ZZ Plant",
    img_1: "/assets/zz_plant_1.jpg",
    img_2: "/assets/zz_plant_2.jpg",
    petSafe: false,
    easyCare: true,
    succulent: true,
    palm: false,
    price: 20.99,
    height: "30-40 cm",
    description:
      "Zamioculcas zamiifolia, or ZZ Plant, boasts glossy, dark-green foliage and thrives in low-light conditions, adding modern sophistication to your indoor oasis.",
    id: 13,
  },
  {
    title: "Aloe Vera",
    img_1: "/assets/aloe_vera_1.jpg",
    img_2: "/assets/aloe_vera_2.jpg",
    petSafe: false,
    easyCare: true,
    succulent: true,
    palm: false,
    price: 12.99,
    height: "30-40 cm",
    description:
      "Aloe Vera combines beauty with practicality, soothing both your space and skin with its succulent leaves.",
    id: 14,
  },
  {
    title: "Echeveria",
    img_1: "/assets/echeveria_1.jpg",
    img_2: "/assets/echeveria_2.jpg",
    petSafe: true,
    easyCare: true,
    succulent: true,
    palm: false,
    price: 18.99,
    height: "10-20 cm",
    description:
      " Echeveria, a charming rosette succulent, adds a touch of desert elegance to your collection, thriving in well-draining soil and bright sunlight.",
    id: 15,
  },
  {
    title: "Haworthia",
    img_1: "/assets/haworthia_1.jpg",
    img_2: "/assets/haworthia_2.jpg",
    petSafe: true,
    easyCare: true,
    succulent: true,
    palm: false,
    price: 14.99,
    height: "10-20 cm",
    description:
      "Haworthia, a delightful succulent with striking rosettes, brings a touch of architectural beauty to your space, perfect for windowsills and tabletops.",
    id: 16,
  },
  {
    title: "Yucca",
    img_1: "/assets/yucca_1.jpg",
    img_2: "/assets/yucca_2.jpg",
    petSafe: false,
    easyCare: true,
    succulent: false,
    palm: true,
    price: 17.99,
    height: "40-50 cm",
    description:
      "Yucca, with its bold, sword-like leaves, brings a touch of the desert landscape indoors, thriving in bright light and well-draining soil.",
    id: 17,
  },
  {
    title: "Peperomia",
    img_1: "/assets/peperomia_1.jpg",
    img_2: "/assets/peperomia_2.jpg",
    petSafe: true,
    easyCare: true,
    succulent: false,
    palm: false,
    price: 14.99,
    height: "20-30 cm",
    description:
      "Peperomia, with its diverse leaf shapes and textures, offers a playful and easy-to-care-for addition to your indoor garden, perfect for compact spaces.",
    id: 18,
  },
  {
    title: "Bamboo Palm",
    img_1: "/assets/bamboo_palm_1.jpg",
    img_2: "/assets/bamboo_palm_2.jpg",
    petSafe: true,
    easyCare: false,
    succulent: false,
    palm: true,
    price: 29.99,
    height: "100-120 cm",
    description:
      "Chamaedorea seifrizii, or Bamboo Palm, brings tropical vibes with its graceful fronds, enhancing your space while purifying the air.",
    id: 19,
  },
  {
    title: "Areca Palm",
    img_1: "/assets/areca_palm_1.jpg",
    img_2: "/assets/areca_palm_2.jpg",
    petSafe: true,
    easyCare: false,
    succulent: false,
    palm: true,
    price: 32.99,
    height: "100-120 cm",
    description:
      "Dypsis lutescens, the Areca Palm, exudes tropical elegance with its feathery fronds, making it an ideal choice for adding a touch of paradise to your indoor haven.",
    id: 20,
  },
  {
    title: "Parlor Palm",
    img_1: "/assets/parlor_palm_1.jpg",
    img_2: "/assets/parlor_palm_2.jpg",
    petSafe: true,
    easyCare: true,
    succulent: false,
    palm: true,
    price: 21.99,
    height: "100-120 cm",
    description:
      "Chamaedorea elegans, the Parlor Palm, offers classic beauty with its arching fronds, thriving in low light and creating a timeless indoor retreat.",
    id: 21,
  },
];

export default plants;
