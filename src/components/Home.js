import React from "react";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import BannerDown from "../components/BannerDown";
import Mission from "../components/Mission";
import About from "../components/About";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <BannerDown />
      <About />
      <Services />
      <Mission />
      <Contact />
    </>
  );
};
export default Home;
