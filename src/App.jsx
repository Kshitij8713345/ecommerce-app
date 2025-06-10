import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './index.css';
import './app.css';

// Toastify imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />  {/* 👈 Pages will render here */}
      <Footer />

      {/* ✅ Toast notifications appear globally from here */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}
