import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from  './Pages/Home'
import ShopCategory from '../src/Pages/ShopCategory';
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Footer from './Components/Footer/Footer';
import men_banner from '../src/Components/Assets/men_banner.png'
import { useState } from 'react';
import LoginPopup from './Components/LoginPopup/LoginPopup';
const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <BrowserRouter>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={men_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={men_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
       </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    </>

  )
}

export default App
