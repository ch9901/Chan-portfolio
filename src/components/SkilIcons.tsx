import React, { useState } from "react";
import styled from "styled-components";
import reacticon from "../content/Logos/React.png";
import tsicon from "../content/Logos/TS.png";
import jsicon from "../content/Logos/JavaScript.png";
import html from "../content/Logos/html.png";
import css from "../content/Logos/css.png";
import scss from "../content/Logos/Sass.png";
import git from "../content/Logos/github-original.png";
import firebase from "../content/Logos/firebase.png";

const SkilWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const SkilTitWrap = styled.div`
  margin-top: 5rem;
`;
const SkilTit = styled.div`
  color: #535353;
  font-family: gs700;
  font-size: 2.5rem;
  line-height: 1.2;
`;
const Skildes = styled.p`
  width: 80rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6;
`;
const SkilIconWrap = styled.div`
  width: 81rem;
  height: 4rem;
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
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
const Desc = styled.span`
  margin-top: 2rem;
  width: 90rem;
  height: 21rem;
  padding: 1.5rem;
  font-size: 1.8rem;
  line-height: 3rem;
  background: #fff;
  border: 0.1rem solid #ccc;
  border-radius: 1rem;
  word-break: keep-all;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.05);
`;
interface IProps {
  attr: string | null | undefined;
}

const SkilIcons = () => {
  const [dataName, setDataName] = useState<string | null>("React");
  const [skilDes, setSkilDes] = useState(
    "함수형 컴포넌트 이해 및 설계가 가능합니다. styled-components를 통해 화면을 스타일링 할 수 있습니다. Bootstrap, react-router-dom 등의 라이브러리를 사용하여 빠르고 간결한 화면구현을 진행할 수 있습니다. 상태변화관리는 Redux, Redux Thunk, Recoil등을 활용하여 관리할 수 있습니다. 제가 진행 한 프로젝트에서는 'JAJU 쇼핑몰' 프로젝트에서는 Redux Thunk, 'Kanban Board'에서는 Recoil을 통한 상태관리를 하였습니다."
  );
  const getAttr = (event: React.MouseEvent<HTMLElement>) => {
    const name = event.currentTarget.getAttribute("data-name");
    setDataName(name);
    switch (name) {
      case "React":
        return setSkilDes(
          "함수형 컴포넌트 이해 및 설계가 가능합니다. styled-components를 통해 화면을 스타일링 할 수 있습니다. Bootstrap, react-router-dom 등의 라이브러리를 사용하여 빠르고 간결한 화면구현을 진행할 수 있습니다. 상태변화관리는 Redux, Redux Thunk, Recoil등을 활용하여 관리할 수 있습니다. '노래 뭐 부르지?', 'Kanban Board'에서는 Recoil,'JAJU 쇼핑몰' 프로젝트에서는 Redux Thunk을 통한 상태관리를 하였습니다."
        );
      case "Ts":
        return setSkilDes(
          "자바스크립트에서 모호하게 사용되던 타입을 타입스크립트를 통해  제어하여 에러를 잡을 수 있습니다. React + TS로 진행한 KanbanBoard, netflix 프로젝트를 통해 타입정의와 에러에 대한 지식을 학습하였습니다."
        );
      case "Js":
        return setSkilDes(
          "Js의 내장함수를 활용하여 원하는 데이터를 화면에 출력할 수 있습니다. 외부 api를 fetch를 통해 해당 데이터를 기반으로 화면에 출력, 구현이 가능합니다. "
        );
      case "Html, CSS, Scss":
        return setSkilDes(
          "시멘틱태그를 활용한 HTML5 작성할 수 있습니다.  CSS, Scss에서는  변수설정을 통해 원하는 스타일을 부여할 수 있습니다. 또한 브레이크 포인트를 기반으로 반응형 웹을 구현할 수 있습니다. 애니메이션기능을 활용하여 인터렉티브한 페이지를 구현 할 수 있습니다."
        );
      case "Github":
        return setSkilDes(
          "Github를 통한 데이터 업로드, 다운로드가 가능합니다. 또한 Github를 이용한 팀프로젝트가 가능합니다."
        );
      case "Firebase":
        return setSkilDes(
          "Google의 Firebase를 이용하여 만든 웹사이트를 Command Propmpt를 통해 배포 할 수 있습니다."
        );
    }
  };
  return (
    <SkilWrap>
      <SkilTitWrap>
        <SkilTit>주요스킬</SkilTit>
        <Skildes>
          각 아이콘을 클릭하시면 해당 스킬에 대한 자세한설명이 나옵니다
        </Skildes>
      </SkilTitWrap>
      <SkilIconWrap className="skilIconWrap">
        <Icon color="#61DAFB" data-name="React" onClick={getAttr}>
          <img src={reacticon} />
          <IconName color="#20697D">React</IconName>
        </Icon>
        <Icon color="#007ACC" data-name="Ts" onClick={getAttr}>
          <img src={tsicon} />
          <IconName color="#007ACC">TypeScript</IconName>
        </Icon>
        <Icon color="#E2CC18;" data-name="Js" onClick={getAttr}>
          <img src={jsicon} />
          <IconName color="#E99F30;">JavaScript</IconName>
        </Icon>
        <Icon color="#F16529;" data-name="Html, CSS, Scss" onClick={getAttr}>
          <img src={html} />
          <img src={css} />
          <img src={scss} />
        </Icon>
        <Icon color="#000;" data-name="Github" onClick={getAttr}>
          <img src={git} />
          <IconName color="#000">Github</IconName>
        </Icon>
        <Icon color="#F58220;" data-name="Firebase" onClick={getAttr}>
          <img src={firebase} />
          <IconName color="#A9530A">Firebase</IconName>
        </Icon>
      </SkilIconWrap>
      <Desc className="aboutmeSkilDesc">
        <div>▶ {dataName} </div>
        {skilDes}
      </Desc>
    </SkilWrap>
  );
};

export default SkilIcons;
