import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function OrderConfirmation() {
  const { clearCart } = useCart();

  // Order number generate sirf ek baar on mount
  const [orderNo] = useState(() =>
    Math.floor(Math.random() * 900000000000) + 100000000000
  );

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="p-6 max-w-xl mx-auto text-center bg-white rounded shadow-md slide-up-animation">
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        ✅ Order Placed Successfully!
      </h1>
      <p className="text-lg mb-3">Thank you for shopping with us.</p>
      <p className="text-md text-gray-700 mb-4">
        <strong>Order No:</strong> #{orderNo}
      </p>
      <p className="text-md text-blue-600 mb-8 font-semibold">Status: Confirmed 🚚</p>

      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Go Back to Home
      </Link>
    </div>
  );
}
