import { Divider } from "@mui/material";
import "./buynow.css";
import Option from "./Option";
import Right from "./Right";
import Subtotal from "./Subtotal";

const Buynow = () => {
  return (
    <>
      <div className="buynow_section">
        <div className="buynow_container">
          <div className="left_buy">
            <h1>Shopping Cart</h1>
            <p>Select all items</p>
            <span className="leftbuyprice">Price</span>
            <Divider />
            <div className="item_containert">
              <img
                src="https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z."
                alt="imgitem"
              />
              <div className="item_details">
                <h3>Molife Sense 500 Smartwatch (Black Strap, Freesize)</h3>
                <h3>Smart Watches</h3>
                <h3 className="diffrentprice">₹₹85.00</h3>
                <p className="unusuall">Usually dispatched in 8 days.</p>
                <p>Eligible for FREE Shipping</p>
                <img
                  src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                  alt="logo"
                />
                <Option />
              </div>
              <h3 className="item_price">₹85.00</h3>
            </div>
            <Divider />
            <Subtotal />
          </div>
          <Right />
        </div>
      </div>
    </>
  );
};

export default Buynow;

// thodu changes krya 6 carts ni andr cart htu bt tene remove karine
// je pramane aapdo normal data save 6 te rite bnavyu
// jo carts ni andr cart use kro to tmare map call kravya pachi pn e.cart.discount
