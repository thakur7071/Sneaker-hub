import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShopCategory from '../src/Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from '../src/Components/Assets/men_banner.png';
import { useState } from 'react';
import LoginPopup from './Components/LoginPopup/LoginPopup';
import './App.css'; // Import your CSS file for layout adjustments
import { Toaster } from 'sonner'; // Import Toaster from sonner

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Toaster for global toast notifications */}
      <Toaster />

      {/* Conditionally render the LoginPopup if showLogin is true */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className="page-container">
        <div className="content-wrap">
          <BrowserRouter>
            {/* Navbar component with setShowLogin passed as a prop */}
            <Navbar setShowLogin={setShowLogin} />
            
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/mens"
                  element={<ShopCategory banner={men_banner} category="men" />}
                />
                <Route
                  path="/womens"
                  element={<ShopCategory banner={men_banner} category="women" />}
                />
                <Route
                  path="/kids"
                  element={<ShopCategory banner={men_banner} category="kid" />}
                />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
          </BrowserRouter>
        </div>
        
        {/* Footer component */}
        <Footer />
      </div>
    </>
  );
};

export default App;
