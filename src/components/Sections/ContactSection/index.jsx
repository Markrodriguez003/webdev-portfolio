// REACT
import { useState, forwardRef } from "react";

// COMPONENTS
import HeaderBorderBox from "../../ui/HeaderBorderBox";
import ContactForm from "../../ui/ContactForm";

// ICONS
import githubIcon from "../../../assets/icons/github-icon-w.png";
import { MdOutlineContactMail } from "react-icons/md";
import { FaRegEnvelope, FaLinkedin } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { PiKeyReturnBold } from "react-icons/pi";

// ASSETS
// IMAGES / GIFS
import alien from "../../../assets/gifs/alien.gif";
import spaceship from "../../../assets/gifs/spaceship.gif";

// COMPONENTS
import fileSaver from "file-saver";

// STYLES / STYLED COMPONENTS
import {
  LeftHeaderColumn,
  RightColumnPanel,
  SectionContainer,
  HeaderDetailsPanel,
} from "../Sections.design";

import {
  ContactUsOuterContainer,
  Satellite,
  AstronautContact,
  SatellightContainer,
  FullContactView,
  MiniContactView,
  MidContactView,
} from "../ContactSection/ContactSection.Design";

import { ModalOuterContainer, ModalExitBtn } from "./ContactSection.Design";

// ? NOTES
// ? https://www.mamboleoo.be/articles/create-your-own-sphere-in-css
// ? https://codepen.io/iamlark/pen/jYzYJg
// ? https://codepen.io/donovanh/pen/kQgMmE

// DOWNLOAD ASSETS
// import vCard from "../../../../public/download/Mark-Rodriguez.vcf";
import resume from "../../../../public/download/Mark Rodriguez - Resume.pdf";

// PDF VIEWER
// ! MOVE TO SCRIPTS ?
function PDFViewer() {
  return (
    <div style={{ backgroundColor: "green", width: "80%", height: "90%" }}>
      <iframe src={resume} width="100%" height="100%" />
    </div>
  );
}

function ContactSectionComp({ props }, ref) {
  const [pdfModal, setPdfModal] = useState(false);

  function pdfModalClick(event) {
    // event.preventDefault();
    setPdfModal(!pdfModal);
  }

  function vCardDownload() {
    fileSaver.saveAs(
      import.meta.env.REACT_APP_CLIENT_URL +
        "../src/assets/download/Mark-Rodriguez.vcf",
      "Mark-Rodriguez.vcf"
    );
  }

  return (
    <div>
      {pdfModal === true ? (
        <ModalOuterContainer id="#contact">
          <PDFViewer />
          <ModalExitBtn onClick={(event) => pdfModalClick(event)}>
            <PiKeyReturnBold style={{ verticalAlign: "middle" }} /> Return
          </ModalExitBtn>
        </ModalOuterContainer>
      ) : (
        <></>
      )}
      <SectionContainer ref={ref}>
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
              Contact Card:{" "}
              <a href="#" onClick={() => vCardDownload()}>
                {" "}
                Download
              </a>
            </p>
            <br />
            <p id="resume-about">
              <LuMenuSquare
                style={{ verticalAlign: "center", paddingRight: "5px" }}
              />
              Resume: <a onClick={(event) => pdfModalClick(event)}>View</a> |{" "}
              <a href={resume} download={resume}>
                Download
              </a>
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
          <FullContactView>
            <ContactUsOuterContainer>
              <ContactForm />
              <SatellightContainer>
                <Satellite />
                <AstronautContact />
              </SatellightContainer>
            </ContactUsOuterContainer>
          </FullContactView>

          {/* <MidContactView>
            <ContactUsOuterContainer>
              <div>
                <Satellite />
              </div>

              <ContactForm />
              <div>
                <AstronautContact />
              </div>
            </ContactUsOuterContainer>
          </MidContactView> */}

          <MiniContactView>
            <ContactUsOuterContainer>
              <ContactForm />
            </ContactUsOuterContainer>
          </MiniContactView>
        </RightColumnPanel>
      </SectionContainer>
    </div>
  );
}

export const ContactSection = forwardRef(ContactSectionComp);

{
  /* <small
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
</small> */
}
