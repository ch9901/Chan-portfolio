import React from "react";
import me from "../content/1937zx.jpg";
import styled from "styled-components";
import SkilIcons from "../components/SkilIcons";
import MeTitle from "../components/MeTitle";

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 15rem);
  justify-content: center;
  gap: 10rem;
  align-items: center;
  padding-left: 9rem;
`;

const Photo = styled.div`
  margin-top: 10%;
  width: 40%;
  height: 80%;
  border-radius: 2rem;
  overflow: hidden;
  img {
    width: 100%;
    border: 0.1rem solid #ccc;
    border-radius: 2rem;
    background-size: cover;
    background-position: center center;
  }
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 55rem;
  width: 65%;
  padding-right: 10rem;
`;

const Aboutme = () => {
  return (
    <Wrap className="aboutmeWrap">
      <Photo className="aboutmePhoto">
        <img src={me} alt="myphoto" />
      </Photo>
      <InfoWrap className="aboutmeInfoWrap">
        <MeTitle />
        <SkilIcons />
      </InfoWrap>
    </Wrap>
  );
};

export default Aboutme;
