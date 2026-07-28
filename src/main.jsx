import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Notfound from './views/Notfound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookCard from './components/BookCard/BookCard';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/notfound" element={<Notfound/>} />
    </Routes>
      <Footer/>
  </BrowserRouter>
)
