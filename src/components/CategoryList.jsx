import React from "react";
import { Link } from "react-router-dom";
import categoryData from "../data/categoryData";

export default function CategoryList() {
  return (
    <section className="py-14 px-4 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          🛒 Explore Categories
        </h1>
        <p className="text-gray-600 max-w-md mx-auto text-sm">
          Browse by category to find exactly what you're looking for.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {categoryData.map((cat) => (
          <Link to={`/category/${cat.slug}`} key={cat.slug}>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden">
              <div className="h-44 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500 leading-tight">
                  {cat.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
