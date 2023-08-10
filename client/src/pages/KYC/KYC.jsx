import { Navigate, useNavigate } from "react-router-dom";
import { back, front } from "../../assets/KYC";
import { Button, Input, Navbar, SignModal } from "../../components";
import "./KYC.scss";
import { useState } from "react";

const KYC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="KYC">
      <Navbar />
      {showModal && <SignModal onCancel={setShowModal} />}
      <div className="details">
        <h1>Complete KYC</h1>
        <p>Personal Details</p>
        <div className="detailsContainer">
          <h4>Enter your details</h4>
          <hr style={{ margin: 0 }} />
          <div className="inputs">
            <Input title={"First Name"} type={"text"} />
            <Input title={"Last Name"} type={"text"} />
            <Input title={"Mobile"} type={"number"} />
            <Input title={"Email"} type={"email"} />
            <Input title={"Pin Code"} type={"number"} />
          </div>
        </div>
      </div>

      <div className="id">
        <p>ID Proof</p>
        <div className="idContainer">
          <h4>Enter your details</h4>
          <hr style={{ margin: 0 }} />
          <div className="idWrapper">
            <div className="left">
              <div className="buttons">
                <Button text={"Aadhar Card"} />
                <Button text={"Pan Card"} />
                <Button text={"Driving License"} />
              </div>
              <h5>Upload ID Proof</h5>
            </div>
            <hr style={{ margin: 0 }} />
            <div className="right">
              <img src={front} alt="" />
              <img src={back} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bankingDetails">
        <p>Banking Details</p>
        <div className="bankingDetailsContainer">
          <h4>Enter account details</h4>
          <hr style={{ margin: 0 }} />
          <div className="inputs">
            <Input title={"Account Holder Name"} type={"text"} />
            <Input title={"Account Number"} type={"text"} />
            <Input title={"Re-enter Account Number"} type={"number"} />
            <Input title={"IFSC Code"} type={"email"} />
          </div>
        </div>
      </div>
      <div className="nextButton">
        <Button onClicked={() => setShowModal(true)} text={"Next"} />
      </div>
    </div>
  );
};

export default KYC;
