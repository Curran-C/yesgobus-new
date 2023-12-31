import {
  fbdark,
  instagramdark,
  linkedindark,
  twitterdark,
} from "../../assets/footer";
import AboveFooterImages from "../AboveFooterImages/AboveFooterImages";
import Button from "../Button/Button";
import FooterLinks from "../FooterLinks/FooterLinks";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <p>
          Where every seat is a window seat: Join us for a hassle-free,
          comfortable, and convenient bus booking experience.
        </p>

        <FooterLinks title={"General"} links={["About Us", "Pricing"]} />
        <FooterLinks
          title={"Policies"}
          links={[
            "Security safeguards",
            "Terms of service",
            "Privacy",
            "Accessibility",
          ]}
        />
        <AboveFooterImages
          title={"Get In Touch"}
          subtitle={
            "Follow us on social media and stay updated with the latest information about our services"
          }
          images={[fbdark, instagramdark, twitterdark, linkedindark]}
        />

        {/* <div className="subscribe">
          <AboveFooterImages
            title={"Subscribe to our yesgobus"}
            subtitle={"Subscribe to our yesgobus and get more updates"}
          />
          <form className="input">
            <input type="email" name="" id="" />
            <Button text={"Join Now"} />
          </form>
        </div> */}
      </div>
      <p className="rights">2023 - All right reserved</p>
    </div>
  );
};

export default Footer;
