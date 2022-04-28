import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './screens/homePage/HomePage'
import CartPage from './screens/cartPage/CartPage';
import ProductPage from './screens/productPage/ProductPage';
import './App.scss'
import NavBar from './component/Navbar';
import logo from './assets/logo.png';
function App() {
  return (
    <div className="App">
      <NavBar logo={logo}></NavBar>
      <div className="content">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route
            path="*"
            element={<Navigate to="/home" replace />}
          />
        </Routes>

      </div>
    </div>
  );
}

export default App;
