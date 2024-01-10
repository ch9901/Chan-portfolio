import React, { useState } from "react";
import styled from "styled-components";
import reacticon from "../content/Logos/React.png";
import tsicon from "../content/Logos/TS.png";
import jsicon from "../content/Logos/JavaScript.png";
import html from "../content/Logos/html.png";
import css from "../content/Logos/css.png";
import scss from "../content/Logos/Sass.png";
import git from "../content/Logos/github-original.png";

const SkilWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const SkilTitWrap = styled.div``;
const SkilTit = styled.div`
  color: #535353;
  font-family: gs700;
  font-size: 2.5rem;
  line-height: 1.2;
`;
const Skildes = styled.p`
  width: 80rem;
  height: 11rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6;
`;
const SkilIconWrap = styled.div`
  width: 81rem;
  height: 4rem;
  display: flex;
  gap: 2rem;
`;
const Icon = styled.div`
  padding: 0 1.5rem;
  height: 4.5rem;
  border: 0.1rem solid ${(props) => props.color};
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  img {
    width: 2.7rem;
  }
`;
const IconName = styled.span`
  color: ${(props) => props.color};
  font-size: 1.8rem;
  font-weight: 600;
`;

const SkilIcons = () => {
  const [attr, setAttr] = useState<string | null>("react");
  const getAttr = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = event.currentTarget.getAttribute("data-name");
    setAttr(name);
  };
  console.log(typeof attr);
  return (
    <SkilWrap>
      <SkilTitWrap>
        <SkilTit>주요스킬</SkilTit>
        <Skildes>
          각 아이콘을 클릭하시면 해당 스킬에 대한 자세한설명이 나옵니다
        </Skildes>
      </SkilTitWrap>
      <SkilIconWrap>
        <Icon color="#61DAFB">
          <img src={reacticon} />
          <IconName onClick={getAttr} data-name="react" color="#20697D">
            React
          </IconName>
        </Icon>
        <Icon color="#007ACC">
          <img src={tsicon} />
          <IconName onClick={getAttr} data-name="ts" color="#007ACC">
            TypeScript
          </IconName>
        </Icon>
        <Icon color="#E2CC18;">
          <img src={jsicon} />
          <IconName onClick={getAttr} data-name="js" color="#E99F30;">
            JavaScript
          </IconName>
        </Icon>
        <Icon color="#F16529;">
          <img src={html} />
          <img src={css} />
          <img src={scss} />
        </Icon>
        <Icon color="#000;">
          <img src={git} />
          <IconName onClick={getAttr} data-name="git" color="#000;">
            Github
          </IconName>
        </Icon>
      </SkilIconWrap>
      {/* <SkilDes attr={attr} /> */}
    </SkilWrap>
  );
};

export default SkilIcons;
