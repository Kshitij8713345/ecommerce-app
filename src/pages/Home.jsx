import allProducts from "../data/allProducts";
import { phoneData } from "../data/phoneData";
import HeroSlider from "../components/HeroSlider";
import { Link } from "react-router-dom";
import SmartphoneDeals from "../components/SmartphoneDeals";
import CategoryList from "../components/CategoryList";

export default function Home() {
  const allCombinedProducts = [...allProducts, ...phoneData];

  return (
    <div className="p-4">
      {/* Sale Banner */}
      <section className="mb-8">
        <div className="bg-blue-100 p-6 rounded text-center shadow">
          <h2 className="text-3xl font-bold text-blue-900">Big Sale is Live! 🔥</h2>
          <p className="mt-2 text-blue-700">Up to 50% off on selected products.</p>
        </div>
      </section>

      <HeroSlider />

      <div className="text-center my-6">
        <Link
          to="/products"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          🛒 Shop Now
        </Link>
      </div>

      {/* Category Grid */}
      <CategoryList />

      {/* Latest Products */}
      <section className="mb-12">
        <h3 className="text-xl font-bold mb-4 mt-10 flex items-center gap-2 text-gray-800">
          <span className="text-2xl">🔥</span>
          <span>Latest Products</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {allCombinedProducts.slice(0, 4).map((product) => (
            <Link
              to={
                product.category === "phone"
                  ? `/phones/${product.slug}`
                  : `/product/${product.slug}`
              }
              key={product.slug}
              className="block p-4 bg-white border rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="h-40 overflow-hidden rounded-md mb-3">
                <img
                  src={product.image}
                  alt={product.name || product.title}
                  className="w-full h-full object-contain rounded transition duration-300 transform hover:scale-105 hover:brightness-105"
                />
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">
                {product.name || product.title}
              </h4>
              <p className="text-gray-600 text-sm mb-2">
                {Array.isArray(product.description)
                  ? product.description[0]
                  : product.description}
              </p>
              <p className="font-bold text-blue-600">₹{product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
            🔥 Featured Deals
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {allCombinedProducts.slice(4, 8).map((item) => (
              <Link
                to={
                  item.category === "phone"
                    ? `/phones/${item.slug}`
                    : `/product/${item.slug}`
                }
                key={item.slug}
                className="block p-4 bg-white border rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="w-full h-36 overflow-hidden rounded-xl mb-3">
                  <img
                    src={item.image}
                    alt={item.name || item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-800">
                  {item.name || item.title}
                </h3>
                <p className="text-green-600 font-bold mt-1">Best Deal 🔥</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SmartphoneDeals />

      {/* Why Shop With Us */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">✨ Why Shop With Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow rounded text-center hover:scale-105 transition duration-300">
            <h4 className="font-bold mb-1">🚚 Fast Delivery</h4>
            <p className="text-gray-600 text-sm">We deliver products within 2-3 days.</p>
          </div>
          <div className="p-4 bg-white shadow rounded text-center hover:scale-105 transition duration-300">
            <h4 className="font-bold mb-1">🔒 Secure Payment</h4>
            <p className="text-gray-600 text-sm">Your payments are safe with us.</p>
          </div>
          <div className="p-4 bg-white shadow rounded text-center hover:scale-105 transition duration-300">
            <h4 className="font-bold mb-1">🕑 24/7 Support</h4>
            <p className="text-gray-600 text-sm">Our team is here to help anytime.</p>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="bg-yellow-50 py-10 rounded-lg shadow text-center mb-12">
        <h2 className="text-xl font-bold mb-4">🌟 Trusted by Top Brands</h2>
        <p className="text-gray-600 mb-6">
          We collaborate with the most loved brands to bring you quality.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          {[1, 2, 3, 4].map((b) => (
            <img
              key={b}
              src={`${import.meta.env.BASE_URL}brand${b}.jpg`}
              alt={`Brand ${b}`}
              className="h-12 grayscale hover:grayscale-0 transition rounded"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
