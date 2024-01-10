import React from "react";
import { ProjectWrap } from "../GlobalStyled";
import ProjectCard from "../components/ProjectCard";
import exampleReact from "../json/exampleReact.json";

const ExampleReact = () => {
  return (
    <ProjectWrap>
      {exampleReact.map((item, index) => (
        <div key={index}>
          <ProjectCard
            id={item.id}
            title={item.title}
            img={item.img}
            hash={item.hash}
            hostingUrl={item.hostingUrl}
            corePart={item.corePart}
            myPart={item.myPart}
            devStory={item.devStory}
          />
        </div>
      ))}
    </ProjectWrap>
  );
};

export default ExampleReact;
