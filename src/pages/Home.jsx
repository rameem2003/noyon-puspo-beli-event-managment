import React, { useEffect } from "react";
import Banner from "../components/screens/Home/Banner";
import Gallery from "../components/screens/Home/Gallery";
import HowWorks from "../components/screens/Home/HowWorks";
import OurSpeciality from "../components/screens/Home/OurSpeciality";
import Services from "../components/screens/Home/Services";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <Banner />
      <Gallery />
      <Services />
      <HowWorks />
      <OurSpeciality />
    </main>
  );
};

export default Home;
