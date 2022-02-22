import "./signup.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sign_up = () => {
  const [update, setUpdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  console.log(update);

  const adddata = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.value);

    setUpdata(() => {
      return {
        ...update,
        [name]: value,
      };
    });
  };
  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./image/blacklogoamazon.png" alt="signupimg" />
          </div>
          <div className="sign_form">
            <form>
              <h1>Sign-Up</h1>

              <div className="form_data">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  name="fname"
                  onChange={adddata}
                  value={update.fname}
                  id="fname"
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  onChange={adddata}
                  value={update.email}
                  id="email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="mobile">Mobile number</label>
                <input
                  type="number"
                  name="mobile"
                  onChange={adddata}
                  value={update.mobile}
                  id="mobile"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={adddata}
                  value={update.password}
                  id="password"
                  placeholder="At least 6 characters"
                />
              </div>
              <div className="form_data">
                <label htmlFor="cpasswordg">Password again</label>
                <input
                  type="password"
                  name="cpassword"
                  onChange={adddata}
                  value={update.cpassword}
                  id="cpasswordg"
                />
              </div>
              <button type="submit" className="signin_btn">
                Continue
              </button>
              <div className="signin_info">
                <p>Already have account?</p>
                <NavLink to="/login">Signin</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign_up;
