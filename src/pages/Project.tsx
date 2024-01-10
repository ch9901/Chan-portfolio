import React from "react";
import Title from "../components/Title";
import ProjectTab from "../components/ProjectTab";
import { useMatch } from "react-router-dom";
import All from "../components/All";
import styled from "styled-components";
const Container = styled.div`
  padding: 5rem 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Project = () => {
  const AllMatch = useMatch("/Project");
  const AllMatch02 = useMatch("/Project/All");
  return (
    <Container>
      <Title
        title={"Projects"}
        desc="각 카드를 클릭하면 해당 프로젝트의 디테일을 보실 수 있습니다. 프로젝트 사이트로 가시려면 URL을 클릭해주세요"
      />
      <ProjectTab location={"Project"} />
      {(AllMatch || AllMatch02) && <All />}
    </Container>
  );
};

export default Project;
