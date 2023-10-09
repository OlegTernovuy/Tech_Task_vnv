import "./Reviews.scss";
import { CiStar } from "react-icons/ci";

export const Review = ({ item }) => {
  return (
    <div className="review-item">
      <img
        src={item.icon}
        alt="icon"
        width={150}
        height={150}
        className="reviewImage"
      />
      <h2>{item.name}</h2>
      <p className="review-item-text">{item.text}</p>
      <section>
        <CiStar size={30} color="yellow" />
        <CiStar size={30} color="yellow" />
        <CiStar size={30} color="yellow" />
        <CiStar size={30} color="yellow" />
        <CiStar size={30} />
      </section>
    </div>
  );
};
