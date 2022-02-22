import "./App.css";
import Navbar from "./component/header/Navbar";
import MainComponent from "./component/home/MainComponent";
import Newnavbar from "./component/newnavbar/Newnavbar";
import Footer from "./Footer/Footer";
import Sign_in from "./signup_sign/Sign_in";
import Sign_up from "./signup_sign/Sign_up";
import { Routes, Route } from "react-router-dom";
import Cart from "./component/cart/Cart";
import Buynow from "./component/buynow/Buynow";

function App() {
  return (
    <>
      <Navbar />
      <Newnavbar />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/login" element={<Sign_in />} />
        {/* <Route path="/register" element={<Sign_up />} /> */}
        <Route path="/getproductsone/:id" element={<Cart />} />
        <Route path="/buynow" element={<Buynow />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// a>b>c>d
// a -> props
// store 5 unserdata
