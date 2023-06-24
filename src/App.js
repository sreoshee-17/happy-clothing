import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Productdetails from './Pages/Productdetails';
import Home from './Pages/Home';
import Cartitems from './Components/Cartitems';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Product from './Components/Product';
import Sidebar from './Components/Sidebar';
import Hero from "./Components/Hero";

const App = () => {
  return(
    <div className='overflow-hidden'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product/:id' element={<Productdetails />} />
          <Route path='/product' element={<Hero/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
