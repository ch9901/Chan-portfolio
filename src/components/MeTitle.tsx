import React from "react";
import styled from "styled-components";

const TitWrap = styled.div`
  width: 82rem;
`;
const MainTit = styled.h1`
  font-family: gs700;
  font-size: 3.5rem;
  line-height: 1.6;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 33rem;
    height: 2rem;
    background: #d5f35e;
    bottom: 0.5rem;
    z-index: -1;
  }
`;
const MainDesc = styled.p`
  width: 90rem;
  font-size: 2rem;
  line-height: 1.4;
  margin-top: 2rem;
  word-break: keep-all;
`;
const MeTitle = () => {
  return (
    <TitWrap className="aboutmeTitWrap">
      <MainTit>
        도전에 멈춤이 없는
        <br />
        프론트엔드 개발자가 되겠습니다
      </MainTit>
      <MainDesc className="aboutmeDesc">
        배움에는 끝이 없다고 생각합니다. 디자인으로 배움을 시작했지만 기능구현의
        목마름에 개발까지 도전하게되었습니다. 뛰어난 디자인감각과 꾸준히
        노력하는 개발능력으로 계속해서 도전하는 프론트엔드가 되겠습니다.
      </MainDesc>
    </TitWrap>
  );
};

export default MeTitle;
