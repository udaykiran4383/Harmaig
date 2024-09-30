import React, {useEffect}from "react";

import Head from "../components/Head";
import Hero from "../components/Hero";
import Explore from "../components/Explore";


import ImageSlider from "../components/slider";

import ContactDetails from "../components/ContactDetails";
function HomePage() {
  useEffect(() => {
    const style= document.createElement('style');
    style.innerHTML=
    `html {
      scroll-behavior: smooth;
    }
    `
    document.head.appendChild(style);
     return () => {
       document.head.removeChild(style);
     }
   }, [])
   useEffect(() => {
    const card = document.querySelector(".Card");
    if (card) {
      card.style.display = "flex";
      card.style.flexWrap = "wrap"; 
      card.style.justifyContent = "center";// Corrected flex-wrap value
    }
  }, []);
  return (

    <div className="App">
      <Head/>
      <Hero />
      <Explore />

      <ImageSlider/>
      <ContactDetails/>
      

    </div>
  );
}

export default HomePage;
