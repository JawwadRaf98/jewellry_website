import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutUs from "./Components/About/AboutUs";
import Contact from "./Components/ContactUs";
import Shop from "./Components/Shop";
import FAQ from "./Components/FAQ";
import ItemsBuy from "./Components/ItemsBuy";
import Cart from "./Components/Cart";
import LoginUi from "./Components/Login/index";
import ReturnPolicy from "./Components/ReturnPolicy";
import OrderInformation from "./Components/OrderInformation";
import Delievery from "./Components/Delievery";
import Profile from "./Profile";
import Logout from './Components/Logout'
import Signup from "./Components/Signup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
    <ToastContainer />
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/ShopCategory" element={<ItemsBuy />} />
        <Route path="/login" element={<LoginUi />} />
        <Route path="/signup" element={<Signup /> } />
        <Route path="/logout" element={<Logout />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/delivery" element={<Delievery/>} />
        <Route path="/return_policy" element={<ReturnPolicy />} />
        <Route path="/oders_information" element={<OrderInformation />} />


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
