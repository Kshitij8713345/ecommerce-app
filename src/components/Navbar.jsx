import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import allProducts from "../data/allProducts";
import { phoneData } from "../data/phoneData";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.length;
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const allItems = [...allProducts, ...phoneData];
  const uniqueCategories = [...new Set(allItems.map((p) => p.category))];

  const navLinkClass = (path) =>
    `hover:text-blue-600 transition ${
      location.pathname === path ? "text-blue-600 font-semibold underline" : ""
    }`;

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 flex items-center gap-2"
        >
          🛒 E-Shop
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>

          {/* Categories Dropdown with Arrow Rotation */}
          <div className="relative group">
            <button className="flex items-center gap-1 transition group-hover:text-blue-600 group-hover:underline">
              Categories{" "}
              <ChevronDown className="w-4 h-4 mt-0.5 transform transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 w-44 bg-white shadow-md rounded-md mt-2 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {uniqueCategories.map((cat) => (
                <Link
                  key={cat}
                  to={`/category/${cat.toLowerCase()}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/products" className={navLinkClass("/products")}>
            Products
          </Link>
          <Link to="/about" className={navLinkClass("/about")}>
            About
          </Link>
          <Link to="/contact" className={navLinkClass("/contact")}>
            Contact
          </Link>

          {/* Search */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (search.trim()) {
                navigate(`/search?q=${encodeURIComponent(search.trim())}`);
                setSearch("");
              }
            }}
            className="relative w-64"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products..."
              className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
            />
            <svg
              className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </form>
        </nav>

        {/* Cart & Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative flex items-center gap-1 font-semibold text-black hover:text-blue-600 transition"
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5m12-5l2 5M6 21a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            <span>Cart</span>
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-inner px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-3 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="space-y-2 text-sm font-medium text-gray-700">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-600"
          >
            Products
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-600"
          >
            Contact
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-600 relative"
          >
            Cart
            {cartCount > 0 && (
              <span className="ml-1 bg-red-600 text-white text-xs w-5 h-5 inline-flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
