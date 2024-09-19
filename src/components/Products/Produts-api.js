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
                    "./Assets/iPhone7_1.jpg",
                    "./Assets/iPhone7_2.jpg",
                    "./Assets/iPhone7_3.jpg"
                ]
            },
            {
                version: "iPhone 7 Plus",
                space: ["32GB", "64GB", "128GB"],
                price: 4000,
                desc: "The iPhone 7 Plus features a dual-camera system for better zoom and portrait photography, with a larger display.",
                variants: ["Black", "Silver", "Gold", "Rose Gold"],
                gallery: [
                    "./Assets/iPhone7Plus_1.jpg",
                    "./Assets/iPhone7Plus_2.jpg",
                    "./Assets/iPhone7Plus_3.jpg"
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
                    "./Assets/iPhone8_1.jpg",
                    "./Assets/iPhone8_2.jpg",
                    "./Assets/iPhone8_3.jpg"
                ]
            },
            {
                version: "iPhone 8 Plus",
                space: ["64GB", "256GB"],
                price: 5000,
                desc: "The iPhone 8 Plus offers a bigger screen, better battery life, and a dual-camera system.",
                variants: ["Black", "Silver", "Gold"],
                gallery: [
                    "./Assets/iPhone8Plus_1.jpg",
                    "./Assets/iPhone8Plus_2.jpg",
                    "./Assets/iPhone8Plus_3.jpg"
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
                    "./Assets/iPhoneX_1.jpg",
                    "./Assets/iPhoneX_2.jpg",
                    "./Assets/iPhoneX_3.jpg"
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
                    "./Assets/iPhone11_1.jpg",
                    "./Assets/iPhone11_2.jpg",
                    "./Assets/iPhone11_3.jpg"
                ]
            },
            {
                version: "iPhone 11 Pro",
                space: ["64GB", "256GB", "512GB"],
                price: 8500,
                desc: "The iPhone 11 Pro features a stunning OLED display, triple-camera system, and exceptional performance.",
                variants: ["Midnight Green", "Space Gray", "Silver", "Gold"],
                gallery: [
                    "./Assets/iPhone11Pro_1.jpg",
                    "./Assets/iPhone11Pro_2.jpg",
                    "./Assets/iPhone11Pro_3.jpg"
                ]
            },
            {
                version: "iPhone 11 Pro Max",
                space: ["64GB", "256GB", "512GB"],
                price: 9000,
                desc: "The iPhone 11 Pro Max is the largest iPhone 11 model, boasting a bigger battery and immersive display.",
                variants: ["Midnight Green", "Space Gray", "Silver", "Gold"],
                gallery: [
                    "./Assets/iPhone11ProMax_1.jpg",
                    "./Assets/iPhone11ProMax_2.jpg",
                    "./Assets/iPhone11ProMax_3.jpg"
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
                    "./Assets/iPhone12_1.jpg",
                    "./Assets/iPhone12_2.jpg",
                    "./Assets/iPhone12_3.jpg"
                ]
            },
            {
                version: "iPhone 12 Pro",
                space: ["128GB", "256GB", "512GB"],
                price: 9500,
                desc: "The iPhone 12 Pro brings a LiDAR sensor for better augmented reality and low-light photography.",
                variants: ["Pacific Blue", "Gold", "Graphite", "Silver"],
                gallery: [
                    "./Assets/iPhone12Pro_1.jpg",
                    "./Assets/iPhone12Pro_2.jpg",
                    "./Assets/iPhone12Pro_3.jpg"
                ]
            },
            {
                version: "iPhone 12 Pro Max",
                space: ["128GB", "256GB", "512GB"],
                price: 10500,
                desc: "The iPhone 12 Pro Max is the largest and most powerful iPhone 12 with incredible battery life.",
                variants: ["Pacific Blue", "Gold", "Graphite", "Silver"],
                gallery: [
                    "./Assets/iPhone12ProMax_1.jpg",
                    "./Assets/iPhone12ProMax_2.jpg",
                    "./Assets/iPhone12ProMax_3.jpg"
                ]
            },
            {
                version: "iPhone 12 Mini",
                space: ["64GB", "128GB", "256GB"],
                price: 7000,
                desc: "The iPhone 12 Mini packs all the features of the iPhone 12 in a compact and lightweight design.",
                variants: ["Blue", "Green", "Red", "White", "Black"],
                gallery: [
                    "./Assets/iPhone12Mini_1.jpg",
                    "./Assets/iPhone12Mini_2.jpg",
                    "./Assets/iPhone12Mini_3.jpg"
                ]
            }
        ]
    },
    // Continue this pattern for iPhone 13, iPhone 14, iPhone 15, and iPhone 16 Pro Max
    // For each new model, define their different versions (Pro, Pro Max, Mini if applicable)
];

export default data;
