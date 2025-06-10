const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL;

const categoryData = [
  {
    name: "Electronics",
    slug: "electronics",
    image: `${base}/categories/electronics.jpg`,
  },
  {
    name: "Clothing",
    slug: "clothing",
    image: `${base}/categories/clothing.jpg`,
  },
  {
    name: "Footwear",
    slug: "footwear",
    image: `${base}/categories/footwear.jpg`,
  },
  {
    name: "Home Decor",
    slug: "home-decor",
    image: `${base}/categories/home-decor.jpg`,
  },
];

export default categoryData;
