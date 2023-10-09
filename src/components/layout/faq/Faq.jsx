import { useState } from "react";
import "./faq.scss";

import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { faqData } from "../../../data";

export const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    return setSelected(i);
  };

  return (
    <div className="faq">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-questions">
        {faqData.map((item, i) => {
          return (
            <div key={item.title} className="faq-question">
              <div className="open-answer" onClick={() => toggle(i)}>
                <h3 className="faq-subtitle">{item.title}</h3>
                <span>
                  {selected === i ? (
                    <SlArrowUp size={20} />
                  ) : (
                    <SlArrowDown size={20} />
                  )}
                </span>
              </div>
              <p className={selected === i ? "faq-text show" : "faq-text"}>
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
