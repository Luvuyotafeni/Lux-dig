import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Products from './components/Products/Products'
import Promotions from './components/Promotions/Promotions'
import Enquire from './components/Enquire/Enquire'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/enquire" element={<Enquire />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;