const e  = (name) => `/assets/images/category/eateries/${name}`
const av = (n)    => `/assets/images/avatar/${n}.jpg`

export const eateries = [
  {
    id: 1,
    name: 'Buka Express Lagos',
    location: 'Victoria Island, Lagos',
    cuisine: 'Nigerian',
    rating: 4.7,
    reviewCount: 132,
    avgPrice: 8000,
    tags: ['Dine-in', 'Takeaway', 'Outdoor'],
    hours: 'Open 8am – 10pm',
    openingHours: 'Monday – Sunday: 8:00 am – 10:00 pm',
    phone: '+234 (0) 801 234 5678',
    image: e('buka.webp'),
    gallery: [e('buka.webp'), e('mamacass.jpeg'), e('the_place.jpg'), e('yellowchilli.jpg'), e('nkoyo.jpg')],
    description: 'Buka Express Lagos is a beloved Nigerian canteen-style restaurant sitting at the heart of Victoria Island. Known for its robust, home-cooked Nigerian dishes served in generous portions, it draws in both office workers and visitors craving authentic local flavours in a comfortable, relaxed setting.',
    descriptionExtra: 'From pots of fresh egusi soup to pepper soup, jollof rice, and fried plantain, every dish at Buka Express is prepared daily using locally sourced ingredients. The open-air outdoor section makes it the perfect spot for an evening meal with friends or a casual lunch meeting.',
    highlights: ['utensils', 'fire', 'leaf', 'clock'],
    about: { seatingCapacity: 120, established: 2014, specialty: 'Traditional Nigerian canteen-style cuisine' },
    menu: [
      {
        category: 'Soups & Swallow',
        items: [
          { name: 'Egusi Soup + Eba',         price: 4500, hasProtein: true },
          { name: 'Banga Soup + Starch',       price: 5000, hasProtein: true },
          { name: 'Ofe Onugbu + Fufu',         price: 4800, hasProtein: true },
          { name: 'Ogbono Soup + Pounded Yam', price: 5200, hasProtein: true },
        ],
      },
      {
        category: 'Rice & Grills',
        items: [
          { name: 'Jollof Rice',               price: 3000, hasProtein: true },
          { name: 'Fried Rice',                price: 3200, hasProtein: true },
          { name: 'White Rice + Ofada Stew',   price: 3500, hasProtein: true },
        ],
      },
      {
        category: 'Small Chops & Sides',
        items: [
          { name: 'Puff Puff (12 pcs)',        price: 1500, hasProtein: false },
          { name: 'Fried Plantain (Dodo)',     price: 1200, hasProtein: false },
          { name: 'Moi Moi (2 pcs)',           price: 1800, hasProtein: false },
        ],
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Zobo (chilled)',            price: 500,  hasProtein: false },
          { name: 'Kunu Aya',                  price: 500,  hasProtein: false },
          { name: 'Soft Drink',               price: 400,  hasProtein: false },
        ],
      },
    ],
    proteins: [
      { name: 'Chicken',     price: 600 },
      { name: 'Beef',        price: 500 },
      { name: 'Goat Meat',   price: 700 },
      { name: 'Catfish',     price: 800 },
      { name: 'Turkey',      price: 900 },
      { name: 'Ponmo',       price: 300 },
      { name: 'Snail',       price: 1200 },
    ],
    extras: [
      { name: 'Extra Stew / Sauce',  price: 200 },
      { name: 'Extra Swallow (Eba)', price: 300 },
      { name: 'Fried Plantain side', price: 600 },
      { name: 'Extra Pepper',        price: 100 },
    ],
    policies: {
      reservation: 'Walk-ins welcome; orders can be placed online for dine-in, takeaway, or delivery.',
      cancellation: 'Orders can be cancelled within 5 minutes of placement at no charge.',
      dress: 'Smart casual. No singlets or slippers in the dining hall.',
    },
    reviews: [
      {
        name: 'Chukwuemeka Okafor', date: 'Visited 12 Mar 2026', reviewsWritten: 7, rating: 5.0,
        comment: 'The best buka in Victoria Island, hands down. The egusi soup was incredibly rich and the eba was freshly made. Feels exactly like eating mama\'s cooking.',
        avatar: av('01'), images: [],
        managerReply: 'Thank you, Chukwuemeka! Authentic home cooking is our greatest pride. We look forward to welcoming you back soon!',
      },
      {
        name: 'Sade Adeyemi', date: 'Visited 5 Feb 2026', reviewsWritten: 3, rating: 4.5,
        comment: 'Lovely spot for a quick and satisfying Nigerian meal. The outdoor seating is breezy and pleasant. Portions are very generous for the price.',
        avatar: av('02'), images: [], managerReply: null,
      },
    ],
  },

  {
    id: 2,
    name: 'Mama Cass Restaurant',
    location: 'GRA Phase 2, Port Harcourt',
    cuisine: 'Nigerian',
    rating: 4.8,
    reviewCount: 201,
    avgPrice: 12000,
    tags: ['Dine-in', 'Delivery', 'Private Dining'],
    hours: 'Open 9am – 11pm',
    openingHours: 'Monday – Sunday: 9:00 am – 11:00 pm',
    phone: '+234 (0) 803 456 7890',
    image: e('mamacass.jpeg'),
    gallery: [e('mamacass.jpeg'), e('nkoyo.jpg'), e('the_place.jpg'), e('buka.webp'), e('yellowchilli.jpg')],
    description: 'Mama Cass Restaurant is an iconic Port Harcourt dining institution, celebrated for more than two decades of outstanding Nigerian cuisine. Set in the prestigious GRA Phase 2 district, the restaurant offers a refined yet comfortable environment where families and executives gather for memorable meals.',
    descriptionExtra: 'The restaurant prides itself on a rich menu that traverses the breadth of Nigeria\'s culinary heritage — from Rivers State delicacies like banga soup and fisherman soup to popular national favourites. Private dining rooms are available for corporate events and family celebrations.',
    highlights: ['utensils', 'award', 'users', 'truck'],
    about: { seatingCapacity: 200, established: 1999, specialty: 'Pan-Nigerian cuisine with Rivers State specialties' },
    menu: [
      {
        category: 'Rivers State Specialties',
        items: [
          { name: 'Banga Soup + Starch',      price: 6500, hasProtein: true },
          { name: 'Fisherman Soup',            price: 7000, hasProtein: true },
          { name: 'Ofe Akwu (Palm Nut Soup)', price: 6000, hasProtein: true },
          { name: 'Native Soup + Fufu',        price: 6200, hasProtein: true },
        ],
      },
      {
        category: 'Grills & Proteins',
        items: [
          { name: 'Peppered Catfish (whole)', price: 8500, hasProtein: false },
          { name: 'Suya Platter (mixed)',     price: 7500, hasProtein: false },
          { name: 'Grilled Chicken + Chips',  price: 6800, hasProtein: false },
        ],
      },
      {
        category: 'Drinks & Desserts',
        items: [
          { name: 'Chapman (large)',              price: 2000, hasProtein: false },
          { name: 'Zobo & Ginger (chilled)',      price: 1500, hasProtein: false },
          { name: 'Puff Puff & Custard Platter',  price: 3500, hasProtein: false },
        ],
      },
    ],
    proteins: [
      { name: 'Catfish',       price: 1000 },
      { name: 'Goat Meat',     price: 800  },
      { name: 'Chicken',       price: 700  },
      { name: 'Assorted Meat', price: 1200 },
      { name: 'Snail',         price: 1500 },
      { name: 'Prawn',         price: 1800 },
    ],
    extras: [
      { name: 'Extra Starch',        price: 400 },
      { name: 'Extra Fufu',          price: 400 },
      { name: 'Side Salad',          price: 800 },
      { name: 'Extra Pepper Sauce',  price: 300 },
    ],
    policies: {
      reservation: 'Reservations recommended, especially on weekends. Order online for dine-in, takeaway, or delivery.',
      cancellation: 'Orders can be cancelled within 10 minutes of placement. Late cancellations may attract a 20% charge.',
      dress: 'Smart casual. Traditional attire warmly welcomed.',
    },
    reviews: [
      {
        name: 'Ibrahim Danjuma', date: 'Visited 20 Apr 2026', reviewsWritten: 11, rating: 5.0,
        comment: 'Mama Cass never disappoints. The banga soup is world-class and the private dining room is perfect for business lunches. Highly recommended.',
        avatar: av('03'), images: [],
        managerReply: 'Thank you so much, Ibrahim! Our private dining rooms are designed for exactly those special occasions. We look forward to hosting you again.',
      },
      {
        name: 'Ngozi Ikechukwu', date: 'Visited 8 Mar 2026', reviewsWritten: 5, rating: 4.5,
        comment: 'Superb food and excellent service. The fisherman soup was fresh and aromatic. The ambience is warm and inviting. Great for family dinners.',
        avatar: av('04'), images: [], managerReply: null,
      },
    ],
  },

  {
    id: 3,
    name: 'Yellow Chilli Abuja',
    location: 'Wuse II, Abuja',
    cuisine: 'Fine Dining',
    rating: 4.6,
    reviewCount: 178,
    avgPrice: 25000,
    tags: ['Dine-in', 'Bar', 'Outdoor'],
    hours: 'Open 12pm – 11pm',
    openingHours: 'Tuesday – Sunday: 12:00 pm – 11:00 pm. Closed Mondays.',
    phone: '+234 (0) 805 678 9012',
    image: e('yellowchilli.jpg'),
    gallery: [e('yellowchilli.jpg'), e('nkoyo.jpg'), e('mamacass.jpeg'), e('the_place.jpg'), e('buka.webp')],
    description: 'Yellow Chilli Abuja is one of the capital\'s most celebrated fine-dining restaurants, renowned for its bold reinterpretation of Nigerian and West African cuisine. With a sophisticated atmosphere and an award-winning culinary team, it remains the top choice for Abuja\'s discerning diners and visiting dignitaries.',
    descriptionExtra: 'The restaurant\'s signature dishes marry traditional Nigerian ingredients with contemporary fine-dining techniques, creating a unique gastronomic journey. The curated wine list features selections from South Africa, France, and California, perfectly complementing the rich flavours of the menu.',
    highlights: ['wine-glass-alt', 'award', 'utensils', 'star'],
    about: { seatingCapacity: 90, established: 2008, specialty: 'Modern Nigerian fine dining and West African gastronomy' },
    menu: [
      {
        category: 'Signature Mains',
        items: [
          { name: 'Jollof Rice & Lobster Thermidor',   price: 18000, hasProtein: false },
          { name: 'Pan-Seared Tilapia, Egusi Veloute', price: 16500, hasProtein: false },
          { name: 'Beef Suya Tenderloin',              price: 22000, hasProtein: false },
          { name: 'Goat Pepper Soup Consomme',         price: 14000, hasProtein: false },
        ],
      },
      {
        category: 'Starters & Salads',
        items: [
          { name: 'Fried Calamari & Suya Aioli', price: 6000, hasProtein: false },
          { name: 'Peppersoup Bruschetta',        price: 5500, hasProtein: false },
          { name: 'Tropical Prawn Cocktail',      price: 7000, hasProtein: false },
        ],
      },
      {
        category: 'Desserts & Drinks',
        items: [
          { name: 'Chin Chin Panna Cotta',          price: 5000, hasProtein: false },
          { name: 'Spiced Puff Puff with Ice Cream', price: 4500, hasProtein: false },
          { name: 'House Wine (glass)',              price: 8000, hasProtein: false },
          { name: 'Cocktail of the Day',             price: 7000, hasProtein: false },
        ],
      },
    ],
    proteins: [],
    extras: [
      { name: 'Bread Basket',        price: 2500 },
      { name: 'Side Salad',          price: 3000 },
      { name: 'Sauce Accompaniment', price: 1500 },
    ],
    policies: {
      reservation: 'Reservations required. Order online to confirm your selection in advance.',
      cancellation: 'Cancellations must be made at least 24 hours in advance to avoid a 50% fee.',
      dress: 'Smart casual to formal. Flip-flops and sleeveless shirts are not permitted.',
    },
    reviews: [
      {
        name: 'Abubakar Aliyu', date: 'Visited 15 May 2026', reviewsWritten: 9, rating: 5.0,
        comment: 'An absolute gem in Abuja. The jollof rice and lobster is a revelation — I never knew Nigerian cuisine could be elevated to this level. The wine pairing suggestions were excellent.',
        avatar: av('12'), images: [],
        managerReply: 'Thank you, Abubakar! Pushing the boundaries of Nigerian cuisine is what we live for. We hope to see you at our next chef\'s tasting menu evening.',
      },
      {
        name: 'Chidera Okonkwo', date: 'Visited 3 Apr 2026', reviewsWritten: 6, rating: 4.5,
        comment: 'Stunning presentation and bold flavours. The atmosphere is elegant without being stuffy. Perfect for a special anniversary dinner.',
        avatar: av('01'), images: [], managerReply: null,
      },
    ],
  },

  {
    id: 4,
    name: 'The Place Restaurant',
    location: 'Lekki Phase 1, Lagos',
    cuisine: 'Nigerian',
    rating: 4.5,
    reviewCount: 344,
    avgPrice: 10000,
    tags: ['Dine-in', 'Takeaway', 'Delivery'],
    hours: 'Open 7am – 10pm',
    openingHours: 'Monday – Sunday: 7:00 am – 10:00 pm',
    phone: '+234 (0) 807 890 1234',
    image: e('the_place.jpg'),
    gallery: [e('the_place.jpg'), e('buka.webp'), e('yellowchilli.jpg'), e('mamacass.jpeg'), e('sweet_sensation.png')],
    description: 'The Place Restaurant is one of Lagos\' most popular dining chains, beloved by Lagosians for its consistent quality, generous portions, and affordable prices. With multiple branches across the city, The Place has become a household name synonymous with great Nigerian food and fast, friendly service.',
    descriptionExtra: 'Whether you are stopping in for a quick breakfast before work, a hearty lunch, or a family dinner, The Place delivers every time. Their legendary smoky jollof rice, crispy fried chicken, and fresh pepper soup have kept customers coming back for over a decade.',
    highlights: ['utensils', 'clock', 'thumbs-up', 'motorcycle'],
    about: { seatingCapacity: 250, established: 2004, specialty: 'Everyday Nigerian comfort food and fast casual dining' },
    menu: [
      {
        category: 'Breakfast',
        items: [
          { name: 'Akara + Pap (Ogi)',             price: 2500, hasProtein: false },
          { name: 'Yam + Egg Sauce',               price: 3000, hasProtein: false },
          { name: 'Moi Moi + Ogi Breakfast Set',   price: 2800, hasProtein: false },
        ],
      },
      {
        category: 'Rice Dishes',
        items: [
          { name: 'Smoky Jollof Rice',             price: 3500, hasProtein: true  },
          { name: 'Fried Rice',                    price: 3500, hasProtein: true  },
          { name: 'Native Rice + Buka Stew',       price: 3800, hasProtein: true  },
        ],
      },
      {
        category: 'Soups & Swallows',
        items: [
          { name: 'Pepper Soup',                   price: 4800, hasProtein: true  },
          { name: 'Egusi Soup + Pounded Yam',      price: 4500, hasProtein: true  },
          { name: 'Efo Riro + Eba',                price: 4200, hasProtein: true  },
        ],
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Soft Drink (large)',            price: 500,  hasProtein: false },
          { name: 'Fresh Juice',                   price: 800,  hasProtein: false },
          { name: 'Water',                         price: 200,  hasProtein: false },
        ],
      },
    ],
    proteins: [
      { name: 'Fried Chicken', price: 800  },
      { name: 'Beef',          price: 600  },
      { name: 'Turkey',        price: 900  },
      { name: 'Catfish',       price: 900  },
      { name: 'Ponmo',         price: 350  },
      { name: 'Gizzard',       price: 500  },
    ],
    extras: [
      { name: 'Fried Plantain (Dodo)', price: 700 },
      { name: 'Coleslaw',             price: 500 },
      { name: 'Extra Sauce',          price: 200 },
      { name: 'Moi Moi',             price: 600 },
    ],
    policies: {
      reservation: 'Walk-ins always welcome. Order online for dine-in, takeaway, or delivery.',
      cancellation: 'No cancellation fee within 5 minutes of order placement. After that, orders are final.',
      dress: 'Casual. Come as you are.',
    },
    reviews: [
      {
        name: 'Tunde Bamgbose', date: 'Visited 28 May 2026', reviewsWritten: 14, rating: 4.5,
        comment: 'The Place never fails me. That smoky jollof rice is unrivalled in Lagos. Staff are always cheerful and the food comes out fast. My family\'s favourite weekend spot.',
        avatar: av('02'), images: [],
        managerReply: 'We love hearing that, Tunde! Our smoky jollof is a labour of love. See you and the family again soon!',
      },
      {
        name: 'Amaka Eze', date: 'Visited 14 Apr 2026', reviewsWritten: 4, rating: 4.0,
        comment: 'Consistent quality and very reasonable prices. The yam and egg sauce at breakfast is underrated — absolutely delicious. Long queues on weekends though.',
        avatar: av('03'), images: [], managerReply: null,
      },
    ],
  },

  {
    id: 5,
    name: 'Nkoyo Fine Dining',
    location: 'Garki, Abuja',
    cuisine: 'Fine Dining',
    rating: 4.9,
    reviewCount: 98,
    avgPrice: 35000,
    tags: ['Dine-in', 'Private Events', 'Bar'],
    hours: 'Open 12pm – 12am',
    openingHours: 'Tue – Sat: 12:00 pm – 12:00 midnight. Sunday: 1:00 pm – 10:00 pm. Closed Mondays.',
    phone: '+234 (0) 809 012 3456',
    image: e('nkoyo.jpg'),
    gallery: [e('nkoyo.jpg'), e('yellowchilli.jpg'), e('mamacass.jpeg'), e('the_place.jpg'), e('buka.webp')],
    description: 'Nkoyo Fine Dining is Abuja\'s most exclusive restaurant, nestled in the serene Garki district. Named after the Efik word for "beauty", Nkoyo delivers an exceptional culinary experience that fuses Nigerian tradition with international fine-dining elegance, set within a breathtaking contemporary interior.',
    descriptionExtra: 'Every dish at Nkoyo is a work of art — crafted by a team of internationally trained chefs who source premium local ingredients from Nigerian farmers and fishermen. The restaurant also houses a private members lounge, an events suite for up to 50 guests, and one of Abuja\'s finest cocktail bars.',
    highlights: ['star', 'crown', 'wine-glass-alt', 'gem'],
    about: { seatingCapacity: 80, established: 2017, specialty: 'Premium Nigerian fine dining with international techniques' },
    menu: [
      {
        category: 'Premium Mains',
        items: [
          { name: 'Dry-Aged Wagyu Beef & Egusi Jus',      price: 45000, hasProtein: false },
          { name: 'Whole Grilled Sea Bass & Banga Broth', price: 38000, hasProtein: false },
          { name: 'Lamb Shank Pepper Soup Braise',        price: 35000, hasProtein: false },
          { name: 'Vegetarian Oha Risotto',               price: 28000, hasProtein: false },
        ],
      },
      {
        category: 'Small Plates',
        items: [
          { name: 'Smoked Catfish Blinis',        price: 9000,  hasProtein: false },
          { name: 'Akara Bites with Caviar Cream', price: 12000, hasProtein: false },
          { name: 'Suya Cured Duck Breast',        price: 11000, hasProtein: false },
        ],
      },
      {
        category: 'Bar & Cocktails',
        items: [
          { name: 'Zobo Negroni',       price: 8000, hasProtein: false },
          { name: 'Palm Wine Spritz',   price: 7500, hasProtein: false },
          { name: 'Hibiscus Margarita', price: 8500, hasProtein: false },
        ],
      },
    ],
    proteins: [],
    extras: [
      { name: 'Artisan Bread Basket', price: 4500 },
      { name: 'Wine Pairing (glass)', price: 8000 },
      { name: 'Amuse-Bouche',         price: 5000 },
    ],
    policies: {
      reservation: 'Reservations are mandatory. Select your dishes in advance when ordering.',
      cancellation: 'Cancellations must be made at least 48 hours in advance for a full refund.',
      dress: 'Formal or smart formal attire required. Jeans, trainers, and casual wear are not permitted.',
    },
    reviews: [
      {
        name: 'Hajiya Khadijat Musa', date: 'Visited 10 May 2026', reviewsWritten: 18, rating: 5.0,
        comment: 'The finest dining experience in Nigeria, full stop. The Wagyu beef with egusi jus was a masterpiece. The staff are attentive without being intrusive. A true world-class restaurant.',
        avatar: av('04'), images: [],
        managerReply: 'Thank you, Hajiya! Comments like yours remind us why we do this. We hope to welcome you to our next Tasting Menu evening.',
      },
      {
        name: 'Emeka Osuji', date: 'Visited 22 Mar 2026', reviewsWritten: 8, rating: 5.0,
        comment: 'Took my wife here for our anniversary and it was perfect. The cocktail bar is exceptional — the palm wine spritz is creative and delicious. Nkoyo is the crown jewel of Abuja dining.',
        avatar: av('12'), images: [], managerReply: null,
      },
    ],
  },

  {
    id: 6,
    name: 'Sweet Sensation',
    location: 'Ikeja, Lagos',
    cuisine: 'Fast Food',
    rating: 4.3,
    reviewCount: 512,
    avgPrice: 4000,
    tags: ['Dine-in', 'Takeaway', 'Delivery'],
    hours: 'Open 7am – 9pm',
    openingHours: 'Monday – Sunday: 7:00 am – 9:00 pm',
    phone: '+234 (0) 804 567 8901',
    image: e('sweet_sensation.png'),
    gallery: [e('sweet_sensation.png'), e('the_place.jpg'), e('buka.webp'), e('mamacass.jpeg'), e('nkoyo.jpg')],
    description: 'Sweet Sensation is Nigeria\'s iconic fast food chain that has delighted Lagosians for decades. With its flagship Ikeja outlet and branches across Lagos State, Sweet Sensation is the go-to destination for quick, tasty meals that blend Nigerian comfort food with Western fast-food convenience.',
    descriptionExtra: 'Famous for its signature chicken and chips, meat pies, doughnuts, and freshly baked pastries, Sweet Sensation offers great value for money. The bright, clean dining spaces are popular with students, families, and office workers alike looking for a reliable, affordable meal any time of day.',
    highlights: ['bolt', 'hamburger', 'cookie', 'smile'],
    about: { seatingCapacity: 180, established: 1994, specialty: 'Nigerian fast food, pastries, and snacks' },
    menu: [
      {
        category: 'Mains & Combos',
        items: [
          { name: 'Chicken & Chips Combo',        price: 3500, hasProtein: false },
          { name: 'Spicy Beef Burger & Fries',    price: 3200, hasProtein: false },
          { name: 'Jollof Rice & Chicken',        price: 3000, hasProtein: false },
        ],
      },
      {
        category: 'Pastries & Snacks',
        items: [
          { name: 'Meat Pie (2 pcs)',             price: 1200, hasProtein: false },
          { name: 'Sausage Roll (2 pcs)',          price: 1000, hasProtein: false },
          { name: 'Doughnut (glazed, 2 pcs)',      price: 800,  hasProtein: false },
          { name: 'Scotch Egg',                   price: 900,  hasProtein: false },
        ],
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Fresh Juice',        price: 1000, hasProtein: false },
          { name: 'Soft Drink (large)', price: 600,  hasProtein: false },
          { name: 'Ice Cream Cup',      price: 1200, hasProtein: false },
        ],
      },
    ],
    proteins: [
      { name: 'Extra Chicken piece', price: 900 },
      { name: 'Extra Beef Patty',    price: 700 },
    ],
    extras: [
      { name: 'Extra Fries',  price: 600 },
      { name: 'Coleslaw',     price: 400 },
      { name: 'Ketchup cup',  price: 100 },
      { name: 'Extra Sauce',  price: 150 },
    ],
    policies: {
      reservation: 'No reservations required. Order online for instant dine-in, takeaway, or delivery.',
      cancellation: 'All food orders are final once preparation begins. Contact us within 2 minutes to cancel.',
      dress: 'Casual. All are welcome.',
    },
    reviews: [
      {
        name: 'Funmi Adewale', date: 'Visited 1 Jun 2026', reviewsWritten: 3, rating: 4.5,
        comment: 'Sweet Sensation meat pie is Nigeria\'s best — I will die on this hill! Flaky pastry, well-seasoned filling, and always fresh. The chicken and chips are solid too.',
        avatar: av('01'), images: [],
        managerReply: 'Ha! We love your passion, Funmi! Our bakers have been perfecting that meat pie recipe for 30 years. Thank you for the love!',
      },
      {
        name: 'Biodun Okubanjo', date: 'Visited 12 May 2026', reviewsWritten: 2, rating: 4.0,
        comment: 'Quick, affordable, and tasty. For the price point it\'s hard to beat. The doughnuts are addictive. Perfect stop before or after shopping in Ikeja.',
        avatar: av('02'), images: [], managerReply: null,
      },
    ],
  },
]
