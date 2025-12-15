// STYLES
import {
  BarContainer,
  FutureBarContainer,
} from "./TechnologiesSkillsBar.design";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io5";
import {
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandMysql,
  TbBrandDjango,
} from "react-icons/tb";
import { LiaGit } from "react-icons/lia";
import { DiJqueryLogo, DiLinux } from "react-icons/di";
import { SiNeutralinojs, SiTypescript, SiJest, SiStyledcomponents, SiTailwindcss, SiPostman, SiPrettier, SiBulma } from "react-icons/si";
import { VscCopilot, VscVscode } from "react-icons/vsc";
import { AiFillRobot } from "react-icons/ai";
import {RiNpmjsFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";

import { FaPython, FaWordpress, FaPhp, FaReact, FaChrome, FaBrain, FaRobot, FaBootstrap  } from "react-icons/fa";

export function TechnologiesSkillsBar() {
  return (
    <>
      <BarContainer>
        <div>
          <IoLogoCss3 id={"flex-icon"} />
          <h3>CSS3</h3>
        </div>
        <div>
          <IoLogoJavascript id={"flex-icon"} />
          <h3>JAVASCRIPT</h3>
        </div>
        {/* <div>
          <FaWordpress id={"flex-icon"} />
          <h3>WORDPRESS</h3>
        </div> */}
        <div>
          <FaReact id={"flex-icon"} />
          <h3>REACT</h3>
        </div>
        <div>
          <LiaGit id={"flex-icon"} />
          <h3>GIT</h3>
        </div>
        <div>
          <IoLogoHtml5 id={"flex-icon"} />
          <h3>HTML</h3>
        </div>
        <div>
          <DiJqueryLogo id={"flex-icon"} />
          <h3>JQUERY</h3>
        </div>
        <div>
          <SiTypescript id={"flex-icon"} />
          <h3>TYPESCRIPT</h3>
        </div>
        {/* <div>
          <SiNeutralinojs id={"flex-icon"} />
          <h3>NEUTRALINO</h3>
        </div> */}
        <div>
          <TbBrandMongodb id={"flex-icon"} />
          <h3>MONGODB</h3>
        </div>
        <div>
          <SiNeutralinojs id={"flex-icon"} />
          <h3>EXPRESSJS</h3>
        </div>
      </BarContainer>
    </>
  );
}
export function TechnologiesBar() {
  return (
    <>
      <BarContainer>
        <div>
          <VscVscode id={"flex-icon"} />
          <h3>VSCode</h3>
        </div>
        <div>
          <VscCopilot id={"flex-icon"} />
          <h3>Copilot AI</h3>
        </div>
        <div>
          <FaRobot  id={"flex-icon"} />
          <h3>Claude LLM</h3>
        </div>
        <div>
          <FaBrain id={"flex-icon"} />
          <h3>Chat GPT</h3>
        </div>
        <div>
          <RiNpmjsFill id={"flex-icon"} />
          <h3>NPM</h3>
        </div>
        <div>
          <FaChrome id={"flex-icon"} />
          <h3>Chrome Dev-Tools</h3>
        </div>
        <div>
          <SiPostman id={"flex-icon"} />
          <h3>Postman</h3>
        </div>
        {/* <div>
          <SiPrettier id={"flex-icon"} />
          <h3>SiPrettier</h3>
        </div> */}
        <div>
          <SiStyledcomponents id={"flex-icon"} />
          <h3>Styled Components</h3>
        </div>
        <div>
          <SiTailwindcss id={"flex-icon"} />
          <h3>Tailwind</h3>
        </div>
        <div>
          <FaBootstrap id={"flex-icon"} />
          <h3>Bootstrap</h3>
        </div>
        <div>
          <SiBulma id={"flex-icon"} />
          <h3>Bulma</h3>
        </div>
      </BarContainer>
    </>
  );
}
export function FutureTechSkillsBar() {
  return (
    <>
      <BarContainer>
        <div>
          <DiLinux id={"flex-icon"} />
          <h3>Linux</h3>
        </div>
        <div>
          <TbBrandNextjs id={"flex-icon"} />
          <h3>NextJS</h3>
        </div>
        <div>
          <TbBrandMysql id={"flex-icon"} />
          <h3>MYSQL</h3>
        </div>

        <div>
          <SiJest id={"flex-icon"} />
          <h3>JEST</h3>
        </div>
        <div>
          <GrGraphQl id={"flex-icon"} />
          <h3>GRAPHQL</h3>
        </div>
        <div>
          <AiFillRobot id={"flex-icon"} />
          <h3>AI</h3>
        </div>
        <div>
          <FaPython id={"flex-icon"} />
          <h3>PYTHON</h3>
        </div>
        <div>
          <TbBrandDjango id={"flex-icon"} />
          <h3>DJANGO</h3>
        </div>
      </BarContainer>
    </>
  );
}
