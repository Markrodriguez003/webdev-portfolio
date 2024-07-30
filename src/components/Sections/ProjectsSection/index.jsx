// STYLING / STYLED COMPONENTS
import {
  ProjectsUL,
  ProjectItem,
  MaxProjectView,
  MinProjectView,
} from "./ProjectsSection.design";

import {
  SectionContainer,
  LeftHeaderColumn,
  RightColumnPanel,
  HeaderDetailsPanel,
} from "../Sections.design";

// animation design ideas
// https://codepen.io/bramus/pen/wvRqVBm
// https://codepen.io/tyler-chipman/pen/YzxKWMx
// https://codepen.io/indrekpaas/pen/xEmRVd
// https://www.youtube.com/watch?v=Il_GKGFggWY&ab_channel=RobotBobby

//REACT
import { useState, useRef, useEffect, forwardRef } from "react";

// COMPONENTS
import HeaderBorderBox from "../../ui/HeaderBorderBox";
import { FullProjectCard, MiniProjectCard } from "../../ui/ProjectCard";
import { projects } from "../../../../data/projectContent";

function ProjectsSectionComp({ props }, ref) {
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

  // handles project click
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
    <div ref={ref}>
      <SectionContainer id="#projects">
        <LeftHeaderColumn>
          <HeaderBorderBox props={{ type: "boxes", title: "PROJECTS" }} />
          <HeaderDetailsPanel>
            <p>
              Here are some of my projects. I have others in loading dock as well
              so check back to see any updates!
            </p>
            <br />
            <br />
            <br />

            <nav>
              <ProjectsUL>{listOfProjects}</ProjectsUL>
            </nav>
          </HeaderDetailsPanel>
        </LeftHeaderColumn>
        <RightColumnPanel>
          <MaxProjectView>
            <FullProjectCard
              key={(`Project: `, SlideProject)}
              props={projects[SlideProject]}
              toggle={revealFade}
            />
          </MaxProjectView>
          <MinProjectView>
            {projects.map((project, count) => {
              return (
                <>
                  <MiniProjectCard
                    key={(`Project-mini: `, project.title)}
                    props={project}
                    toggle={revealFade}
                  />
                  <br />
                  <br />
                </>
              );
            })}
          </MinProjectView>
        </RightColumnPanel>
      </SectionContainer>
    </div>
  );
}

export const ProjectsSection = forwardRef(ProjectsSectionComp);
