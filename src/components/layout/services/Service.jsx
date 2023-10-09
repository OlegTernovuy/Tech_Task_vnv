import { Button } from "../../ui/button/Button";

export const Service = ({item}) => {
  return (
    <div className="services-item" data-aos="fade-up">
      <div className="services-about">
        <span>
          <h2>{item.title[0]}</h2>
          <h2>{item.title[1]}</h2>
          <h2>{item.title[2]}</h2>
        </span>

        <p className="services-about-text">{item.about}</p>

        <section data-aos="fade-right">
          <Button text="Хочу" link="contact" />
        </section>
      </div>
      <div>
        <img
          src={item.img}
          alt="services-img"
          width={600}
          height={600}
          className="services-img"
        />
      </div>
    </div>
  );
};
