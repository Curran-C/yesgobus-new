import { whitecar } from "../../assets/homepage";
import "./SimpleCard.scss";

const SimpleCard = ({ title, text, rate }) => {
  return (
    <div className="simpleCard">
      <img src={whitecar} alt="" />
      <h1 className="title">{title}</h1>
      <p className="text">{text}</p>
      <h1 className="rate">{rate}</h1>
    </div>
  );
};

export default SimpleCard;
