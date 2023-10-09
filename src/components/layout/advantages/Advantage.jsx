import "./advantages.scss";

export const Advantage = ({ item }) => {
  return (
    <div className="why-item-wrapper">
      <div className="why-item">
        <img
          src={item.icon}
          alt="icon"
          width={50}
          height={50}
          className="image"
        />
        <p className="why-item-text">{item.text}</p>
      </div>
    </div>
  );
};
