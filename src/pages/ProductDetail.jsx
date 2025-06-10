import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import allProducts from "../data/allProducts";
import { phoneData } from "../data/phoneData";

export default function ProductDetail() {
  const { slug } = useParams();
  const { addToCart } = useCart();

  const products = [...allProducts, ...phoneData];
  const product = products.find((p) => p.slug === slug);

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="p-4 text-red-600">Product not found!</div>;
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );

  const handleAddToCart = () => {
    if (product.category === "clothing" && !selectedSize) {
      alert("Please select a size before adding to cart");
      return;
    }
    addToCart({ ...product, size: selectedSize, quantity });
    setSelectedSize(null);
    setQuantity(1);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <img
          src={product.image}
          alt={product.name || product.title}
          className="w-full max-w-sm object-contain mx-auto"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">
            {product.name || product.title}
          </h1>

          {/* Rating Stars */}
          {typeof product.rating === "number" && (
            <div className="flex items-center mb-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={
                    i < Math.round(product.rating) ? "currentColor" : "none"
                  }
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-yellow-500 mr-1"
                >
                  <path d="M12 .587l3.668 7.568L24 9.75l-6 5.904L19.335 24 12 20.017 4.665 24 6 15.654 0 9.75l8.332-1.595z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({product.rating})
              </span>
            </div>
          )}

          <p className="text-2xl text-green-700 font-semibold mb-2">
            ₹{product.price}
          </p>

          {/* Description */}
          {Array.isArray(product.description) ? (
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mb-4">
              {product.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 mb-4">{product.description}</p>
          )}

          {/* Size Selection */}
          {product.category === "clothing" && (
            <div className="mb-4">
              <span className="font-medium">Select Size: </span>
              <div className="flex gap-2 mt-1">
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

          {/* Quantity Input */}
          <div className="mb-6">
            <label className="block font-medium mb-1">Quantity</label>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  Math.max(1, Math.min(10, parseInt(e.target.value) || 1))
                )
              }
              className="w-20 p-1 border rounded"
            />
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div id="related-products">
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((rel) => (
            <Link to={`/product/${rel.slug}`} key={rel.slug}>
              <div className="border rounded-lg p-4 hover:shadow transition">
                <img
                  src={rel.image}
                  alt={rel.name || rel.title}
                  className="w-full h-32 object-contain mb-2"
                />
                <h3 className="text-sm font-medium">
                  {rel.name || rel.title}
                </h3>
                <p className="text-sm text-gray-600">₹{rel.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
