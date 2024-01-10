import React from "react";
import styled from "styled-components";

interface Iprops {
  title: string;
  desc: string;
}

const TitleWrap = styled.div`
  font-family: gs700;
  line-height: 1.6;
`;
const MainTitle = styled.div`
  font-size: 4rem;
  word-break: keep-all;
`;
const TitleDesc = styled.div`
  font-family: Pretendard Variable;
  font-size: 1.8rem;
  color: #555;
  width: 45rem;
  word-break: keep-all;
`;
const Title = ({ title, desc }: Iprops) => {
  return (
    <TitleWrap>
      <MainTitle>{title}</MainTitle>
      <TitleDesc>{desc}</TitleDesc>
    </TitleWrap>
  );
};

export default Title;
