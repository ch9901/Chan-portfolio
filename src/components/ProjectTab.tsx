import React from "react";
import styled from "styled-components";
import { Link, useMatch, Routes, Route } from "react-router-dom";
import All from "../components/All";
import ProjectReact from "../components/ProjectReact";
import ProjectJs from "../components/ProjectJs";
import ExampleReact from "../pages/ExampleReact";
import ExampleAll from "./ExampleAll";

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justift-content: flex-start;
  gap: 0.2rem;
  align-items: center;
  margin-top: 3rem;
`;
const Tab = styled.div<{ $isactive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: gs500;
  font-size: 2rem;
  padding: 0 3rem;
  height: 4rem;
  border: 0.2rem solid #000;
  border-bottom: none;
  background: ${(props) => (props.$isactive ? "#D5F35E" : "#fff")};
  &:first-child {
    border-radius: 1rem 0 0 0;
  }
  &:last-child {
    border-radius: 0 1rem 0 0;
  }
`;
const Divider = styled.div`
  background: #000;
  height: 0.2rem;
  width: calc(100vw - 25.7rem);
`;
interface IProps {
  location: string;
}
const ProjectTab = ({ location }: IProps) => {
  const reactMatch = useMatch(`/${location}/${location}React`);
  const jsMatch = useMatch(`/${location}/${location}Js`);
  const allMatch = useMatch(`${location}/All`);
  const projectMatch = useMatch("/Project");
  const exampleMatch = useMatch("/Example");
  return (
    <>
      <Tabs>
        <Tab
          $isactive={
            allMatch !== null || projectMatch !== null || exampleMatch !== null
          }
        >
          <Link to={"/" + location + "/All"}>All</Link>
        </Tab>
        <Tab $isactive={reactMatch !== null}>
          <Link to={"/" + location + "/" + location + "React"}>React & Ts</Link>
        </Tab>
        <Tab $isactive={jsMatch !== null}>
          <Link to={"/" + location + "/" + location + "Js"}>Js</Link>
        </Tab>
      </Tabs>
      <Divider />
      <Routes>
        <Route path="/project/All" element={<All />} />
        <Route path="/projectAll" element={<All />} />
        <Route path="/projectReact" element={<ProjectReact />} />
        <Route path="/projectJs" element={<ProjectJs />} />
        <Route path="/exampleAll" element={<ExampleAll />} />
        <Route path="/exampleReact" element={<ExampleReact />} />
      </Routes>
    </>
  );
};

export default ProjectTab;
