// STYLES
import {
  BarContainer,
  FutureBarContainer,
} from "./TechnologiesSkillsBar.design";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { TbBrandMongodb, TbBrandNextjs, TbBrandMysql, TbBrandDjango } from "react-icons/tb";
import { LiaGit } from "react-icons/lia";
import { DiJqueryLogo } from "react-icons/di";
import { SiNeutralinojs, SiTypescript, SiJest } from "react-icons/si";
import { AiFillRobot } from "react-icons/ai";
import { FaPython } from "react-icons/fa";
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
        <div>
          <SiReact id={"flex-icon"} />
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
          <SiNeutralinojs id={"flex-icon"} />
          <h3>NEUTRALINO</h3>
        </div>
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
export function FutureTechSkillsBar() {
  return (
    <>
      <BarContainer>
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
          <AiFillRobot id={"flex-icon"} />
          <h3>AI</h3>
        </div>
        <div>
          <SiTypescript id={"flex-icon"} />
          <h3>TYPESCRIPT</h3>
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
