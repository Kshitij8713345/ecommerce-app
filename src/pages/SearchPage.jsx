import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import allProducts from "../data/allProducts";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchPage() {
  const queryParam = useQuery();
  const navigate = useNavigate();
  const initialQuery = queryParam.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    if (query !== initialQuery) {
      navigate(`/search?q=${encodeURIComponent(query)}`, { replace: true });
    }
  }, [query]);

  const filtered = allProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleRowClick = (slug) => {
    navigate(`/product/${slug}`);
  };

  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">
          <i className="far fa-file mr-2"></i> Search
        </h2>
      </div>

      {/* Search Input */}
      <div className="mb-4 flex items-center gap-2 max-w-md mx-auto">
        <input
          type="text"
          className="w-full border px-4 py-2 rounded"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => navigate(`/search?q=${encodeURIComponent(query)}`)}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>

      <p className="text-center text-gray-600 mb-6">
        Showing results matching <strong>"{query}"</strong>
      </p>

      {/* Table Result */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">#</th>
              <th className="p-3">Image</th>
              <th className="p-3">Product</th>
              <th className="p-3 text-right">Rating</th>
              <th className="p-3 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, index) => (
              <tr
                key={p.id}
                className="border-t hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(p.slug)}
              >
                <td className="p-3 text-center">{index + 1}</td>
                <td className="p-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-20 rounded"
                  />
                </td>
                <td className="p-3">
                  <strong>{p.name}</strong>
                  <p className="text-sm text-gray-500">
                    {p.description?.toString().slice(0, 50)}...
                  </p>
                </td>
                <td className="p-3 text-right text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa ${
                        i < Math.round(p.rating || 0) ? "fa-star" : "fa-star-o"
                      }`}
                    ></i>
                  ))}
                </td>
                
                <td className="p-3 text-right font-semibold">₹{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
