import HeaderBorderBox from "../../ui/HeaderBorderBox";
import ContactForm from "../../ui/ContactForm";
import { FaRegEnvelope, FaLinkedin } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import githubIcon from "../../../assets/icons/github-icon-w.png";
import {
  LeftHeaderColumn,
  RightColumnPanel,
  SectionContainer,
  HeaderDetailsPanel,
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
          <HeaderDetailsPanel>
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
          </HeaderDetailsPanel>
        </LeftHeaderColumn>

        <RightColumnPanel>
          <ContactForm />
          {/* <small
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
      </small> */}
        </RightColumnPanel>
      </SectionContainer>
    </>
  );
}

export default ContactSection;
