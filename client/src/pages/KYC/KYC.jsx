import { Navigate, useNavigate } from "react-router-dom";
import { back, front } from "../../assets/KYC";
import axios from "axios";
import {
  AadharModal,
  Button,
  Input,
  Navbar,
  SignModal,
} from "../../components";
import "./KYC.scss";
import { useState, useEffect } from "react";

const KYC = () => {
  const navigate = useNavigate();

  // *modals
  const [showModal, setShowModal] = useState(false);
  const [showAadharModal, setShowAadharModal] = useState(false);
  const [showPancardModal, setShowPancardModal] = useState(false);
  const [showDLModal, setShowDLModal] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  // *states
  const [user, setUser] = useState({});
  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/driver/signup`,
        user
      );
      navigate("/kyc/payment");
    } catch (error) {
      alert("Something went wrong");
      console.error("Error registering user:", error);
    }
  };

  useEffect(() => {
    const authenticateAndGetToken = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/kyc/authenticate`
        );
        setAccessToken(response.data.access_token);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    authenticateAndGetToken();
  }, []);

  const verifyBank = async () => {
    try {
      const requestData = {
        account_number: user.bankAccNum,
        ifsc: user.ifsc,
        access_token: accessToken,
      };
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/kyc/bank/verify`,
        requestData
      );
      if (
        response.data?.data?.message ===
          "Bank Account details verified successfully." &&
        response.data?.data?.name_at_bank
          .toLowerCase()
          .includes(user.accHolderName.toLowerCase())
      ) {
        alert("Account verified");
      } else {
        alert("Invalid");
      }
    } catch (err) {
      console.error("Error while verifying bank details:", err);
    }
  };
  return (
    <div className="KYC">
      <Navbar />
      {showModal && <SignModal onCancel={setShowModal} />}
      {showAadharModal && (
        <AadharModal
          user={user}
          setUser={setUser}
          typeOfDocument={"Aadhar"}
          onCancel={setShowAadharModal}
        />
      )}
      {showPancardModal && (
        <AadharModal
          user={user}
          setUser={setUser}
          typeOfDocument={"Pancard"}
          onCancel={setShowPancardModal}
        />
      )}
      {/* {showDLModal && (
        <AadharModal
          user={user}
          setUser={setUser}
          typeOfDocument={"Driving License"}
          onCancel={setShowDLModal}
        />
      )} */}
      <div className="details">
        <h1>Complete KYC</h1>
        <p>Personal Details</p>
        <div className="detailsContainer">
          <h4>Enter your details</h4>
          <hr style={{ margin: 0 }} />
          <div className="inputs">
            <Input
              onChanged={setUser}
              givenName={"firstName"}
              title={"First Name"}
              type={"text"}
            />
            <Input
              onChanged={setUser}
              givenName={"lastName"}
              title={"Last Name"}
              type={"text"}
            />
            <Input
              onChanged={setUser}
              givenName={"phNum"}
              title={"Mobile"}
              type={"number"}
            />
            <Input
              onChanged={setUser}
              givenName={"email"}
              title={"Email"}
              type={"email"}
            />
            <Input
              onChanged={setUser}
              givenName={"password"}
              title={"Password"}
              type={"password"}
            />
            <Input
              onChanged={setUser}
              givenName={"pincode"}
              title={"Pin Code"}
              type={"number"}
            />
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
                <Button
                  onClicked={() => setShowAadharModal(true)}
                  text={"Aadhar Card"}
                />
                <Button
                  onClicked={() => setShowPancardModal(true)}
                  text={"Pan Card"}
                />
                {/* <Button
                  onClicked={() => setShowDLModal(true)}
                  text={"Driving License"}
                /> */}
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
            <Input
              onChanged={setUser}
              givenName={"accHolderName"}
              title={"Account Holder Name"}
              type={"text"}
            />
            <Input
              onChanged={setUser}
              givenName={"bankAccNum"}
              title={"Account Number"}
              type={"number"}
            />
            <Input
              onChanged={setUser}
              title={"Re-enter Account Number"}
              type={"number"}
            />
            <Input
              onChanged={setUser}
              givenName={"ifsc"}
              title={"IFSC Code"}
              type={"text"}
            />
          </div>
          <Button onClicked={verifyBank} text={"Verify"} />
        </div>
      </div>
      <div className="nextButton">
        <Button onClicked={handleRegister} text={"Next"} />
      </div>
    </div>
  );
};

export default KYC;
