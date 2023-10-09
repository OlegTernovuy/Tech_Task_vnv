
import "./discounts.scss";

export const Discount = ({ item }) => {
  return (
    <div className="discount-cart">
      <img src={item.img} alt={item.title} className="discount-cart-img" />
      <h1 className="discount-cart-h1">{item.title}</h1>
      <h2 className="discount-cart-h2">Up to -{item.countOfDisc}% discount</h2>
    </div>
  );
};
