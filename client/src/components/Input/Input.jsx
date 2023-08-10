import "./Input.scss";

const Input = ({ title, type }) => {
  return (
    <div className="Input">
      <span className="title">{title}</span>
      <input type={type} />
    </div>
  );
};

export default Input;
