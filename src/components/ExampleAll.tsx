import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProjectWrap } from "../GlobalStyled";
import ProjectCard from "./ProjectCard";
import ExampleReact from "../pages/ExampleReact";
import example from "../json/exampleReact.json";

const ExampleAll = () => {
  const all = [...example];
  return (
    <ProjectWrap className="projectWrap">
      {all.map((item, index) => (
        <div key={index}>
          <ProjectCard
            id={item.id}
            title={item.title}
            img={item.img}
            bigImg={item.bigImg}
            hash={item.hash}
            hostingUrl={item.hostingUrl}
            corePart={item.corePart}
            myPart={item.myPart}
            devStory={item.devStory}
          />
        </div>
      ))}
      <Routes>
        <Route path="/Example/exampleReact" element={<ExampleReact />} />
      </Routes>
    </ProjectWrap>
  );
};

export default ExampleAll;
