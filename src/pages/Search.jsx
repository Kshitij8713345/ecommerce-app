import { useLocation, Link } from "react-router-dom";
import allProducts from "../data/allProducts";
import { phoneData } from "../data/phoneData";

// helper to read query params from URL
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const rawQuery = useQuery().get("q") || "";
  const query = rawQuery.trim().toLowerCase();

  // Merge all products
  const products = [...allProducts, ...phoneData];

  // Filter based on query
  const filtered = products.filter(
    (p) =>
      p.name?.toLowerCase?.().includes(query) ||
      p.title?.toLowerCase?.().includes(query) ||
      p.category?.toLowerCase?.().includes(query)
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Results for "<span className="text-blue-600">{rawQuery}</span>"
      </h1>

      {filtered.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <Link
              key={product.slug}
              to={
                product.category === "phone"
                  ? `/phones/${product.slug}`
                  : `/product/${product.slug}`
              }
              className="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="h-36 mb-3 overflow-hidden rounded">
                <img
                  src={product.image}
                  alt={product.title || product.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {product.title || product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-1 line-clamp-1">
                {Array.isArray(product.description)
                  ? product.description[0]
                  : product.description}
              </p>
              <p className="text-blue-600 font-bold">₹{product.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
