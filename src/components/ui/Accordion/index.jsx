/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { AccordionContainer, AccordionPanel } from "./Accordion.design";

export function AccordionPanels(props) {
  const [togglePanel, setTogglePanel] = useState(false);

  function handleClick() {
    setTogglePanel(!togglePanel);
  }
  // console.log(`props`, props);
  return (
    <AccordionPanel onClick={handleClick} $toggle={togglePanel}>
      <h4>
        <IoMdArrowDropright style={{ verticalAlign: "bottom" }} />{" "}
        {props.children}
      </h4>
      <section>{props.content}</section>
    </AccordionPanel>
  );
}

function Accordion(props) {
  const accordionPanelHeaders = ["Technologies used:", "Techniques used:"];
  return (
    <AccordionContainer>
      {accordionPanelHeaders.map((item, index) => {
        return (
          <AccordionPanels key={`${item} - ${index}`} props={props}>
            {item}
          </AccordionPanels>
        );
      })}
    </AccordionContainer>
  );
}

export default Accordion;
