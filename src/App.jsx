
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import {Route,BrowserRouter,Routes } from "react-router-dom";
import Cart from './Pages/Cart';
import LoginSingnup from './Pages/LoginSingnup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kid_banner from './Components/Assests/banner_kids.png'
function App() {
  


  return (
    <>
    <BrowserRouter> 
      <Navbar />
       <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner}category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path="/product/:productId" element={<Product />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSingnup/>} />

      </Routes> 
      <Footer/> 
       </BrowserRouter>
    </>
  )
}

export default App
