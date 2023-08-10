import { LandingPage, Payments, KYC } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kyc/payment" element={<Payments />} />
        <Route path="/kyc" element={<KYC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
