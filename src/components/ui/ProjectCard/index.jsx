/* eslint-disable react/prop-types */
import { Card, CardHeader, CardBody, CardFooter } from "./ProjectCard.design";
import Accordion from "../Accordion";
// ICONS
import { IoLogoYoutube } from "react-icons/io5";
import { BsGithub, BsGlobe } from "react-icons/bs";
function ProjectCard({ props }) {
  //   function buttonClick(e) {
  //     e.preventDefault();
  //     return {};
  //   }

  const {
    title,
    subHeader,
    content,
    youtube,
    github,
    website,
    technologies,
    techniques,
  } = props;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Card>
          <CardHeader>
            <h2>{title}</h2>
            <small> {subHeader}</small>
          </CardHeader>
          <CardBody>
            <section>
              <p>{content}</p>
            </section>
            <br />
            <Accordion props={props} />
          </CardBody>
          <CardFooter>
            <a href={youtube}>
              <button className="youtube">
                <span>
                  <IoLogoYoutube />
                </span>
                Youtube
              </button>
            </a>
            <a href={github}>
              <button className="github">
                <span>
                  <BsGithub />
                </span>
                Github
              </button>
            </a>
            <a href={website}>
              <button className="website">
                <span>
                  <BsGlobe />
                </span>
                Site
              </button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default ProjectCard;
