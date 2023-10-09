import "./button.scss";

import { PiArrowRightThin } from "react-icons/pi";

import { Link } from "react-scroll";

export const Button = ({ text, func, link }) => {
  if (link) {
    return (
      <Link to={link} spy={true} smooth={true} duration={800}>
        <button onClick={func} className="button-gradient">
          <p className="button">{text}</p>{" "}
          <PiArrowRightThin className="arrow-icon" />
        </button>
      </Link>
    );
  } else {
    return (
      <button onClick={func} className="button-gradient">
        <p className="button">{text}</p>{" "}
        <PiArrowRightThin className="arrow-icon" />
      </button>
    );
  }
};
