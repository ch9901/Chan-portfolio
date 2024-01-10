import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { Container } from "../GlobalStyled";
import ProjectTab from "../components/ProjectTab";
import ExampleAll from "../components/ExampleAll";
import { useMatch } from "react-router-dom";

const Example = () => {
  const exMatch = useMatch("/Example");
  const exMatch01 = useMatch("/Example/All");
  return (
    <Container>
      <Title
        title={"Example"}
        desc={
          "각 카드를 클릭하면 해당 프로젝트의 디테일을 보실 수 있습니다. 프로젝트 사이트로 가시려면 URL을 클릭해주세요"
        }
      />
      <ProjectTab location={"Example"} />
      {(exMatch || exMatch01) && <ExampleAll />}
    </Container>
  );
};

export default Example;
