// REACT
import { useState, forwardRef, useRef } from "react";

// COMPONENTS
import HeaderBorderBox from "../../ui/HeaderBorderBox";
import ContactForm from "../../ui/ContactForm";

// ICONS
import githubIcon from "../../../assets/icons/github-icon-w.png";
import { MdOutlineContactMail } from "react-icons/md";
import { FaRegEnvelope, FaLinkedin } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { PiKeyReturnBold } from "react-icons/pi";

// LIBRARIES
import { useInView } from "react-intersection-observer";
// ASSETS
// IMAGES / GIFS
import alien from "../../../assets/gifs/alien.gif";
import spaceship from "../../../assets/gifs/spaceship.gif";

// COMPONENTS
import fileSaver from "file-saver";
import SpeechBubble from "../../ui/SpeechBubble";

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
  MiniSatellite,
  WifiSignalContainer,
  WifiSignalSymbol,
  SpeechContactBubble,
  SpeechAstronautBubble,
  MiniContactInfoPanel,
} from "../ContactSection/ContactSection.Design";

import { ModalOuterContainer, ModalExitBtn } from "./ContactSection.Design";

// ? NOTES
// ? https://www.mamboleoo.be/articles/create-your-own-sphere-in-css
// ? https://codepen.io/iamlark/pen/jYzYJg
// ? https://codepen.io/donovanh/pen/kQgMmE

// DOWNLOAD ASSETS
// import vCard from "../../../../public/download/Mark-Rodriguez.vcf";
import resume from "../../../../public/download/Mark Rodriguez - Resume.pdf";

// ICONS
import { RiSignalTowerFill } from "react-icons/ri";
import { FaWifi, FaCompass } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

// DATA

// Astronaut dialogue options
const dialogues = [
  "...",
  "..Uh.. Houston... did you receive our message?",
  "..ah! I forgot to fill the form!",
  "..Sending transmission..",
  "...",
  "..Well that was easy...",
  "I hope to hear from you soon!",
  "so...what now?",
  "uhh.. *Clears throat*",
];
const dialoguesSatellite = [
  "...",
  "*00110001*",
  "...",
  "SENDING DATA",
  "...",
  "*00110010*",
  "...",
  "RECEIVING DATA",
  "...",
  "*00110011*",
  "...",
  "<3",
];

// PDF VIEWER
// ! MOVE TO SCRIPTS ?
function PDFViewer() {
  return (
    <div style={{ backgroundColor: "darkgrey", width: "80%", height: "90%" }}>
      <iframe src={resume} width="100%" height="100%" />
    </div>
  );
}

function ContactSectionComp({ props }, refPDF) {
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


  // Intersection Observer for astronaut
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })
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
      <SectionContainer ref={refPDF}>
        <LeftHeaderColumn>
          <MiniSatellite></MiniSatellite>
          {/* <HeaderBorderBox props={{ type: "solar", title: "CONTACT" }} /> */}
          <HeaderBorderBox props={{ type: "tennisBall", title: "CONTACT" }} />
          <HeaderDetailsPanel>
            <p>
              Want to contact me? You can do so by using the contact form or by
              contacting me via email.
            </p>
            <br />
            <p>
              <a href="mailto:markrodriguez003@gmail.com">
                <FaRegEnvelope
                  style={{ verticalAlign: "center", paddingRight: "5px" }}
                />

                Email

              </a>
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
              <CgFileDocument
                style={{ verticalAlign: "center", paddingRight: "5px" }}
              />
              Resume: <a onClick={(event) => pdfModalClick(event)}>View</a> |{" "}
              <a href={resume} download={resume}>
                Download
              </a>
            </p>
            <br />
            <p>
              <a href="www.linkedin.com/in/ModulatorStudios" target="_blank" rel="noreferrer">
                <FaLinkedin
                  style={{ verticalAlign: "center", paddingRight: "5px" }}
                />
                LinkedIn
              </a>
            </p>
            <br />
            <p>
              <a href="https://github.com/Markrodriguez003" target="_blank" rel="noreferrer">
                <img
                  src={githubIcon}
                  width={"20px"}
                  height={"20px"}
                  style={{ paddingRight: "10px" }}
                />
                Github
              </a>
            </p>
            <br />
            <p id="resume-about">

              <a href={'https://www.youtube.com/@modulatorstudios'} target="_blank" rel="noreferrer">
                <FaYoutube
                  style={{ verticalAlign: "center", paddingRight: "5px" }}
                />
                Youtube </a>
            </p>
          </HeaderDetailsPanel>
        </LeftHeaderColumn>

        <RightColumnPanel>
          <FullContactView>
            <ContactUsOuterContainer>
              <ContactForm />

              <SatellightContainer>
                <div className="contact-satellite">
                  <Satellite>
                    <SpeechContactBubble id="satellite-speechbubble">
                      <SpeechBubble
                        speech={dialoguesSatellite}
                        direction={"none"}
                        loop={true}
                        solidBorder={false}
                        msTime={8000}
                        italics={true}
                        visible={true}
                        className="speechbubble-contact"
                      />
                    </SpeechContactBubble>
                    <WifiSignalContainer>
                      <WifiSignalSymbol className="first" />
                      <WifiSignalSymbol className="second" />
                      <WifiSignalSymbol className="third" />
                      <WifiSignalSymbol className="fourth" />
                    </WifiSignalContainer>
                  </Satellite>
                </div>

                <div className="contact-astronaut">
                  <AstronautContact key={"astro-mini-home"} ref={ref}  >
                    <SpeechAstronautBubble>
                      <SpeechBubble
                        speech={dialogues}
                        direction={"top-right"}
                        loop={true}
                        solidBorder={true}
                        msTime={5000}
                        italics={false}
                        visible={true}
                      />
                    </SpeechAstronautBubble>
                  </AstronautContact>
                </div>
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
            <MiniContactInfoPanel>
              <hr /> <br />
              <p id="resume-about">
                <CgFileDocument
                  size={"20px"}
                  style={{ verticalAlign: "center" }}
                />
                {/* Resume:{" "} */}
                <a href={resume} download={resume} style={{ fontWeight: "bold" }}>
                  <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                    {" "}
                    Resume</span>
                </a>
              </p>
              <br />
              <p id="github-about">
                <img
                  src={githubIcon}
                  width={"20px"}
                  height={"20px"}
                  style={{ paddingRight: "2px" }}
                />
                <a
                  href="https://www.github.com/MarkRodriguez003"
                  target="_blank" rel="noreferrer"
                >
                  <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                    {" "}
                    Github</span>
                </a>
              </p>
              <br />
              <p>
                <a href="mailto:markrodriguez003@gmail.com">
                  <FaRegEnvelope
                    style={{ verticalAlign: "center", paddingRight: "5px" }}
                  />
                  <span style={{ fontSize: "16px", fontWeight: "bold" }} >
                    Email: MarkRodriguez003@gmail.com
                  </span>
                </a>
              </p>
              <br />
            </MiniContactInfoPanel>
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
