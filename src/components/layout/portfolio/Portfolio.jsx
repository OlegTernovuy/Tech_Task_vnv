import "./Portfolio.scss";
import portfolioPhoto from "../../../assets/images/portfolio.webp";
import { Button } from "../../ui/button/Button";

export const Portfolio = () => {
  return (
    <div className="portfolio-wrapper" id="portfolio">
      <div className="portfolio">
        <div className="portfolio-desc-white">
          <h1 className="portfolio-title">Portfolio</h1>
          <div className="portfolio-desc-block" data-aos="fade-left">
            <h2>Lorem, ipsum dolor.</h2>
            <p className="portfolio-desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              dolorem fugiat vero temporibus corporis sequi perspiciatis ipsa
              aliquam ipsum, cum fugit doloribus aut minus laborum architecto.
              Voluptatem molestiae inventore quas officia, quos soluta itaque!
              Eligendi blanditiis repellendus porro aliquid tenetur?
            </p>
          </div>
        </div>
        <div className="portfolio-desc-gray">
          <section className="portfolio-button" data-aos="fade-left">
            <Button text="Хочу вже!" link="contact" />
          </section>
        </div>
      </div>
      <div className="portfolio-photo-wrapper" data-aos="fade-right">
        <img src={portfolioPhoto} alt="portfolio" className="portfolio-photo" />
      </div>
    </div>
  );
};
