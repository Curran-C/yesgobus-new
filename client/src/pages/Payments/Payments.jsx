import { useState } from "react";
import { netbanking, paytm, phonepe, upi } from "../../assets/payment";
import {
  Amount,
  Button,
  Navbar,
  PaymentCard,
  PaymentModal,
} from "../../components";
import "./Payments.scss";
import axios from "axios";

const Payments = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const handlePayment = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/payment/initiatePayment`,
        {
          amount: 10,
          redirectUrl: `https://yesgobus.com/`
        }
      );
      window.location.replace(response.data.data.instrumentResponse.redirectInfo.url);
    } catch (error) {
      alert("Something went wrong");
      console.error("omething went wrong:", error);
    }
  }
  return (
    <div className="Payments">
      <Navbar />
      {showPaymentModal && <PaymentModal onCancel={setShowPaymentModal} />}
      <div className="container">
        <h1>Your KYC is completed</h1>
        <h4>Total Amount For Registeration</h4>
        <div className="wrapper">
          <div className="left">
            <div className="amounts">
              <Amount text={"Total Amount"} amt={"₹5000.00"} />
              <Amount text={"Discount"} amt={"-₹1000.00"} />
              <Amount text={"Tax"} amt={"Included"} />
              <Amount text={"Amount Payable"} amt={"₹4000.00"} />
            </div>
            <Button
              onClicked={() => handlePayment()}
              text={"Pay Now"}
            />
          </div>
          <div className="right">
            <div className="title">
              <p>All Payment Options</p>
              <hr />
            </div>
            <div className="payments">
              <PaymentCard
                image={paytm}
                title={"Paytm QR"}
                subtitle={"To use paytm qr for payment"}
              />
              <PaymentCard
                image={phonepe}
                title={"Phonepe QR"}
                subtitle={"To use phonepe qr for payment"}
              />
              <PaymentCard
                image={upi}
                title={"UPI"}
                subtitle={"To use phonepe qr for payment"}
              />
              <PaymentCard
                image={netbanking}
                title={"Net Banking"}
                subtitle={"To use phonepe qr for payment"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
