import createSdk from "api";
import axios from "axios";

const authenticate = async (req, res) => {
  try {
    const headers = {
      'accept': 'application/json',
      'x-api-key': process.env.API_KEY,
      'x-api-secret': process.env.API_SECRET,
      'x-api-version': '1.0',
    };
    const requestData = {};
    axios.post("https://api.sandbox.co.in/authenticate", requestData, { headers })
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(error => {
        res.status(200).send(error.message);
      });

  } catch (err) {
    res.status(500).send(err);
  }
};

const aadhaarKycGenerateOtp = async (req, res) => {
  try {
    const { access_token } = req.body;
    const headers = {
      'Authorization': access_token,
      'accept': 'application/json',
      'content-type': 'application/json',
      'x-api-key': process.env.API_KEY,
      'x-api-version': '1.0',
    };

    const requestData = {
      "aadhaar_number": req.body.aadhaar_number
    };

    axios.post("https://api.sandbox.co.in/kyc/aadhaar/okyc/otp", requestData, { headers })
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(error => {
        res.status(200).send({message: error.message});
      });

  } catch (err) {
    res.status(500).send(err);
  }
}

const aadhaarKycVerifyOtp = async (req, res) => {
  try {
    const { access_token } = req.body
    const headers = {
      'Authorization': access_token,
      'accept': 'application/json',
      'content-type': 'application/json',
      'x-api-key': process.env.API_KEY,
      'x-api-version': '1.0',
    };

    const requestData = {
      "otp": req.body.otp,
      "ref_id": req.body.ref_id
    };

    axios.post("https://api.sandbox.co.in/kyc/aadhaar/okyc/otp/verify", requestData, { headers })
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(error => {
        res.status(200).send({ message: error.message });
      });

  } catch (err) {
    res.status(500).send(err);
  }
}

const panVerification = async (req, res) => {
  try {
    const { access_token, pan } = req.body;
    const headers = {
      'Accept': 'application/json',
      'Authorization': access_token,
      'x-api-key': process.env.API_KEY,
      'x-api-version': '1.0',
    };

    axios.get(
      `https://api.sandbox.co.in/pans/${pan}/verify?consent=y&reason=For%20KYC%20of%20User`,
      { headers }
    )
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(error => {
        res.status(200).send({ message: error.message });
      });

  } catch (err) {
    res.status(500).send(err);
  }
};

const bankAccountVerification = async (req, res) => {
  try {
    const { access_token, ifsc, account_number } = req.body;
    const headers = {
      'Authorization': access_token,
      'x-api-key': process.env.API_KEY,
      'x-api-version': '1.0.0'
    };

    axios.get(`https://api.sandbox.co.in/bank/${ifsc}/accounts/${account_number}/verify`, { headers })
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(error => {
        res.status(200).send({ message: error.message });
      });

  } catch (err) {
    res.status(500).send(err);
  }
};

export {
  authenticate,
  aadhaarKycGenerateOtp,
  aadhaarKycVerifyOtp,
  panVerification,
  bankAccountVerification,
};

