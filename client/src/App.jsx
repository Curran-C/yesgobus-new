import { LandingPage, Payments, KYC, ComingSoon, ContactUs } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kyc/payment" element={<Payments />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
