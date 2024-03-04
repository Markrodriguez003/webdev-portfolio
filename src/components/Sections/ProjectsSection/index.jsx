import {
  SectionContainer,
  LeftHeaderColumn,
  RightColumnPanel,
  ProjectsUL,
  ProjectItem,
} from "../Sections.design";

// animation design ideas
// https://codepen.io/bramus/pen/wvRqVBm
// https://codepen.io/tyler-chipman/pen/YzxKWMx
// https://codepen.io/indrekpaas/pen/xEmRVd
// https://www.youtube.com/watch?v=Il_GKGFggWY&ab_channel=RobotBobby

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
    true, // SASEO
    false, // NEPTUNES COVE
    false, // OWADI-OWIWI
    false, // ONLOAD
    false, // WAAGWORD
  ]);

  function onClickSelect(key, event) {
    setClick(() => !click);
    setRevealFade(!revealFade);
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

          <nav>
            <ProjectsUL>{listOfProjects}</ProjectsUL>
          </nav>
        </LeftHeaderColumn>
        <RightColumnPanel>
          <ProjectCard
            key={(`Project: `, SlideProject)}
            props={projects[SlideProject]}
            toggle={revealFade}
          />
        </RightColumnPanel>
      </SectionContainer>
    </>
  );
}

export default ProjectsSection;
