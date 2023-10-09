import "./leadMagnet.scss";
import { Button } from "../button/Button";
import { AiOutlineClose } from "react-icons/ai";

export const LeadMagnet = ({ handleHideLeadMagnet }) => {
  return (
    <>
      <div className="LeadMagnet">
        <AiOutlineClose
          size={20}
          className="AiOutlineCloseModal"
          onClick={handleHideLeadMagnet}
        />
        <h2>При першому замовленні щось безкоштовно</h2>
        <Button text="Детальніше" link="discounts" func={handleHideLeadMagnet} />
      </div>
      <div className="LeadMagnetBackround" onClick={handleHideLeadMagnet}></div>
    </>
  );
};
