import iphone7_1 from './Assets/iPhone7_1.jpg'
import iPhone7_2 from './Assets/iPhone7_2.jpg'
import iPhone7_3 from './Assets/iPhone7_3.jpg'
import iPhone7Plus_1 from './Assets/iPhone7Plus_1.jpg'
import iPhone7Plus_2 from './Assets/iPhone7Plus_2.jpg'
import iPhone7Plus_3 from './Assets/iPhone7Plus_3.jpg'
import iPhone8_1 from './Assets/iPhone8Plus_1.jpg'
import iPhone8_2 from './Assets/iPhone8Plus_1.jpg'
import iPhone8_3 from './Assets/iPhone8Plus_1.jpg'
import iPhone8Plus_1 from './Assets/iPhone8Plus_1.jpg'
import iPhone8Plus_2 from './Assets/iPhone8Plus_2.jpg'
import iPhone8Plus_3 from './Assets/iPhone8Plus_3.jpg'
import iPhoneX_1 from './Assets/iPhoneX_1.jpg'
import iPhoneX_2  from './Assets/iPhoneX_2.jpg'
import iPhoneX_3  from './Assets/iPhoneX_3.jpg'
import iPhone11_1 from './Assets/iPhone11_1.jpg'
import iPhone11_2 from './Assets/iPhone11_2.jpg'
import iPhone11_3 from './Assets/iPhone11_3.jpg'
import iPhone11Pro_1 from './Assets/iPhone11Pro_1.jpg'
import iPhone11Pro_2 from './Assets/iPhone11Pro_2.jpg'
import iPhone11Pro_3 from './Assets/iPhone11Pro_3.jpg'
import iPhone11ProMax_1 from './Assets/iPhone11ProMax_1.jpg'
import iPhone11ProMax_2 from './Assets/iPhone11ProMax_2.jpg'
import iPhone11ProMax_3 from './Assets/iPhone11ProMax_3.jpg'
// import iPhone7Plus_1 from './Assets/iPhone7Plus_1.jpg'
// import iPhone7Plus_1 from './Assets/iPhone7Plus_1.jpg'
// import iPhone7Plus_1 from './Assets/iPhone7Plus_1.jpg'

const data = [
    {
        id: 1,
        product_title: "iPhone 7",
        models: [
            {
                version: "iPhone 7",
                space: ["32GB", "64GB", "128GB"],
                price: 3500,
                desc: "The iPhone 7 offers a sleek design with improved camera quality and water resistance. A great choice for users seeking performance on a budget.",
                variants: ["Black", "Silver", "Gold", "Rose Gold"],
                gallery: [
                    iphone7_1 ,
                    iPhone7_2,
                    iPhone7_3
                ]
            },
            {
                version: "iPhone 7 Plus",
                space: ["32GB", "64GB", "128GB"],
                price: 4000,
                desc: "The iPhone 7 Plus features a dual-camera system for better zoom and portrait photography, with a larger display.",
                variants: ["Black", "Silver", "Gold", "Rose Gold"],
                gallery: [
                    iPhone7Plus_1,
                    iPhone7Plus_2,
                    iPhone7Plus_3
                ]
            }
        ]
    },
    {
        id: 2,
        product_title: "iPhone 8",
        models: [
            {
                version: "iPhone 8",
                space: ["64GB", "256GB"],
                price: 4500,
                desc: "The iPhone 8 introduces wireless charging and a more powerful chip, packaged in a durable glass body.",
                variants: ["Black", "Silver", "Gold"],
                gallery: [
                    iPhone8_1,
                    iPhone8_2,
                    iPhone8_3
                ]
            },
            {
                version: "iPhone 8 Plus",
                space: ["64GB", "256GB"],
                price: 5000,
                desc: "The iPhone 8 Plus offers a bigger screen, better battery life, and a dual-camera system.",
                variants: ["Black", "Silver", "Gold"],
                gallery: [
                    iPhone8Plus_1,
                    iPhone8Plus_2,
                    iPhone8Plus_3
                ]
            }
        ]
    },
    {
        id: 3,
        product_title: "iPhone X",
        models: [
            {
                version: "iPhone X",
                space: ["64GB", "256GB"],
                price: 6000,
                desc: "The iPhone X revolutionizes the iPhone lineup with a full-screen design and Face ID, offering a futuristic user experience.",
                variants: ["Space Gray", "Silver"],
                gallery: [
                    iPhoneX_1 ,
                    iPhoneX_2 ,
                    iPhoneX_3 
                ]
            }
        ]
    },
    {
        id: 4,
        product_title: "iPhone 11",
        models: [
            {
                version: "iPhone 11",
                space: ["64GB", "128GB", "256GB"],
                price: 7000,
                desc: "The iPhone 11 provides exceptional value with its dual-camera system, long battery life, and colorful design.",
                variants: ["Black", "Green", "Purple", "Red", "White", "Yellow"],
                gallery: [
                    iPhone11_1,
                    iPhone11_2,
                    iPhone11_3
                ]
            },
            {
                version: "iPhone 11 Pro",
                space: ["64GB", "256GB", "512GB"],
                price: 8500,
                desc: "The iPhone 11 Pro features a stunning OLED display, triple-camera system, and exceptional performance.",
                variants: ["Midnight Green", "Space Gray", "Silver", "Gold"],
                gallery: [
                    iPhone11Pro_1,
                    iPhone11Pro_2,
                    iPhone11Pro_3
                ]
            },
            {
                version: "iPhone 11 Pro Max",
                space: ["64GB", "256GB", "512GB"],
                price: 9000,
                desc: "The iPhone 11 Pro Max is the largest iPhone 11 model, boasting a bigger battery and immersive display.",
                variants: ["Midnight Green", "Space Gray", "Silver", "Gold"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            }
        ]
    },
    {
        id: 5,
        product_title: "iPhone 12",
        models: [
            {
                version: "iPhone 12",
                space: ["64GB", "128GB", "256GB"],
                price: 8000,
                desc: "The iPhone 12 combines 5G speed, OLED display, and MagSafe accessories for a complete smartphone experience.",
                variants: ["Blue", "Green", "Red", "White", "Black"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            },
            {
                version: "iPhone 12 Pro",
                space: ["128GB", "256GB", "512GB"],
                price: 9500,
                desc: "The iPhone 12 Pro brings a LiDAR sensor for better augmented reality and low-light photography.",
                variants: ["Pacific Blue", "Gold", "Graphite", "Silver"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            },
            {
                version: "iPhone 12 Pro Max",
                space: ["128GB", "256GB", "512GB"],
                price: 10500,
                desc: "The iPhone 12 Pro Max is the largest and most powerful iPhone 12 with incredible battery life.",
                variants: ["Pacific Blue", "Gold", "Graphite", "Silver"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            },
            {
                version: "iPhone 12 Mini",
                space: ["64GB", "128GB", "256GB"],
                price: 7000,
                desc: "The iPhone 12 Mini packs all the features of the iPhone 12 in a compact and lightweight design.",
                variants: ["Blue", "Green", "Red", "White", "Black"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            }
        ]
    },
    {
        id: 6,
        product_title: "iPhone 13",
        models: [
            {
                version: "iPhone 13",
                space: ["128GB", "256GB", "512GB"],
                price: 8500,
                desc: "The iPhone 13 features an advanced dual-camera system, a powerful A15 Bionic chip, and improved battery life.",
                variants: ["Pink", "Blue", "Midnight", "Starlight", "Red"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            },
            {
                version: "iPhone 13 Pro",
                space: ["128GB", "256GB", "512GB", "1TB"],
                price: 10500,
                desc: "The iPhone 13 Pro introduces ProMotion technology with a 120Hz display and a triple-camera system with advanced photographic features.",
                variants: ["Sierra Blue", "Graphite", "Gold", "Silver"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            },
            {
                version: "iPhone 13 Pro Max",
                space: ["128GB", "256GB", "512GB", "1TB"],
                price: 11500,
                desc: "The iPhone 13 Pro Max offers all the features of the iPhone 13 Pro but with a larger display and improved battery life.",
                variants: ["Sierra Blue", "Graphite", "Gold", "Silver"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            },
            {
                version: "iPhone 13 Mini",
                space: ["128GB", "256GB", "512GB"],
                price: 7500,
                desc: "The iPhone 13 Mini delivers all the power of the iPhone 13 in a compact, pocket-friendly size.",
                variants: ["Pink", "Blue", "Midnight", "Starlight", "Red"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            }
        ]
    },
    {
        id: 7,
        product_title: "iPhone 14",
        models: [
            {
                version: "iPhone 14",
                space: ["128GB", "256GB", "512GB"],
                price: 9500,
                desc: "The iPhone 14 features the latest A16 chip, improved durability, and a more advanced dual-camera system.",
                variants: ["Midnight", "Blue", "Purple", "Red", "Starlight"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            },
            {
                version: "iPhone 14 Pro",
                space: ["128GB", "256GB", "512GB", "1TB"],
                price: 11500,
                desc: "The iPhone 14 Pro brings Dynamic Island technology, an always-on display, and a 48MP main camera.",
                variants: ["Deep Purple", "Gold", "Silver", "Space Black"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            },
            {
                version: "iPhone 14 Pro Max",
                space: ["128GB", "256GB", "512GB", "1TB"],
                price: 12500,
                desc: "The iPhone 14 Pro Max offers the largest display in the lineup, with ProMotion and exceptional battery performance.",
                variants: ["Deep Purple", "Gold", "Silver", "Space Black"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            },
            {
                version: "iPhone 14 Plus",
                space: ["128GB", "256GB", "512GB"],
                price: 10000,
                desc: "The iPhone 14 Plus brings a bigger display and longer battery life in the standard iPhone 14 lineup.",
                variants: ["Midnight", "Blue", "Purple", "Red", "Starlight"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            }
        ]
    },
    {
        id: 8,
        product_title: "iPhone 15",
        models: [
            {
                version: "iPhone 15",
                space: ["128GB", "256GB", "512GB"],
                price: 10500,
                desc: "The iPhone 15 features a refined design with USB-C, the A17 chip, and an upgraded dual-camera system.",
                variants: ["Midnight", "Blue", "Pink", "Yellow", "Green"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            },
            {
                version: "iPhone 15 Pro",
                space: ["128GB", "256GB", "512GB", "1TB"],
                price: 12500,
                desc: "The iPhone 15 Pro introduces a titanium frame, a 3nm A17 chip, and advanced photography capabilities with a 48MP camera.",
                variants: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            },
            {
                version: "iPhone 15 Pro Max",
                space: ["128GB", "256GB", "512GB", "1TB"],
                price: 13500,
                desc: "The iPhone 15 Pro Max is the pinnacle of performance, with a larger display and a periscope zoom camera.",
                variants: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            }
        ]
    },
    {
        id: 9,
        product_title: "iPhone 16",
        models: [
            {
                version: "iPhone 16",
                space: ["256GB", "512GB", "1TB"],
                price: 12000,
                desc: "The iPhone 16 sets a new standard with its ultra-durable design, A18 chip, and enhanced battery life, perfect for power users.",
                variants: ["Black", "White", "Gold"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            },
            {
                version: "iPhone 16 Pro",
                space: ["512GB", "1TB"],
                price: 14500,
                desc: "The iPhone 16 Pro features an even faster A18 chip, improved triple-camera system, and advanced AR integration.",
                variants: ["Graphite", "Silver", "Gold"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            },
            {
                version: "iPhone 16 Pro Max",
                space: ["512GB", "1TB", "2TB"],
                price: 15500,
                desc: "The iPhone 16 Pro Max offers the largest display ever on an iPhone, and comes with a powerful triple-camera setup.",
                variants: ["Graphite", "Silver", "Gold"],
                gallery: [
                    iPhone11ProMax_1,
                    iPhone11ProMax_2,
                    iPhone11ProMax_3
                ]
            }
        ]
    },
    
];

export default data;
