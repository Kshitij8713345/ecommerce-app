import React from "react";

export default function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  sortOption,
  onSortChange
}) {
  return (
    <div className="w-full md:w-1/4 p-4 border-r">
      <h3 className="text-xl font-semibold mb-4">Filters</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Category</h4>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`cursor-pointer px-3 py-1 rounded border ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Price Range</h4>
        <input
          type="range"
          min="0"
          max="1000000" // 🔧 Updated to allow higher priced products
          step="1000"
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm mt-1">
          <span>₹0</span>
          <span>₹{priceRange.toLocaleString()}</span>
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <h4 className="font-medium mb-2">Sort By</h4>
        <select
          className="w-full border px-2 py-1 rounded"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="">Default</option>
          <option value="az">A - Z</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
