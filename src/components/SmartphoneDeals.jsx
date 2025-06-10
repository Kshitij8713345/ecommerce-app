import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { phoneData } from "../data/phoneData";

export default function SmartphoneDeals() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || phoneData.length <= 5) return;

    const interval = setInterval(() => {
      const cardWidth = container.children[0]?.offsetWidth || 240;
      const gap = 24; // Tailwind's gap-6 = 24px
      const scrollAmount = cardWidth + gap;

      let newIndex = currentIndex + 1;
      if (newIndex > phoneData.length - 5) {
        newIndex = 0;
      }

      container.scrollTo({
        left: newIndex * scrollAmount,
        behavior: "smooth",
      });

      setCurrentIndex(newIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="bg-gray-100 px-6 py-10 rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        🔥 Best Deals on Smartphones
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden scroll-smooth snap-x snap-mandatory"
      >
        {phoneData.map((phone) => (
          <Link
            key={phone.slug}
            to={`/phones/${phone.slug}`}
            className="flex-shrink-0 w-56 bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center snap-start"
          >
            <div className="w-full h-44 flex items-center justify-center mb-3 bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={phone.image}
                alt={phone.title}
                onError={(e) => (e.target.src = `${import.meta.env.BASE_URL}fallback.png`)}
                className="max-h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-sm font-semibold text-gray-800">
              {phone.title}
            </h3>
            <p className="text-base font-bold text-green-700 mt-1">
              ₹{phone.price}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
