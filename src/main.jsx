import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Notfound from './views/Notfound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
         <Route path="/Notfound" element={<Notfound/>} />  
    </Routes>
      <Footer/>
  </BrowserRouter>
)
