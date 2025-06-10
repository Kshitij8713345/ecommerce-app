import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  // Calculate total price considering quantity
  const total = cart.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size || "nosize"}`}
              className="border p-4 rounded shadow-sm flex items-center gap-4"
            >
              <img
                src={item.image || `${import.meta.env.BASE_URL}fallback.png`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `${import.meta.env.BASE_URL}fallback.png`;
                }}
                alt={item.name || "Product"}
                className="w-20 h-20 object-contain border rounded"
              />

              <div className="flex-1">
                <h2 className="font-semibold text-lg">
                  {item.name || "Untitled Product"}
                </h2>
                <p className="text-gray-600">
                  Price: ₹{item.price.toLocaleString()}
                </p>
                {item.category === "clothing" && (
                  <p className="text-gray-600">
                    Size: <span className="font-medium">{item.size}</span>
                  </p>
                )}

                <p className="text-gray-600">
                  Quantity: <span className="font-medium">{item.quantity}</span>
                </p>
                <p className="text-gray-600 font-semibold mt-1">
                  Subtotal: ₹{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>

              <div className="text-right">
                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right">
            <h2 className="text-xl font-semibold">
              Total: ₹{total.toLocaleString()}
            </h2>
            <Link
              to="/checkout"
              className="mt-2 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
