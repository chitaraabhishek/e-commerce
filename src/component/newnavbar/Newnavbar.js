import React from "react";
import "./newnavbar.css";

const Newnavbar = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p>All</p>
          <p>Mobile</p>
          <p>Best Seller</p>
          <p>Fashion</p>
          <p>Customer Services</p>
          <p>Electronices</p>
          <p>Prime</p>
          <p>Today's Deals</p>
          <p>Amazon pay</p>
        </div>
        <div className="right_data">
          <img src="./image/nav.jpg" alt="navata" />
        </div>
      </div>
    </div>
  );
};

export default Newnavbar;
