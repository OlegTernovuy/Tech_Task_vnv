import "./advantages.scss";

import { Button } from "../../ui/button/Button";
import { whyUs } from "../../../data";
import { Advantage } from "./Advantage";

export const Advantages = () => {
  return (
    <div className="advantages" id="advantages">
      <h1 data-aos="fade-right">Чому ми!</h1>
      <div className="why-items" data-aos="fade-left">
        {whyUs.map((item) => {
          return <Advantage key={item.icon} item={item} />;
        })}
      </div>
      <section className="advantages-button" data-aos="fade-right">
        <Button text="Замовити" link="contact" />
      </section>
    </div>
  );
};
