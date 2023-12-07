import HeaderBorderBox from "../../ui/HeaderBorderBox";
import ContactForm from "../../ContactForm";
import { FaRegEnvelope, FaLinkedin } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import githubIcon from "../../../assets/icons/github-icon-w.png";
import {
  LeftHeaderColumn,
  RightColumnPanel,
  SectionContainer,
  Planet,
  PlanetContainer
} from "../Sections.design";

// ? NOTES
// ? https://www.mamboleoo.be/articles/create-your-own-sphere-in-css
// ? https://codepen.io/iamlark/pen/jYzYJg
// ? https://codepen.io/donovanh/pen/kQgMmE

function ContactSection() {
  return (
    <>
      <SectionContainer>
        <LeftHeaderColumn>
          <HeaderBorderBox props={{ type: "solar", title: "CONTACT" }} />

          <p>
            Want to contact me? You can do so by using the contact form or by
            contacting me via email.
          </p>
          <br />
          <p>
            <FaRegEnvelope
              style={{ verticalAlign: "center", paddingRight: "5px" }}
            />
            Email: MarkRodriguez003@gmail.com
          </p>
          <br />
          <p>
            <MdOutlineContactMail
              style={{ verticalAlign: "center", paddingRight: "5px" }}
            />
            Contact Card: <a href="#"> Download</a>
          </p>
          <br />
          <p>
            <FaLinkedin
              style={{ verticalAlign: "center", paddingRight: "5px" }}
            />
            LinkedIn: linkedIn.com/MarkRodriguez003
          </p>
          <br />
          <p>
            <img
              src={githubIcon}
              width={"20px"}
              height={"20px"}
              style={{ paddingRight: "10px" }}
            />
            Github: github.com/MarkRodriguez003
          </p>
        </LeftHeaderColumn>
        <RightColumnPanel>
          <ContactForm />
        </RightColumnPanel>
      </SectionContainer>
      <small
        style={{
          color: "rgba(255,255,255,0.2)",
          textAlign: "center",
          fontFamily: "body",
          position: "absolute",
          bottom: "0",
          paddingBottom: "8px",
        }}
      >
        Mark Rodriguez @2023{" "}
      </small>
      {/* <Planet /> */}

      {/* other image */}
      <PlanetContainer>
        <Planet>
          <span className="shadow"></span>
        </Planet>
      </PlanetContainer>
    </>
  );
}

export default ContactSection;
