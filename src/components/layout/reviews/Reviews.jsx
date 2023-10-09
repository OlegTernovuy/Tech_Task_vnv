import "./Reviews.scss";

import { ReviewsData } from "../../../data";
import { Review } from "./Review";

export const Reviews = () => {
  return (
    <div className="reviews">
      <h1 className="review-title">What Our Fantastic Clients Say!</h1>
      <div className="reviews-items" data-aos="fade-up">
        {ReviewsData.map((item) => {
          return <Review item={item} key={item.name}/>;
        })}
      </div>
    </div>
  );
};
