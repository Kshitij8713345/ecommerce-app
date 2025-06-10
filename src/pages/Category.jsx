import React from "react";
import { useParams, Link } from "react-router-dom";
import allProducts from "../data/allProducts";
import { phoneData } from "../data/phoneData";

export default function Category() {
  const { name } = useParams();

  const allItems = [...allProducts, ...phoneData];

  const filtered = allItems.filter(
    (item) => item.category?.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Link to="/" className="text-blue-600 text-sm hover:underline">
        ← Back to Home
      </Link>

      <h1 className="text-2xl font-bold capitalize mb-6 flex items-center gap-2">
        📂 {name.replace("-", " ")} Products
      </h1>

      {filtered.length === 0 ? (
        <p className="text-gray-600">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.slug}
              className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name || product.title}
                className="w-full h-48 object-contain mb-3"
                onError={(e) =>
                  (e.target.src = `${import.meta.env.BASE_URL}fallback.png`)
                }
              />

              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-semibold text-gray-800 truncate">
                  {product.name || product.title}
                </h4>
                <p className="text-sm font-bold text-green-600">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>

              <Link
                to={`/product/${product.slug}`}
                className="text-sm text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
