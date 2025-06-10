import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { phoneData } from "../data/phoneData";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

const PhoneDetail = () => {
  const { slug } = useParams();
  const { addToCart, removeFromCart, cart } = useCart();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = phoneData.find((item) => item.slug === slug);
    setProduct(foundProduct);

    if (foundProduct) {
      const related = phoneData.filter(
        (p) =>
          p.category === foundProduct.category && p.slug !== foundProduct.slug
      );
      setRelatedProducts(related);
    } else {
      setRelatedProducts([]);
    }
  }, [slug]);

  if (!product) return <div className="p-4">Product not found</div>;

  const isInCart = cart.some((item) => item.slug === product.slug);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Link to="/" className="inline-block mb-4 text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 bg-white border rounded-xl p-6 shadow-sm">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-contain"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-semibold text-gray-900">
            {product.title}
          </h1>

          {/* ⭐ Rating */}
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
                  aria-hidden="true"
                >
                  <path d="M12 .587l3.668 7.568L24 9.75l-6 5.904L19.335 24 12 20.017 4.665 24 6 15.654 0 9.75l8.332-1.595z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({product.rating})
              </span>
            </div>
          )}

          {Array.isArray(product.description) ? (
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
              {product.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-sm">{product.description}</p>
          )}

          <p className="text-green-600 font-bold text-2xl">
            ₹{product.price.toLocaleString()}
          </p>

          {isInCart ? (
            <button
              onClick={() => removeFromCart(product.slug)}
              className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-md shadow flex items-center gap-2"
            >
              <ShoppingCart size={16} />
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={() =>
                addToCart({
                  slug: product.slug,
                  title: product.title,
                  image: product.image,
                  price: product.price,
                })
              }
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-md shadow flex items-center gap-2"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Related Phones
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <Link
              to={`/phones/${item.slug}`}
              key={item.slug}
              className="bg-white border rounded-xl p-4 hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-contain mb-3"
              />
              <p className="font-medium text-gray-800 text-sm truncate">
                {item.title}
              </p>
              <p className="text-green-600 text-sm font-semibold">
                ₹{item.price.toLocaleString()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneDetail;
