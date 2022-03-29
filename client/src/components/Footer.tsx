import { SocialIcon } from "react-social-icons";
import { sIconStyle } from "../style";

export function Footer() {
  return (
    <section className="footer">
      <div className="left">
        <SocialIcon
          style={sIconStyle}
          fgColor="black"
          bgColor="whitesmoke"
          url="https://www.linkedin.com/in/adeniyi-babatunde-88107a1b3/"
        />
        <SocialIcon
          style={sIconStyle}
          fgColor="black"
          bgColor="whitesmoke"
          url="https://github.com/faccon"
        />
        <SocialIcon
          style={sIconStyle}
          fgColor="black"
          network="whatsapp"
          bgColor="whitesmoke"
          url="https://api.whatsapp.com/send?phone=4915218168917"
        />
        <a href="tel:+4915218168917">
          <span className="material-icons-outlined">call</span>
        </a>
      </div>
    </section>
  );
}
