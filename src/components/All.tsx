import React from "react";
import ProjectReact from "./ProjectReact";
import ProjectJs from "./ProjectJs";
import { Routes, Route } from "react-router-dom";
import projectReact from "../json/projectReact.json";
import projectJsJson from "../json/projectJs.json";
import ProjectCard from "./ProjectCard";
import { ProjectWrap } from "../GlobalStyled";
const All = () => {
  const projectAll = [...projectJsJson, ...projectReact];
  return (
    <ProjectWrap className="projectWrap">
      {projectAll.map((item, index) => (
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
      <Routes>
        <Route path="/All/projectReact" element={<ProjectReact />} />
        <Route path="/All/projectJs" element={<ProjectJs />} />
      </Routes>
    </ProjectWrap>
  );
};

export default All;
