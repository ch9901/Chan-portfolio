import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyled";
import Title from "../components/Title";
import { ProjectWrap } from "../GlobalStyled";
import etcjson from "../json/etc.json";
import EtcCard from "../components/EtcCard";
import { AnimatePresence } from "framer-motion";

const EtcWrap = styled(ProjectWrap)`
  border-radius: 0rem;
  border: 0.2rem solid #000;
  margin-top: 8rem;
  padding: 8rem 0rem;
`;

const Etc = () => {
  return (
    <Container>
      <Title
        title={"Etc"}
        desc={
          "아래의 작업물은 디자인 작업물 입니다. 각 카드를 클릭하시면 해당 프로젝트의 디테일을 보실 수 있습니다."
        }
      />
      <EtcWrap>
        {etcjson.map((item) => (
          <EtcCard
            key={item.id}
            bgimg={item.bgimg}
            projectTit={item.title}
            icon={item.icon}
            data-target={item.title}
          />
        ))}
      </EtcWrap>
    </Container>
  );
};

export default Etc;
