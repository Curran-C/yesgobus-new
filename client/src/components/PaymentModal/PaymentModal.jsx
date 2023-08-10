import Button from "../Button/Button";
import CardWithText from "../CardWithText/CardWithText";
import "./PaymentModal.scss";

const PaymentModal = ({ onCancel }) => {
  let user = {
    name: "Rahul",
    pan: "RDTWQ439FNL",
    email: "Rahul@gmail.com",
  };

  let address = {
    line1: "yesgobus",
    line2: "Benz circle, 5th floor",
    line3: "Electronic City",
    line4: "Ktaka, bangalore - 560064",
  };
  return (
    <div className="PaymentModal">
      <div className="blackbg" onClick={() => onCancel(false)}></div>
      <div className="modalcontainer">
        <div className="modalwrapper">
          <h1>Payment Successful</h1>
          <h2>You're now one of our Drivers!</h2>
          <CardWithText billing={true} title={"Billing Detials"} user={user} />
          <CardWithText
            billing={false}
            title={"Billing Detials"}
            address={address}
          />
          <div className="buttons">
            <Button text={"View Invoice"} />
            <Button text={"Download Invoice"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
