import "./hero.scss";
import Typed from "react-typed";

import { Button } from "../../ui/button/Button";

export const Hero = () => {
  return (
    <div className="hero-section">
      <h1 data-aos="fade-right">
        Easy, quality, IT -<br /> winning <b>solutions</b>
        <br /> for your
        <Typed
          className="typed-text"
          strings={["Business", "Company", "Organization"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </h1>
      <section data-aos="fade-left">
        <Button text="Замовити" link="contact"/>
      </section>
    </div>
  );
};
