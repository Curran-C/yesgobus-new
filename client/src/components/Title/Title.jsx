/* eslint-disable react/prop-types */
import "./Title.scss";

const Title = ({ title, subtitle, text }) => {
  return (
    <div className="titleContainer">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>
        {text}
      </p>
    </div>
  );
};

export default Title;
