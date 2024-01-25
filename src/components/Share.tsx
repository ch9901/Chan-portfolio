import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 3rem;
`;
const DescMain = styled.div`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.7;
  b {
    font-size: 2.2rem;
    font-weight: 600;
  }
`;
const Link = styled.div`
  font-size: 3rem;
  text-decoration: underline;
  font-weight: 500;
  transition: 0.3s;
  &:hover {
    color: tomato;
  }
`;
const Share = () => {
  return (
    <Carousel
      autoPlay={false}
      interval={3500}
      showArrows={true}
      showStatus={false}
    >
      <DescBox>
        <DescMain>
          이 작품은 <b>디지털 정부서비스 아이디어 공모전</b>에서
          <b>국무총리상을 수상한 작품입니다.</b>
        </DescMain>
        <DescMain>
          하단 링크는 해당 디자인 작업물의 피그마 프로토타입 링크입니다. 링크를
          누르시면
          <br />
          해당 페이지를 보실 수 있습니다.
        </DescMain>
        <Link as={"a"} href="https://shorturl.at/cgnJS">
          🔗https://shorturl.at/cgnJS
        </Link>
        <DescMain>
          오른쪽 화살표를 누르시면 해당 프로젝트의 상세정보를 보실 수 있습니다.
        </DescMain>
      </DescBox>
      <div>
        <img src="https://i.ibb.co/Gp0H0sx/share-award.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/vPqDb5V/1.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/1rzBCMS/2.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/ZKrqt3J/3.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/HnVGYmk/4.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/b5Gz3C9/5.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/T47tvhs/6.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/D53Mx86/7.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/vhByQBT/8.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/J23w2pQ/9.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/TH7Lk24/10.png" />
      </div>
    </Carousel>
  );
};

export default Share;
