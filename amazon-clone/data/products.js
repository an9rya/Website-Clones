export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}

export const products = [{
  id: "1",
  image: "images/products/moon-lamp.jpg",
  name: "CPLA Moon Lamp 2023 Upgrade with Timing 3D Moon Night Light 16 Colors Wooden Stand",
  rating: {
    stars: 4.5,
    count: 1139
  },
  priceCents: 2799
},
{
  id: "2",
  image: "images/products/phone-case-stitch.jpg",
  name: "Cute Phone Case for Samsung Galaxy S23 FE 6.4INCH with Strawberry Flower Pattern for Women Girls Teen Soft Silicone TPU Clear Shockproof Protective Cover Compatible for Samsung Galaxy S23 FE",
  rating: {
    stars: 4,
    count: 730
  },
  priceCents: 1099
},
{
  id: "3",
  image: "images/products/heated-blanket.jpg",
  name: "Heated Blanket-Electric Blanket,50 x60 Soft Heated Throw Blanket with 5 Heating Levels & 3 Hours auto-Off,Over-Heat Protection Fast-Heating,Machine Washable",
  rating: {
    stars: 4,
    count: 3996
  },
  priceCents: 1599
},
{
  id: "4",
  image: "images/products/duck-light.jpg",
  name: "Amaredom DoDo Duck Night Light, Cute Duck Lamp, Silicone Dimmable Nursery Nightlight, Rechargeable LED Bedside Lamp with 20 Minutes Timer",
  rating: {
    stars: 5,
    count: 234
  },
  priceCents: 2299
},
{
  id: "5",
  image: "images/products/green-octopus.jpg",
  name: "TeeTurtle | The Original Reversible Octopus Plushie | Patented Design | Sensory Fidget Toy for Stress Relief",
  rating: {
    stars: 5,
    count: 92881
  },
  priceCents: 1153
},
{
  id: "6",
  image: "images/products/socks.jpg",
  name: "Glamorstar 5 Pairs Low Cut Socks Ankle Sock for Women",
  rating: {
    stars: 4,
    count: 24
  },
  priceCents: 1899
},
{
  id: "7",
  image: "images/products/molten-volleyball.jpg",
  name: "Molten Official NORCECA Volleyball",
  rating: {
    stars: 4.5,
    count: 1417
  },
  priceCents: 11500
},
{
  id: "8",
  image: "images/products/green-frog-hoodie.jpg",
  name: "AoMoon Womens Cute Sweatshirts Long Sleeve Hoodie Skateboarding Frog Printed Fleece Hooded Pullover Top",
  rating: {
    stars: 4,
    count: 124
  },
  priceCents: 3489
},
{
  id: "9",
  image: "images/products/sloth-mug.jpg",
  name: "Cute Sloth Gifts Nope Not Today Funny Coffee Mug Have A Nice Day Ceramic Tea Cup 11oz, Kawaii Birthday Present for Men Women Wife Husband Daughter Friends Coworker",
  rating: {
    stars: 4.5,
    count: 487
  },
  priceCents: 2199
},
{
  id: "10",
  image: "images/products/led-lights.jpg",
  name: "FULEN LED String Lights Bedroom Decorations, Fairy Lights Teen Girls for Aesthetic Room Decor, 66ft 200LED Twinkle Lights USB Powered, Holidays Indoor Decor,Warm White",
  rating: {
    stars: 4,
    count: 3303
  },
  priceCents: 1599
},
{
  id: "11",
  image: "images/products/notebooks.jpg",
  name: "ZICOTO Aesthetic Spiral Notebook Set of 3 For Women - Cute College Ruled Journal and Notebook With Large Pockets And Lined Pages - Perfect to Stay Organized and Boost Productivity at Work or School",
  rating: {
    stars: 5,
    count: 416
  },
  priceCents: 2499
},
{
  id: "12",
  image: "images/products/cactus-humidifier.jpg",
  name: "Yingjee Mini Humidifiers For Bedroom With Night Light, Portable Plant Ultrasonic Humidifier, Small Cactus Cool Mist Humidificateur For Nursery,Baby, Yoga, Homedics Desk Travel Humidifier(Green)",
  rating: {
    stars: 3.5,
    count: 1179
  },
  priceCents: 2199
},
{
  id: "38",
  image: "images/products/ghost-chain.jpg",
  name: "Cute Ghost Pendant Necklaces Set - Ideal for Women, Men, Girls, Boys and as Best Friend Charm Necklace - BFF Friendship Couple Jewelry for Halloween Costume",
  rating: {
    stars: 4,
    count: 52
  },
  priceCents: 2499
},
{
  id: "13",
  image: "images/products/sneakers.jpg",
  name: "JABASIC Women Platform Sneakers Stylish Low-Top Lace-Up Walking Shoes",
  rating: {
    stars: 4.5,
    count: 7
  },
  priceCents: 4299
},
{
  id: "14",
  image: "images/products/plant-pot.jpg",
  name: "Youfui Cute Succulent Planter Animal Shaped Flower Pot Decor for Home Office Desk (Dog)",
  rating: {
    stars: 4.5,
    count: 510
  },
  priceCents: 1699
},
{
  id: "15",
  image: "images/products/matching-rings.jpg",
  name: "Pair of Celestial Sun and Moon Ring Set, Friendship Promise Matching Rings, Anniversary Birthday Gifts for Women",
  rating: {
    stars: 3.5,
    count: 5
  },
  priceCents: 999
},
{
  id: "16",
  image: "images/products/desk-pad.jpg",
  name: "BelugaDesign Sakura Cat Desk Pad | NS Switch Keyboard Laptop Gaming Mat Large Mat Mousepad | Pastel Pink Kawaii Cute Anime Desk Blotter Protector with Gel Wrist Support",
  rating: {
    stars: 4.5,
    count: 117
  },
  priceCents: 5649
},
{
  id: "17",
  image: "images/products/toast-desk-lamp.jpg",
  name: "Toast Night Light Bread Toast Lamp Cute Dorm Room Decor Night light with Timer,Cute Bread led Portable and Rechargeable Bedroom Bedside Sleep Lamp, Desk Lamp for Kids Nursery Bedside Night Lamp ,Holiday Gifts",
  rating: {
    stars: 5,
    count: 48
  },
  priceCents: 2190
},
{
  id: "18",
  image: "images/products/cow-slippers.jpg",
  name: "Gaolinci Cartoon Cow Cotton Slippers, Winter Indoor Outdoor Slippers for Women",
  rating: {
    stars: 4.5,
    count: 3589
  },
  priceCents: 2185
},
{
  id: "19",
  image: "images/products/shiba-bread-plushie.jpg",
  name: "oAutoSjy Shiba Inu Stuffed Animal Cute Bread Dog Hugging Plush Pillow Plush Toy Gift for Girls Boys Cartoon Bread Dog Plush Stuffed Animal Toy for Kids Adults Plushie Cushion for Home Decor Brown 50CM",
  rating: {
    stars: 3.5,
    count: 2
  },
  priceCents: 5863
},
{
  id: "20",
  image: "images/products/beats-headphones.jpg",
  name: "Active Noise Cancelling Headphones Wireless Over Ear Bluetooth Headphones with Microphone Rose Gold INFURTURE,Deep Bass, Memory Foam Ear Cups, Quick Charge 40H Playtime, for TV, Travel, Home Office",
  rating: {
    stars: 4,
    count: 14272
  },
  priceCents: 6099
},
{
  id: "21",
  image: "images/products/silver-bracelet.jpg",
  name: "JeryWe 925 Sterling Silver Chain Hand Bracelet for Womens Stars Chain Bracelets Layered Adjustable Bracelet Charm Beaded Bracelet Friendship Link Bracelet Anniversary Birthday Gift",
  rating: {
    stars: 4,
    count: 65
  },
  priceCents: 820
},
{
  id: "22",
  image: "images/products/water-bottle.jpg",
  name: "BOTTLE BOTTLE Insulated Water Bottle 24oz with Straw Lid and Handle for Sports Travel Gym Stainless Steel Water Bottles Double-Wall Vacuum Metal Thermos Bottles Leak Proof BPA-Free",
  rating: {
    stars: 4.5,
    count: 650
  },
  priceCents: 2999
},
{
  id: "23",
  image: "images/products/matching-keychains.jpg",
  name: "Couple Gift Keychain Cute Valentines Day Gift for Girlfriend Boyfriend Him Her Cat Lover Best Friend Husband Wife Fiancée Cat Matching Gift Couple Stuff for Christmas Birthday Anniversary New Year",
  rating: {
    stars: 4.5,
    count: 475
  },
  priceCents: 1399
},
{
  id: "24",
  image: "images/products/towels.jpg",
  name: "Elvana Home 4 Pack Bath Towel Set 27x54, 100% Ring Spun Cotton, Ultra Soft Highly Absorbent Machine Washable Hotel Spa Quality Bath Towels for Bathroom, 4 Bath Towels Light Grey",
  rating: {
    stars: 3.5,
    count: 6780
  },
  priceCents: 4584
},
{
  id: "25",
  image: "images/products/pillows.jpg",
  name: "2pcs Flower Pillow - Pink & White Daisy Flower Shaped Throw Pillows, Cute Flower Pillow Plush Floor Preppy Pillows Cushion for Bedroom Sofa Chair Room Decor (15.35 Inch, White + Pink)",
  rating: {
    stars: 4,
    count: 87
  },
  priceCents: 3579
},
{
  id: "26",
  image: "images/products/yoga-mat.jpg",
  name: "Retrospec Solana Yoga Mat 1/2 Thick w/ Nylon Strap for Men & Women - Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts",
  rating: {
    stars: 4.5,
    count: 4617
  },
  priceCents: 3344
},
{
  id: "27",
  image: "images/products/lipstick.jpg",
  name: "e.l.f. 16HR Camo Concealer, Full Coverage & Highly Pigmented, Matte Finish, Light Ivory, 0.203 Fl Oz (6mL)",
  rating: {
    stars: 4,
    count: 17390
  },
  priceCents: 699
},
{
  id: "28",
  image: "images/products/bed-sheets.jpg",
  name: "AmazonBasics Light-Weight Microfiber Sheet Set - Queen, Frosted Lavender",
  rating: {
    stars: 4.5,
    count: 462541
  },
  priceCents: 2233
},
{
  id: "29",
  image: "images/products/vitamin-c.jpg",
  name: "Tree Hut Vitamin C Shea Sugar Scrub, 18 oz, Ultra Hydrating and Exfoliating Scrub for Nourishing Essential Body Care",
  rating: {
    stars: 4.5,
    count: 9646
  },
  priceCents: 2349
},
{
  id: "30",
  image: "images/products/sleep-mask.jpg",
  name: "Hot & Cold Gel Bead Eye Mask/Sleep Mask - Reusable, Microwavable & Freezable Eye Compress Gel Mask with Adjustable Strap - Sleep Mask for Puffy & Tired Eyes By Grace And Stella",
  rating: {
    stars: 4,
    count: 1423
  },
  priceCents: 1395
},
{
  id: "31",
  image: "images/products/calendar.jpg",
  name: "S&O Boho Modern Wall Calendar from January 2024-June 2025 - Tear-Off Monthly Calendar - 18 Month Academic Wall Calendar - Hanging Calendar to Track Anniversaries & Appointments - 13.5 x10.5 in ",
  rating: {
    stars: 4.5,
    count: 4
  },
  priceCents: 1199
},
{
  id: "32",
  image: "images/products/purple-balloons.jpg",
  name: "Pastel Purple Balloons Different Sizes-100 Pcs Purple Balloon Garland Arch Kit 18 12 5 Inch Macaron Purple Latex Balloons for Baby Shower Wedding Birthday Bride Balloon Party Decorations",
  rating: {
    stars: 4,
    count: 384
  },
  priceCents: 1699
},
{
  id: "33",
  image: "images/products/plush-blanket.jpg",
  name: "Viviland Faux Fur Throw Blanket for Bed Couch Sofa - Soft Cozy Furry Warm Throw - Comfy Shaggy Blanket - Machine Washable - Mint Green Fuzzy Plush Twin - 60 x 80",
  rating: {
    stars: 4.5,
    count: 1540
  },
  priceCents: 5099
},
{
  id: "34",
  image: "images/products/dino-plushie.jpg",
  name: "Ditucu Cute Dinosaur Stuffed Animals Toys Plush Dolls Soft Dino Plushie Birthday Gifts for Kids Girls Boys Blue 10 inch",
  rating: {
    stars: 4.5,
    count: 426
  },
  priceCents: 2499
},
{
  id: "35",
  image: "images/products/light-humidifier.jpg",
  name: "Mini Humidifier, Cute Onion Shape Portable Small Air Humidifier. Ultrasonic Cool Mist USB Powered for Bedroom Desk Plants & Baby Nursery. Home Decor. Silent & Auto Shut-Off",
  rating: {
    stars: 4,
    count: 6
  },
  priceCents: 1999
},
{
  id: "36",
  image: "images/products/mechanical-pencils.jpg",
  name: "Four Candies Cute Mechanical Pencil Set, 6PCS Pastel Pencils 0.5mm & 0.7mm with 360PCS HB Pencil Leads, 3PCS Erasers and 9PCS Eraser Refills, Aesthetic Mechanical Pencils for Girls Writing",
  rating: {
    stars: 4.5,
    count: 3698
  },
  priceCents: 1599
},
{
  id: "37",
  image: "images/products/cargo-pants.jpg",
  name: "Xukk Cargo Pants for Women Hight Waist Straight Leg Parachute Pant Drawstring Loose Baggy Y2K Sweatpants Streetwear Trousers",
  rating: {
    stars: 4,
    count: 37
  },
  priceCents: 3199
},
{
  id: "39",
  image: "images/products/crates.jpg",
  name: "Xhwykzz 4 Pack Mini Pastel Crates for Storage, Mini Plastic Folding Baskets, Cute Colorful Organizing Crates for Bedroom Office Classroom Bathroom Desktop Drawer Shelf(5.9x3.9x2.2in)",
  rating: {
    stars: 4.5,
    count: 679
  },
  priceCents: 1295
},
{
  id: "40",
  image: "images/products/ghost-chain.jpg",
  name: "Cute Ghost Pendant Necklaces Set - Ideal for Women, Men, Girls, Boys and as Best Friend Charm Necklace - BFF Friendship Couple Jewelry for Halloween Costume",
  rating: {
    stars: 4,
    count: 52
  },
  priceCents: 2499
},
{
  id: "41",
  image: "images/products/bread-hand-warmers.jpg",
  name: "USB Heated Gloves,1 Pair Cute Toast Shape USB Heating Warm Glove Winter Half Wearable Fingerless Hand Warmers",
  rating: {
    stars: 4,
    count: 57
  },
  priceCents: 3699
},
{
  id: "42",
  image: "images/products/flower-magnets.jpg",
  name: "Lukinuo Cute Flower Fridge Magnets 20PCS Mini Daisy Refrigerator Magnet Colorful Flower Fridge Magnets for Locker Whiteboard Refrigerator Office Photo Cabinet Bulletin Board",
  rating: {
    stars: 2.5,
    count: 36
  },
  priceCents: 1199
},
{
  id: "43",
  image: "images/products/bbt-plushie.jpg",
  name: "Genchi Boba Plush Pillow Bubble Tea Plush Cartoon Pet Pillow Animal Stuffy for Baby Kids Children Boys and Girls Kawaii Plushies, Doll Plush Anime Figurine (Brown Smile Milk Tea, 24cm)",
  rating: {
    stars: 4.5,
    count: 855
  },
  priceCents: 1699
},
{
  id: "44",
  image: "images/products/dog-pillow.jpg",
  name: "JEROKUMI Kids Travel Pillow, Kid Neck Pillows for Sleeping Travel Cute Animal U Shaped Travel Pillow, Kid Travel Essentials for Airplane Car, Travel Pillow for Kids & Adults",
  rating: {
    stars: 4,
    count: 1
  },
  priceCents: 1999
},
{
  id: "45",
  image: "images/products/spa-headband.jpg",
  name: "Beaupretty Women Spa Headband Animal Makeup Hair Wrap Coral Fleece Cute Cartoon Cow Face Wash Hair Band",
  rating: {
    stars: 5,
    count: 1
  },
  priceCents: 1699
},
{
  id: "46",
  image: "images/products/fridge-magnets.jpg",
  name: "12Pcs Glass Strong Magnetic Refrigerator Magnet Fridge Sticker, Round Glass Fridge Decoration, Office Whiteboard Cabinet Dishwasher Magnet, Cabinet Cute Locker Magnet (12, Pink Ins)",
  rating: {
    stars: 4,
    count: 36
  },
  priceCents: 1699
},
{
  id: "47",
  image: "images/products/tote-bag.jpg",
  name: "Mahrokh Canvas Tote Bag for Women with Inner Pocket Aesthetic Cute Shopping Tote Bags Reusable Grocery Bags",
  rating: {
    stars: 4.5,
    count: 617
  },
  priceCents: 3999
},
{
  id: "48",
  image: "images/products/stanley-cup.jpg",
  name: "Stanley Quencher H2.0 FlowState Stainless Steel Vacuum Insulated Tumbler with Lid and Straw for Water, Iced Tea or Coffee, Smoothie and More, Cream, 40 oz",
  rating: {
    stars: 4.5,
    count: 3414
  },
  priceCents: 5990
},
{
  id: "49",
  image: "images/products/skateboard.jpg",
  name: "BELEEV Skateboards, 31 x 8 inch Complete Skateboard for Beginners, 7 Layer Canadian Maple Double Kick Deck Concave Cruiser Trick, Light Up Wheel Skateboard for Kids Teens & Adults",
  rating: {
    stars: 4.5,
    count: 6742
  },
  priceCents: 4999
}
];