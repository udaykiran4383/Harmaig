import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import CustomerSupport from './components/CustomerSupport';
import Footer from './components/Footer';
import ContactDetails from './components/ContactDetails';
import './App.css';

import HomePage from './pages/HomePage';

import Product from './pages/Product';
import Head from './components/Head';
import Profile from "./pages/Profile";
import Homepagel from "./pages/Homepagel"
import Signup from "./pages/Signup"
import ArcOfRings from './components/ArcOfRings';
import Whislist from './pages/Whislist';
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Category from './pages/Category';
import Login from './pages/Login';
import Buyp from './pages/Buyp';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/HomePage" element={<HomePage/>}></Route>
        <Route path="/Homepagel" element={<Homepagel/>}></Route>
        <Route path="/Whislist" element={<Whislist/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/Category" element={<Category />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Buyp" element={<Buyp />}></Route>
            </Routes>
      
    </Router>
  );
}

export default App;

