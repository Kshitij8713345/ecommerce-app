import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import allProducts from "../data/allProducts";

export default function ProductView() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const product = allProducts.find((p) => p.id.toString() === id);

  if (!product) {
    return <div className="p-4 text-red-500">Product not found.</div>;
  }

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (product.category === "clothing" && !selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    addToCart({
      ...product,
      quantity,
      size: product.category === "clothing" ? selectedSize : null,
    });

    if (product.category === "clothing") setSelectedSize(null);
    setQuantity(1);
  };

  return (
    <div className="mt-6 p-4 max-w-5xl mx-auto bg-white rounded shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {/* Product Image */}
        <div className="overflow-hidden border rounded-lg shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-gray-700 text-sm mb-4 break-words">
            {product.description}
          </p>
          <p className="text-2xl text-green-700 font-semibold mb-6">
            ₹{product.price}
          </p>

          {/* Size Selector for Clothing */}
          {product.category === "clothing" && (
            <div className="mb-4">
              <label className="font-medium">Select Size:</label>
              <div className="flex gap-2 mt-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded transition ${
                      selectedSize === size
                        ? "bg-blue-600 text-white"
                        : "hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <label className="block font-medium mb-1">Quantity</label>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))
              }
              className="w-20 p-1 border rounded"
            />
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((related) => (
            <Link
              to={`/product/${related.slug}`}
              key={related.id}
              className="block border rounded-lg p-4 bg-white shadow hover:shadow-md transition-transform hover:-translate-y-1"
            >
              <img
                src={related.image}
                alt={related.name}
                className="w-full h-32 object-contain mb-2"
              />
              <h4 className="font-semibold text-sm">{related.name}</h4>
              <p className="text-sm text-gray-600">₹{related.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
