// STYLING / STYLED COMPONENTS
import {
    ProjectsUL,
    ProjectItem,
    MaxProjectView,
    MinProjectView,
} from "./CommercialSection.design";

import {
    SectionContainer,
    LeftHeaderColumn,
    RightColumnPanel,
    HeaderDetailsPanel,
} from "../Sections.design";



//REACT
import { useState, useRef, useEffect, forwardRef } from "react";

// COMPONENTS
import HeaderBorderBox from "../../ui/HeaderBorderBox";
import { FullProjectCard, MiniProjectCard } from "../../ui/ProjectCard";
import { commercialProjects } from "../../../../data/businessProjectContent";


function CommercialSectionComp({ props }, ref) {
    const [SlideProject, setSlideProject] = useState(0);
    const [click, setClick] = useState(false);
    const [update, setUpdate] = useState(false);
    const [revealFade, setRevealFade] = useState(false);
    const [projectSelect, setProjectSelect] = useState([
        false, // BA EXOTICS
        true, // GALLO OCHO
        false, // HBJO SITE

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
    const listOfProjects = commercialProjects.map((project) => {
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
            <SectionContainer id="#commercial-projects">
                <LeftHeaderColumn>
                    <HeaderBorderBox props={{ type: "ocean", title: "COMMERCIAL" }} />
                    <HeaderDetailsPanel>
                        <p>
                            Nothing better than working on a project that has a direct impact on some businesses. <br />
                            Here are a few examples of my recent work:
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
                            props={commercialProjects[SlideProject]}
                            toggle={revealFade}
                        />
                    </MaxProjectView>
                    <MinProjectView>
                        {commercialProjects.map((project, count) => {
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

export const CommercialSection = forwardRef(CommercialSectionComp);
