export default function About() {
  return (
    <div className="bg-gray-50 py-10">
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-900">About E-Shop</h1>

        <p className="text-lg text-gray-700 mb-6 text-center">
          Welcome to <span className="font-semibold text-blue-600">E-Shop</span> — your one-stop destination for quality products, affordable prices, and seamless shopping experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
          src={`${import.meta.env.BASE_URL}about-illustration.png`}
            alt="About Illustration"
            className="rounded-lg shadow-md"
          />

          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Who We Are</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              E-Shop is a passionate team of developers and designers committed to delivering top-notch products and delightful user experiences. Whether you're shopping for the latest gadgets or trendy fashion, we've got you covered.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is simple: to make online shopping easy, enjoyable, and trustworthy. We constantly improve our platform and expand our catalog to serve you better every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
