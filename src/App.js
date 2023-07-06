import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/ContactUs";
import Shop from "./Components/Shop";
import FAQ from "./Components/FAQ";
import ItemsBuy from "./Components/ItemsBuy";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/ShopCategory" element={<ItemsBuy />} />
        <Route path="/Cart" element={<Cart />} />
        {/* <Route path="/ExportersCategory" element={<Exporters />} /> */}
        {/* <Route path="/Exporters" element={<ExportersMain />} /> */}
        {/* <Route path="/MainCategory" element={<CategoryMain />} /> */}
        {/* <Route path="/Category" element={<Category />} /> */}
        {/* <Route path="/BuyNewRecuirements" element={<BuyRecuirements />} /> */}
        {/* <Route path="/Login" element={<LoginMain />} /> */}
        {/* <Route path="/Signup" element={<SignupMain />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
