// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import ProductNavbar from './layout/navbar'; // Updated import to match your navbar component
import Login from './components/Login'; 
import Register from './components/Register';  
import About from './components/about'; 
import Contact from './components/contact'; 
import ProductList from './components/Home';
import CreateProduct from './components/createProduct';
import Products from './components/product';
import Cart from './components/cart';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated); // Get authentication state

  return (
    <Router>
      <div>
        {/* Render the navbar only if authenticated */}
        {isAuthenticated && <ProductNavbar />} 

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<ProductList />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
