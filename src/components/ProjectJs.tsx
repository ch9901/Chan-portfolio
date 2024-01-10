import React from "react";
import { ProjectWrap } from "../GlobalStyled";
import projectJs from "../json/projectJs.json";
import ProjectCard from "./ProjectCard";
const ProjectJs = () => {
  return (
    <ProjectWrap className="projectWrap">
      {projectJs.map((item, index) => (
        <div key={index}>
          <ProjectCard
            id={item.id}
            title={item.title}
            img={item.img}
            bigImg={item.bigImg}
            hash={item.hash}
            hostingUrl={item.hostingUrl}
            figmaUrl={item.figmaUrl}
            corePart={item.corePart}
            myPart={item.myPart}
            devStory={item.devStory}
          />
        </div>
      ))}
    </ProjectWrap>
  );
};

export default ProjectJs;
