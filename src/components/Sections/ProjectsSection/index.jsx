import {
  SectionContainer,
  LeftHeaderColumn,
  RightColumnPanel,
} from "../Sections.design";

import AnimatedHeader from "../../ui/AnimatedHeader";
import HeaderBorderBox from "../../ui/HeaderBorderBox";
import ProjectCard from "../../ui/ProjectCard";

// TEST DATA

let test = {
  title: "SASEO",
  subHeader: "Book suggestion & Organization site",
  content: ` Are you having a hard time finding a book? Well Saseo can help
    you! Saseo offers users the ability to be suggested books by
    subject or at random! Users will also have the ability to search
    for more information on their favorite authors, as well as find
    books via ISBN. In addition, users will be able to create their
    own accounts and suggest reading lists to your friends and
    families.`,
  technologies: ["ReactJS", "MongoDB", "Axios", "OpenLibrary", "Express"],
  techniques: [
    "Form Validation & submission",
    "Fetching data via multiple APIs (OpenLibrary & NY Times) using Axios, ",
    "Use of ReactJS hooks such as:  useMemo, useContext, useState, useReducer & useCallback",
    "Storing & retrieving site cookies",
    "User account creation & loading",
  ],
  youtube: "https://www.youtube.com/",
  github: "https://www.github.com",
  site: "https://www.nhl.com",
};

function ProjectsSection() {
  return (
    <>
      <SectionContainer>
        <LeftHeaderColumn>
          <HeaderBorderBox props={{ type: "waves", title: "PROJECTS" }} />
          <p>
            Here are some of my projects. I have others in the chamber as well
            so check back to see any updates!
          </p>
          <br />
          <br />
          <br />
          <ul
            style={{
              color: "white",
              textDecoration: "none",
              listStyle: "none",
              fontSize: "40px",
              fontFamily: "body",
              fontWeight: "bold",
              paddingTop: "0px",
              textAlign: "start",
            }}
          >
            <li>
              <AnimatedHeader>SASEO</AnimatedHeader>
            </li>
            <li>
              <AnimatedHeader>NEPTUNES COVE</AnimatedHeader>
            </li>
            <li>
              <AnimatedHeader>OWADI-OWIWI</AnimatedHeader>
            </li>
            <li>
              <AnimatedHeader>ONLOAD</AnimatedHeader>
            </li>
            <li>
              <AnimatedHeader>WAAGWORD</AnimatedHeader>
            </li>
          </ul>
        </LeftHeaderColumn>
        <RightColumnPanel>
          <ProjectCard props={test} />
        </RightColumnPanel>
      </SectionContainer>
    </>
  );
}

export default ProjectsSection;
