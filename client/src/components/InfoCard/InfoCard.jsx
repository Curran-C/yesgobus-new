/* eslint-disable react/prop-types */
import "./InfoCard.scss";

const InfoCard = ({ img, title, subtitle }) => {
  return (
    <div className="infoCard">
      <div>
        <img src={img} alt="" />
        <h1 className="infotitle">{title}</h1>
      </div>
      <p className="infosubtitle">{subtitle}</p>
    </div>
  );
};

export default InfoCard;
