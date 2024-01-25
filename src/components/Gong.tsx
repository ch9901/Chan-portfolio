import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  img {
    background-size: cover;
    background-position: center;
  }
`;
const Gong = () => {
  return (
    <Carousel
      autoPlay={false}
      interval={3500}
      showArrows={true}
      showStatus={false}
      dynamicHeight={true}
    >
      <ImgWrap>
        <img src="https://i.ibb.co/yVx4yM0/Frame-10.png" alt="" />
      </ImgWrap>
      <ImgWrap>
        <img src="https://i.ibb.co/Y7ZKhGS/Frame-11.png" alt="" />
      </ImgWrap>
      <ImgWrap>
        <img src="https://i.ibb.co/C1nHHk5/Frame-12.png" alt="" />
      </ImgWrap>
    </Carousel>
  );
};

export default Gong;
