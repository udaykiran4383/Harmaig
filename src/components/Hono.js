import React, { useEffect } from "react";
import "./Hono.css";

import {Link as RouterLink } from "react-router-dom"


function Hono() {
  useEffect(() => {
    const checkbox = document.querySelector("#menuToggle input");

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    const handleMenuChange = (event) => {
      if (event.target.checked) {
        disableScroll();
      } else {
        enableScroll();
      }
    };

    checkbox.addEventListener("change", handleMenuChange);

    return () => {
      checkbox.removeEventListener("change", handleMenuChange);
    };
  }, []);

  const closeMenu = () => {
    const checkbox = document.querySelector("#menuToggle input");
    checkbox.checked = false;
    document.body.style.overflow = "auto"; // Ensure scroll is enabled
  };

  return (
    <header className="header">
       <div className="menu">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <div className=""></div>
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <div className="line"></div>
      
              <RouterLink to="/Category">
              <a onClick={closeMenu}>
              
                </a>
                </RouterLink>
                
     
         
           
              <p className="sub">Repairs</p>
              <div className=" service">
              
    
              <p>Terms:</p>
              <p>Additional gold weight  </p>
              <p>
              billed at current market rate
              </p>
              </div>
              <p className="sub">Personalisation</p>
              <div className="personalisation">
              <p> Contact Us on:</p>
              <p>+91 8962675833</p>
              </div>

              <p className="sub">Art of Gifting</p>
              
              <div className="personalisation">
              <p> Contact Us on:</p>
              <p>+91 8962675833</p>
              </div>
              <h4>Connect</h4>
              <p className="service" >Can we help you?</p>
              
              <p className="service">+91 8963675833</p>
            </ul>
          </div>
        </nav>
        <div className="menu-text">Menu</div>
      </div> 
      <button className="searchicon">
        <img src="images/searchicon.jpg" alt="search" />
        <input className="search" type="text" placeholder="Search" />
      </button>
      <div className="logo">
      <RouterLink to="/Homepagel">
      HARMAIG
      </RouterLink>
      </div>
      <div className="sign-in">
      <RouterLink to="/Whislist">
        <img src="whislist.png" alt="whilist" className="whi"></img>
      </RouterLink>
      <RouterLink to="/cart">
        <img src="cart.png" alt="whilist" className="whislist"></img>
      </RouterLink>
      <RouterLink to="/order">
        <img src="order.png" alt="whilist" className="order"></img>
        </RouterLink>
        
        <RouterLink to="/profile">
        <img src="profile.png" alt="whilist" className="whislist"></img>
        </RouterLink>
      </div>
    
    </header>
  );
}

export default Hono;
