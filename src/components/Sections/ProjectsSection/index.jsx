import {
  SectionContainer,
  LeftHeaderColumn,
  RightColumnPanel,
  ProjectsUL,
  ProjectItem,
} from "../Sections.design";

import { useState, useRef, useEffect } from "react";
import AnimatedHeader from "../../ui/AnimatedHeader";
import HeaderBorderBox from "../../ui/HeaderBorderBox";
import ProjectCard from "../../ui/ProjectCard";
import { projects } from "../../../../data/projectContent";

function ProjectsSection() {
  const [SlideProject, setSlideProject] = useState(0);
  const [click, setClick] = useState(false);
  const [update, setUpdate] = useState(false);
  const [revealFade, setRevealFade] = useState(false);
  const [projectSelect, setProjectSelect] = useState([
    false, // SASEO
    false, // NEPTUNES COVE
    false, // OWADI-OWIWI
    false, // ONLOAD
    false, // WAAGWORD
  ]);

  function onClickSelect(key, event) {
    setClick(() => !click);
    setRevealFade(() => !revealFade);
    setUpdate(!update);
    let placeholderArr = projectSelect.map(
      (element, index, arr) => (arr[index] = false)
    );
    let updatedArr = [...placeholderArr];
    updatedArr[key] = !projectSelect[key];
    setSlideProject(() => key);
    setProjectSelect(() => updatedArr);
  }

  useEffect(() => {
    console.log("Arry:", projectSelect);
  }, [update]);

  // Creates list of Projects List Items
  const listOfProjects = projects.map((project) => {
    return (
      <ProjectItem
        key={project.key}
        data-key={project.title}
        style={{ fontSize: "38px", textTransform: "uppercase" }}
        onClick={(event) => onClickSelect(project.key, event)}
        // eslint-disable-next-line react/no-unknown-property
        toggle={revealFade}
        selected={projectSelect[project.key]}
      >
        {project.title}
      </ProjectItem>
    );
  });

  return (
    <>
      <SectionContainer>
        <LeftHeaderColumn>
          <HeaderBorderBox props={{ type: "boxes", title: "PROJECTS" }} />
          <p>
            Here are some of my projects. I have others in the chamber as well
            so check back to see any updates!
          </p>
          <br />
          <br />
          <br />
          <span
            style={{
              color: "white",
              backgroundColor: "white",
              fontSize: "1px",
              marginBottom: "8px",
              marginLeft: "40px",
              marginRight: "40px",
            }}
          >
            _
          </span>
          <nav>
            <ProjectsUL>{listOfProjects}</ProjectsUL>
          </nav>
        </LeftHeaderColumn>
        <RightColumnPanel>
          <ProjectCard props={projects[SlideProject]} />
        </RightColumnPanel>
      </SectionContainer>
    </>
  );
}

export default ProjectsSection;
