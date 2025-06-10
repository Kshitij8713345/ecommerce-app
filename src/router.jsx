import { createHashRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import SmartphoneDeals from "./components/SmartphoneDeals";
import PhoneDetail from "./pages/PhoneDetail";
import ProductView from "./pages/ProductView";
import CategoryList from "./components/CategoryList";
import SearchPage from "./pages/SearchPage";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "product/:slug", element: <ProductDetail /> },
      { path: "category/:name", element: <Category /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "order-confirmation", element: <OrderConfirmation /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "", element: <SmartphoneDeals /> },
      { path: "phones/:slug", element: <PhoneDetail /> },
      { path: "product-view/:id", element: <ProductView /> },
      { path: "categories", element: <CategoryList /> },
      { path: "search", element: <SearchPage /> },
    ],
  },
]);

export default router;
