import HeaderBorderBox from "../../ui/HeaderBorderBox";
import ContactForm from "../../ui/ContactForm";
import { FaRegEnvelope, FaLinkedin } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import githubIcon from "../../../assets/icons/github-icon-w.png";
import fileSaver from "file-saver";

import {
  LeftHeaderColumn,
  RightColumnPanel,
  SectionContainer,
  HeaderDetailsPanel,
} from "../Sections.design";

import { ModalOuterContainer, ModalExitBtn } from "./ContactSection.Design";

// ICONS
import { LuMenuSquare } from "react-icons/lu";
import { PiKeyReturnBold } from "react-icons/pi";
// ? NOTES
// ? https://www.mamboleoo.be/articles/create-your-own-sphere-in-css
// ? https://codepen.io/iamlark/pen/jYzYJg
// ? https://codepen.io/donovanh/pen/kQgMmE

import { useState } from "react";

// DOWNLOAD ASSETS
// import vCard from "../../../../public/download/Mark-Rodriguez.vcf";
import resume from "../../../../public/download/Mark Rodriguez - Resume.pdf";

// PDF VIEWER
function PDFViewer() {
  return (
    <div style={{ backgroundColor: "green", width: "80%", height: "90%" }}>
      <iframe src={resume} width="100%" height="100%" />
    </div>
  );
}

function ContactSection() {
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
    <>
      {pdfModal === true ? (
        <ModalOuterContainer>
          <PDFViewer />
          <ModalExitBtn onClick={(event) => pdfModalClick(event)}>
            <PiKeyReturnBold style={{ verticalAlign: "middle" }} /> Return
          </ModalExitBtn>
        </ModalOuterContainer>
      ) : (
        <></>
      )}
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
