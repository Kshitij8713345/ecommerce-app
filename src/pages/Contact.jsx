import React from "react";

export default function ContactUs() {
  return (
    <section className="py-10 px-4 max-w-5xl mx-auto" id="contact">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-500 mt-2">We’d love to hear from you!</p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="border border-green-500 rounded shadow text-center p-6">
          <div className="mb-4 text-green-600 text-3xl">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h3 className="text-xl font-semibold mb-1">Let's Talk</h3>
          <p><b>Phone:</b> +91-9393939393</p>
        </div>

        <div className="border border-green-500 rounded shadow text-center p-6">
          <div className="mb-4 text-green-600 text-3xl">
            <i className="fas fa-envelope-open"></i>
          </div>
          <h3 className="text-xl font-semibold mb-1">Drop a Line</h3>
          <p><b>Email:</b> vaishali03jan2005@gmail.com</p>
        </div>

        <div className="border border-green-500 rounded shadow text-center p-6">
          <div className="mb-4 text-green-600 text-3xl">
            <i className="far fa-life-ring"></i>
          </div>
          <h3 className="text-xl font-semibold mb-1">24x7 Support</h3>
          <p><b>Customer:</b> 1800 101 303</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto border shadow rounded p-6">
        <h3 className="text-2xl font-semibold text-center mb-4">Contact Form</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
