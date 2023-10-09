import { useEffect } from "react";
import { Hero } from "../hero/Hero";
import { Advantages } from "../advantages/Advantages";
import { Services } from "../services/Services";
import { Portfolio } from "../portfolio/Portfolio";
import { Reviews } from "../reviews/Reviews";
import { Faq } from "../faq/Faq";
import { Discounts } from "../discounts/Discounts";
import { Contact } from "../contact/Contact";

import Aos from "aos";
import "aos/dist/aos.css";

export const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Hero />
      <Advantages />
      <Services />
      <Portfolio />
      <Reviews />
      <Discounts />
      <Faq />
      <Contact />
    </div>
  );
};
