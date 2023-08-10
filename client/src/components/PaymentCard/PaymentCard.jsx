import "./PaymentCard.scss";

const PaymentCard = ({ image, title, subtitle }) => {
  return (
    <div className="PaymentCard">
      <div className="paymentleft">
        <img src={image} alt="" />
      </div>
      <div className="paymentright">
        <p>{title}</p>
        <p>{subtitle}</p>
        <hr />
      </div>
    </div>
  );
};

export default PaymentCard;
