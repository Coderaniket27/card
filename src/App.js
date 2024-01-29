import Navigation from "./components/Navigation";
import { Link, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/footer.css";
import "./styles/contact.css";
import "./styles/banner.css";
import "./styles/bannerdown.css";
import BannerDown from "./components/BannerDown";
import "./styles/about.css";
import Mission from "./components/Mission";
import About from "./components/About";
import Services from "./components/Services";
import Home from "./components/Home";
import Products from "./components/Products";
import "./App.css";
import "./styles/navigation.css";
import Card from "./components/Card";
import "./styles/reset.css";
import "./styles/common.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Benifits from "./components/Benifits";
import Offers from "./components/Offers";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benifits" element={<Benifits />} />
        <Route path="/card" element={<Card />} />
        <Route path="/products" element={<Products />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/offers" element={<Offers />} />

        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer />
 
    </>
  );
}

export default App;
