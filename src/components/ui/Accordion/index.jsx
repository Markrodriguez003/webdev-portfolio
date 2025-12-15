/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdArrowDropup,
} from "react-icons/io";
import { AccordionContainer, AccordionPanel } from "./Accordion.design";

export function AccordionPanels(props) {
  const [togglePanel, setTogglePanel] = useState(false);

  function handleClick() {
    setTogglePanel(!togglePanel);
  }
  // console.log(`props`, props);
  return (
    <AccordionPanel $toggle={togglePanel}>
      <h4 onClick={handleClick}>
        {props.children}
        {togglePanel ? (
          <IoMdArrowDropup style={{ verticalAlign: "bottom" }} />
        ) : (
          <IoMdArrowDropdown style={{ verticalAlign: "bottom" }} />
        )}
        {/* <IoMdArrowDropdown style={{ verticalAlign: "bottom" }} />{" "} */}
      </h4>
      <section style={{ background: "transparent" }}>{props.content}</section>
    </AccordionPanel>
  );
}

function Accordion(props) {
  // const accordionPanelHeaders = ["Programming Highlights:"];
  return (
    <AccordionContainer>
      {/* {accordionPanelHeaders.map((item, index) => { */}
      {/* return ( */}
      <AccordionPanels
        key={`${props.header} - ${props.header}`}
        content={props.children}
      >
        {props.header}
      </AccordionPanels>
      {/* ); */}
      {/* })} */}
    </AccordionContainer>
  );
}

export default Accordion;
