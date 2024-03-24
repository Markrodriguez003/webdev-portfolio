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

import { ModalOuterContainer } from "./ContactSection.Design";

// LIBRARIES
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// PDF STYLE
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// ICONS
import { LuMenuSquare } from "react-icons/lu";
// ? NOTES
// ? https://www.mamboleoo.be/articles/create-your-own-sphere-in-css
// ? https://codepen.io/iamlark/pen/jYzYJg
// ? https://codepen.io/donovanh/pen/kQgMmE

import { useState } from "react";

// DOWNLOAD ASSETS
// import vCard from "../../../../public/download/vcard.vcf";
import resume from "../../../../public/download/Mark Rodriguez - Resume.pdf";

// PDF VIEWER
function PDFViewer() {
  return (
    <div style={{backgroundColor:"green"}}>
      {/* <embed src={resume} width="100%" height="500px" /> */}
    </div>
  );
}

// function PDFModal(){
//   return(

//   )
// }

function ContactSection() {
  return (
    <>
      <ModalOuterContainer>
        <PDFViewer />
      </ModalOuterContainer>
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
              <a href="#" download rel="external" target="_blank">
                {" "}
                Download
              </a>
            </p>
            <br />
            <p id="resume-about">
              <LuMenuSquare
                style={{ verticalAlign: "center", paddingRight: "5px" }}
              />
              Resume: <a href="#">View</a> |{" "}
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
