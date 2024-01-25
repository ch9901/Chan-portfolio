import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  img {
    background-size: cover;
    background-position: center;
  }
`;
const Backspace = () => {
  return (
    <Carousel
      autoPlay={false}
      interval={3500}
      showArrows={true}
      showStatus={false}
      dynamicHeight={true}
    >
      <ImgWrap>
        <img src="https://i.ibb.co/Sfy14M2/Frame-9.png" alt="" />
      </ImgWrap>
      <ImgWrap>
        <img src="https://i.ibb.co/nR1VfHd/Frame-4.png" alt="" />
      </ImgWrap>
      <ImgWrap>
        <img src="https://i.ibb.co/4fwLfTn/Frame-5.png" alt="" />
      </ImgWrap>
      <ImgWrap>
        <img src="https://i.ibb.co/Gsx3GVC/Frame-6.png" alt="" />
      </ImgWrap>
      <ImgWrap>
        <img src="https://i.ibb.co/YLVh28b/Frame-7.png" alt="" />
      </ImgWrap>
      <ImgWrap>
        <img src="https://i.ibb.co/pxZg0zG/Frame-8.png" alt="" />
      </ImgWrap>
    </Carousel>
  );
};

export default Backspace;
