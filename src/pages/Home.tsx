import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  padding: 0 16rem;
  height: calc(100vh - 10rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  gap: 7rem;
`;
const Title = styled.div`
  font-family: gs700;
  font-size: 5rem;
  position: relative;
  line-height: 1.4;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 42rem;
    height: 2rem;
    background: #d5f35e;
    bottom: 0;
    z-index: -1;
  }
`;
const ArrowWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Arrow = styled.div`
  height: 0.2rem;
  width: 65%;
  background: #000;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 3rem;
    height: 3rem;
    border-right: 0.2rem solid #000;
    border-top: 0.2rem solid #000;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
`;
const boxAni = keyframes`
0%{
  margin-left:-6rem;
}
50%{
  margin-left:-4rem;
}

`;

const Box = styled.div`
  width: 48rem;
  height: 10rem;
  border: 0.2rem solid #000;
  border-radius: 5rem;
  margin-left: -6rem;
  background: rgba(213, 243, 94, 0.28);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-family: gs500;
  transition: 0.3s;
  animation: ${boxAni} 1.5s linear infinite;

  span {
    margin-left: 5rem;
  }
  b {
    font-family: gs700;
  }
  &:hover {
    background: rgba(213, 243, 94, 1);
    transform: scale(1.05);
  }
`;
const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const BoxDesc = styled.span`
  position: absolute;
  font-size: 1.6rem;
  top: -3rem;
`;
const Home = () => {
  return (
    <Container id="Home">
      <Title className="homeTitle">
        끊임없이 도전하는
        <br />
        프론트엔드 전찬영 포트폴리오👣
      </Title>
      <ArrowWrap>
        <Arrow />
        <BoxWrap>
          <BoxDesc>버튼을 클릭하면 프로젝트 페이지로 이동합니다!</BoxDesc>
          <Box as={"a"} href="/Project">
            <span>
              Go to <b>&nbsp;PROJECT&nbsp;</b> directly
            </span>
          </Box>
        </BoxWrap>
      </ArrowWrap>
    </Container>
  );
};

export default Home;
