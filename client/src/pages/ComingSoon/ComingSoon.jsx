import { Button, Footer, Navbar } from "../../components";
import "./ComingSoon.scss";
import comingSoonImg from "../../assets/comingSoon/comingSoon.png";

function ComingSoon() {
  return (
    <section className="coming_soon">
      <Navbar />
      <div className="heroImg">
        <img src={comingSoonImg} alt="coming soon" />
      </div>
      <h6>Site under construction</h6>
      <div className="subscribe">
        <span className="input_container">
          <input type="email" name="" id="" placeholder="Enter you email here..."/>
          <Button text={"Subscribe"} />
        </span>
      </div>
      <Footer />
    </section>
  );
}

export default ComingSoon;
