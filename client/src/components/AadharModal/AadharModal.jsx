import Button from "../Button/Button";
import Input from "../Input/Input";
import "./AadharModal.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const AadharModal = ({ onCancel, typeOfDocument, user, setUser }) => {
  const [refId, setRefId] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const authenticateAndGetToken = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/kyc/authenticate`);
        setAccessToken(response.data.access_token);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    authenticateAndGetToken();
  }, []);

  //send aadhaar otp
  const sendOtp = async () => {
    try {
      const requestData = {
        aadhaar_number: user.aadhar, 
        access_token: accessToken, 
      };
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/kyc/aadhaar/generateOtp`, requestData);
      if (response.data?.data?.message === "OTP sent successfully") {
        setRefId(response.data.data.ref_id);
        alert(response.data.data.message);
      } else {
        alert("Invalid");
      }
    } catch (error) {
      console.error("Error while Generating aadhaar otp:", error);
    }
  };

  //verify aadhar otp
  const verifyOtp = async () => {
    try {
      const requestData = {
        otp: user.otp,
        ref_id: refId,
        access_token: accessToken, 
      };
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/kyc/aadhaar/verifyOtp`, requestData);
      if (response.data?.data?.status === 'VALID') {
        alert ("Verified Successfully");
      } else {
        alert("Invalid");
      }
    } catch (err) {
      console.error("Error while verifying adaar otp:", err);
    }
  };

  //verify pan
  const verifyPan = async () => {
    try {
      const requestData = {
        pan: user.pancard,
        access_token: accessToken, 
      };
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/kyc/pan/verify`, requestData);
      if (
        response.data?.data?.status === 'VALID' &&
        response.data?.data?.full_name.toLowerCase().includes(user.firstName.toLowerCase())
        ) {
        alert ("Verified Successfully");
      } else {
        alert("Invalid");
      }
    } catch (err) {
      console.error("Error while verifying pan:", err);
    }
  }

  return (
    <div className="SignModal">
      <div className="blackbg" onClick={() => onCancel(false)}></div>
      <div className="modalcontainer">
        <div className="modalwrapper">
          <div className="inputs">
            <Input
              type={"text"}
              placeholder={`Enter ${typeOfDocument} number`}
              onChanged={setUser}
              givenName={`${typeOfDocument?.toLowerCase().split(" ").join("")}`}
            />
            <Button onClicked={sendOtp} text={"Send OTP"} />
          </div>
          <div className="inputs">
            <Input type={"number"} placeholder={"OTP"} onChanged={setUser} givenName={"otp"}/>
            <Button onClicked={verifyOtp} text={"Verify"} />
          </div>
          <div className="buttons">
            <Button text={"Cancel"} onClicked={() => onCancel(false)} />
            <Button text={"Submit"} onClicked={() => console.log(user)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadharModal;
