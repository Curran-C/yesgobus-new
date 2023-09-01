import { Navbar } from "../../components";
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
    </section>
  );
}

export default ComingSoon;
