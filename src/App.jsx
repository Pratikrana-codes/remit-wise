import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Logout from './pages/Logout';
import Remitterinfo from './pages/Remitterinfo';
import Benificiaryinfo from './pages/Benificiaryinfo';
import Sendmoney from './pages/Sendmoney';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path='/remitterinfo' element={<Remitterinfo/>} />
          <Route path='/beneficiaryinfo' element={<Benificiaryinfo/>} />
          <Route path='/sendmoney' element={<Sendmoney/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
   )
}

export default App