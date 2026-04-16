import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";

import Dining from "./Pages/Services/Dining";
import Delivery from "./Pages/Services/Delivery";
import Catering from "./Pages/Services/Catering";

import { UserProvider } from "./Context/UserContext";
import { cartReducer, initialState } from "./Reducer/CartReducer";

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home dispatch={dispatch} />} />
          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />}>
            <Route path="dining" element={<Dining />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="catering" element={<Catering />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}