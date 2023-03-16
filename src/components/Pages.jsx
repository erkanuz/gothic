import React from 'react'
import Categories from "./Categories";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Products from "./Products";

const Pages = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Categories />
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}

export default Pages