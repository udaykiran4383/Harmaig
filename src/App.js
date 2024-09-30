import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage';

import Product from './pages/Product';

import Profile from "./pages/Profile";

import Signup from "./pages/Signup"

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
        <Route path="/" element={<HomePage/>}></Route>
       
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

