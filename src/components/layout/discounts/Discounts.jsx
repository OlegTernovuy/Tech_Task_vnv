import "./discounts.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Discount } from "./Discount";
import { discount } from "../../../data";

export const Discounts = () => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };
  return (
    <div className="discounts" id="discounts" data-aos="fade-up">
      <h1 className="discounts-title">Hurry up and get a great deal</h1>
      <Slider {...settings}>
        {discount.map((item) => {
          return <Discount item={item} key={item.title} />;
        })}
      </Slider>
    </div>
  );
};
