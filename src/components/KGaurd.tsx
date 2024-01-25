import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  justify-content: center;
  height: 100%;
  padding: 3rem;
`;
const DescMain = styled.div`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.7;
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

const KGaurd = () => {
  return (
    <Carousel
      autoPlay={false}
      interval={3500}
      showArrows={true}
      showStatus={false}
    >
      <DescBox>
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
        <img src="https://i.ibb.co/6mXrK43/group-ppt-03.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/YcST5Qy/group-ppt-04.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/sRr9Nkj/group-ppt-05.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/mzVQwq8/group-ppt-06.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/bNsNJV8/group-ppt-07.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/jbwYbwN/group-ppt-08.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/26RtQrQ/group-ppt-09.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/J3ndGTt/group-ppt-10.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/L573pkx/group-ppt-11.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/82SMnpC/group-ppt-12.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/0rCwWDb/group-ppt-13.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/QkwS61P/group-ppt-14.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/6wzvw43/group-ppt-15.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/VNV0y0D/group-ppt-16.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/KFpnN9s/group-ppt-17.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/Y3DPnBk/group-ppt-18.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/P1Cy7X8/group-ppt-19.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/8NrFvbh/group-ppt-20.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/PNpp6W2/group-ppt-21.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/qs8BdmK/group-ppt-22.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/sFbqjL9/group-ppt-23.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/5MhdrMw/group-ppt-25.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/9sYRw6K/group-ppt-26.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/DzXxQ9k/group-ppt-27.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/pdzZFth/group-ppt-28.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/FXWqXTx/group-ppt-29.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/FV2bKmg/group-ppt-30.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/BrFrNhC/group-ppt-31.png" />
      </div>
    </Carousel>
  );
};

export default KGaurd;
