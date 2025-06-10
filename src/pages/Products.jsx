import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import allProducts from "../data/allProducts";
import { phoneData } from "../data/phoneData";

export default function Products() {
  const { addToCart } = useCart();

  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState(150000);

  const maxPriceLimit = 1000000;

  const allItems = [...allProducts, ...phoneData];
  const uniqueCategories = [...new Set(allItems.map((p) => p.category))];

  let filteredProducts = [...allItems];

  if (categoryFilter) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category?.toLowerCase() === categoryFilter.toLowerCase()
    );
  }

  if (searchQuery) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (priceRange) {
    filteredProducts = filteredProducts.filter((p) => p.price <= priceRange);
  }

  if (sortOrder === "az") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-6">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border rounded p-4 shadow space-y-6 bg-white">
        <div>
          <label className="font-semibold block mb-1">Category</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-semibold block mb-1">
            Max Price: ₹{priceRange.toLocaleString()}
          </label>
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹0</span>
            <span>₹{maxPriceLimit.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="0"
            max={maxPriceLimit}
            step="1000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="font-semibold block mb-1">Sort By</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">Default</option>
            <option value="az">Name: A to Z</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>
        </div>

        <div>
          <label className="font-semibold block mb-1">Search</label>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
      </aside>

      {/* Product Grid */}
      <main className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold mb-4">🛍 All Products</h1>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const rating = Number(product.rating) || 0;
              const isClothing = product.category === "clothing";

              return (
                <div
                  key={`${product.id}-${product.name}`}
                  className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 flex flex-col"
                >
                  <Link to={`/product/${product.slug}`} className="mb-3 block">
                    <div className="h-40 min-w-[120px] overflow-hidden rounded mb-2 bg-gray-50 flex items-center justify-center">
                      <img
                        src={product.image}
                        onError={(e) => (e.target.src = "/fallback.png")}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <h4 className="text-base font-semibold text-gray-800 hover:underline line-clamp-1">
                      {product.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {product.description}
                    </p>
                    <p className="text-sm text-gray-800 font-semibold mt-1">
                      ₹{product.price}
                    </p>
                  </Link>

                  <div className="flex items-center mb-3 text-yellow-500 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa ${
                          i < Math.round(rating) ? "fas fa-star" : "far fa-star"
                        }`}
                      />
                    ))}
                  </div>

                  {isClothing ? (
                    <Link
                      to={`/product/${product.slug}`}
                      className="mt-auto inline-block text-sm font-medium px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 text-center"
                    >
                      View Details
                    </Link>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-auto bg-green-600 text-white px-4 py-1 rounded-full text-sm hover:bg-green-700 transition"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
