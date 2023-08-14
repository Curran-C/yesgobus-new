import createSdk from "api";

const apiKey = "@sandbox-docs/v2.0#axga842wkycr2fnc";
const sdk = createSdk(apiKey);

const authenticate = async (req, res) => {
  try {
   const res = await axios.post()
    
  } catch (err) {
    res.status(300).send(err);
  }
};

export { authenticate };
