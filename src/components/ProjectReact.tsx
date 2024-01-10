import React, { useState } from "react";
import styled from "styled-components";
import { ProjectWrap } from "../GlobalStyled";
import ProjectCard from "./ProjectCard";
import projectReact from "../json/projectReact.json";

const ProjectReact = () => {
  return (
    <ProjectWrap className="projectWrap">
      {projectReact.map((item, index) => (
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

export default ProjectReact;
