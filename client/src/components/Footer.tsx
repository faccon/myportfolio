import { SocialIcon } from "react-social-icons";
import { GITHUB_URL, LINKEDIN, MAILTO, TEL, WHATSAPP_URL } from "../constants";
import { sIconStyle } from "../style";

export function Footer() {
  return (
    <section className="footer">
      <div className="left">
        <SocialIcon
          style={sIconStyle}
          target="_blank"
          rel="noopener noreferrer"
          fgColor="black"
          bgColor="whitesmoke"
          url={LINKEDIN}
        />
        <SocialIcon
          style={sIconStyle}
          target="_blank"
          rel="noopener noreferrer"
          fgColor="black"
          bgColor="whitesmoke"
          url={GITHUB_URL}
        />
        <SocialIcon
          style={sIconStyle}
          target="_blank"
          rel="noopener noreferrer"
          fgColor="black"
          bgColor="whitesmoke"
          url={MAILTO}
        />
        <SocialIcon
          style={sIconStyle}
          fgColor="black"
          target="_blank"
          rel="noopener noreferrer"
          network="whatsapp"
          bgColor="whitesmoke"
          url={WHATSAPP_URL}
        />
        <a href={TEL}>
          <span className="material-icons-outlined">call</span>
        </a>
      </div>
    </section>
  );
}
