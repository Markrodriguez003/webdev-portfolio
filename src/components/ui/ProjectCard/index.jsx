/* eslint-disable react/prop-types */
import { Card, CardHeader, CardBody, CardFooter } from "./ProjectCard.design";
import Accordion from "../Accordion";
import SiteButton from "../SiteButton";
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
          <br />
          <CardFooter>
            <SiteButton
              url="https://www.youtube.com"
              styling="youtube"
              title="Youtube"
              icon={<IoLogoYoutube />}
            />
            <SiteButton
              url="https://www.github.com"
              styling="github"
              title="Github"
              icon={<BsGithub />}
            />
            <SiteButton
              url="https://www.nhl.com"
              styling="website"
              title="Website"
              icon={<BsGlobe />}
            />
            <SiteButton
              url="https://www.nhl.com"
              title="Website"
              icon={<BsGlobe />}
            />
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default ProjectCard;
