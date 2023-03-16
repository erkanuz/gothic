import React from "react";

import Login from "./components/login/Login";
import Register from "./components/login/Register";

import About from "./components/About";
import Pages from "./components/Pages";
import NotFound from "./components/404";
import Details from "./components/Details";
import Promotion from "./components/Promotion";
import Favourites from "./components/Favourites";

import WCS from "./components/categories/WCS";
import MCS from "./components/categories/MCS";
import Accessories from "./components/categories/Accessories";

import Checkout from "./components/Checkout"

import { Route, Routes } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="select-none font-serif bg-white dark:bg-black transition ease-in duration-300">
      <ToastContainer limit={3} autoClose={3000} pauseOnFocusLoss={false} draggable={false} closeOnClick rtl={false} />
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Details/:id" element={<Details />}/>
        <Route path="/Promotion" element={<Promotion />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/About" element={<About />} />
        <Route 
        path="/Checkout" 
        element={
        <ProtectedRoute>
          <Checkout />
        </ProtectedRoute>
        } 
        />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Womens" element={<WCS />} />
        <Route path="/Mens" element={<MCS />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
