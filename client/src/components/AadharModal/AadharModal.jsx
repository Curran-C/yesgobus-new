import Button from "../Button/Button";
import Input from "../Input/Input";
import "./AadharModal.scss";
import axios from "axios";

const AadharModal = ({ onCancel, typeOfDocument, user, setUser }) => {
  let authenticateConfig = {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-api-secret": "secret_live_0t1JqBUOBcMcOoB3dlmDbno4FPT5ezOc",
      "x-api-key": "key_live_MJ9gDUtmmvuOPurEsZbPvamtObI4ZRYr",
      "x-api-version": "1.0",
    },
  };

  let autherizaionConfig = {
    headers: {},
  };

  const sendOtp = async () => {
    console.log(user?.aadhar);
    try {
      // *authenticate
      const authTokenOne = await axios.post(
        "https://api.sandbox.co.in/authenticate",
        {
          aadhaar_number: user?.aadhaar,
        },
        authenticateConfig
      );
      console.log(authTokenOne);
      const authTokenTwo = await axios.post(
        `https://api.sandbox.co.in/authorize?request_token=${authTokenOne?.data.access_token}`,
        { dat: "dat" },
        {
          headers: {
            accept: "application/json",
            "x-api-key": "key_live_MJ9gDUtmmvuOPurEsZbPvamtObI4ZRYr",
            "x-api-version": "1.0",
          },
        }
      );
      console.log(authTokenTwo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="SignModal">
      <div className="blackbg" onClick={() => onCancel(false)}></div>
      <div className="modalcontainer">
        <div className="modalwrapper">
          <div className="inputs">
            <Input
              type={"number"}
              placeholder={`Enter ${typeOfDocument} number`}
              onChanged={setUser}
              givenName={`${typeOfDocument?.toLowerCase().split(" ").join("")}`}
            />
            <Button onClicked={sendOtp} text={"Send OTP"} />
          </div>
          <div className="inputs">
            <Input type={"number"} placeholder={"OTP"} />
            <Button text={"Verify"} />
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
