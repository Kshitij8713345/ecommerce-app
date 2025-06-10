const rawBase = import.meta.env.BASE_URL;
const base = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;

const allProducts = [
  {
    id: 1,
    name: "Classic White Tee",
    description: "Soft cotton crew neck, perfect for everyday wear.",
    price: 799,
    category: "clothing",
    slug: "classic-white-tee",
    image: `${base}/Product1.jpg`,
    rating: 4.0
  },
  {
    id: 2,
    name: "Graphic Streetwear Tee",
    description: "Bold print design for a street-style look.",
    price: 999,
    category: "clothing",
    slug: "graphic-streetwear-tee",
    image: `${base}/Product2.jpg`,
    rating: 5.0
  },
  {
    id: 3,
    name: "Minimalist Black Tee",
    description: "Sleek, all-black tee for modern minimalism.",
    price: 899,
    category: "clothing",
    slug: "minimalist-black-tee",
    image: `${base}/Product3.jpg`,
    rating: 3.3
  },
  {
    id: 4,
    name: "Retro Vintage Tee",
    description: "Throwback design with faded retro colors.",
    price: 1099,
    category: "clothing",
    slug: "retro-vintage-tee",
    image: `${base}/Product4.jpg`,
    rating: 4.3
  },
  {
    id: 5,
    name: "Oversized Fit Tee",
    description: "Trendy oversized fit with dropped shoulders.",
    price: 1199,
    category: "clothing",
    slug: "oversized-fit-tee",
    image: `${base}/Product5.jpg`,
    rating: 5.0
  },
  {
    id: 6,
    name: "Tie-Dye Chill Tee",
    description: "Colorful tie-dye print for casual vibes.",
    price: 999,
    category: "clothing",
    slug: "tie-dye-chill-tee",
    image: `${base}/Product6.jpg`,
    rating: 3.3
  },
  {
    id: 7,
    name: "Athleisure Dry-Fit Tee",
    description: "Breathable dry-fit for workouts and active days.",
    price: 1299,
    category: "clothing",
    slug: "athleisure-dry-fit-tee",
    image: `${base}/Product7.jpg`,
    rating: 4.0
  },
  {
    id: 8,
    name: "Earth-Tone Basic Tee",
    description: "Muted tones and eco-friendly cotton fabric.",
    price: 899,
    category: "clothing",
    slug: "earth-tone-basic-tee",
    image: `${base}/Product8.jpg`,
    rating: 5.0
  },
  {
    id: 9,
    name: "Apple MacBook Air Laptop",
    description: "Apple M1 chip, 13.3-inch Retina Display, 8GB RAM, 256GB SSD.",
    price: 60990,
    category: "electronics",
    slug: "apple-macbook-air-laptop",
    image: `${base}/electronic1.jpg`,
    rating: 4.6
  },
  {
    id: 10,
    name: "ASUS TUF Gaming A15",
    description: "AMD Ryzen 7, 16 Threads, 8 Cores Gaming Beast.",
    price: 86990,
    category: "electronics",
    slug: "asus-tuf-gaming-a15",
    image: `${base}/electronic2.jpg`,
    rating: 3.5
  },
  {
    id: 11,
    name: "Dell Inspiron 3530",
    description: "13th Gen Intel Core i5, 1TB SSD, 16GB RAM.",
    price: 58790,
    category: "electronics",
    slug: "Dell-Inspiron-3530",
    image: `${base}/electronic3.jpg`,
    rating: 4.5
  },
  {
    id: 12,
    name: "HP Victus",
    description: "i5, RTX 4050, 144Hz IPS, Win11, Office21.",
    price: 72990,
    category: "electronics",
    slug: "hp-victus",
    image: `${base}/electronic4.jpg`,
    rating: 4.0
  },
  {
    id: 13,
    name: "Lenovo LOQ 2024",
    description: "i5 13th Gen, RTX 4050, 16GB/512GB SSD, Win11.",
    price: 86990,
    category: "electronics",
    slug: "lenovo-loq-2024",
    image: `${base}/electronic5.jpg`,
    rating: 4.1
  },
  {
    id: 14,
    name: "Acer Predator Helios 16 AI",
    description: "i9, 32GB RAM, RTX 4080, WQXGA IPS, Win11.",
    price: 234000,
    category: "electronics",
    slug: "acer-predator-helios-16-ai-gaming-laptop",
    image: `${base}/electronic6.jpg`,
    rating: 5.0
  },
  {
    id: 15,
    name: "MSI Thin 15",
    description: "i5-13420H, RTX 2050, 512GB SSD.",
    price: 56990,
    category: "electronics",
    slug: "msi-thin-15",
    image: `${base}/electronic7.jpg`,
    rating: 3.3
  },
  {
    id: 16,
    name: "Acer ALG",
    description: "i7-13620H, RTX 3050, 144Hz, Win11.",
    price: 72990,
    category: "electronics",
    slug: "acer-alg",
    image: `${base}/electronic8.jpg`,
    rating: 3.6
  },
  {
    id: 17,
    name: "Acer Nitro V",
    description: "i5 13th Gen, RTX 4050, 165Hz, Obsidian Black.",
    price: 74999,
    category: "electronics",
    slug: "acer-nitro-v",
    image: `${base}/electronic9.jpg`,
    rating: 4.0
  }
];

export default allProducts;
