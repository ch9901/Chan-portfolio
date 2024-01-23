import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Share from "./Share";
import KGaurd from "./KGaurd";

const CardWrap = styled(motion.div)`
  width: 40%;
  height: 43rem;
  border-radius: 2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: 0.3s;
  position: relative;
  &::before {
    content: "카드를 누르시면 작업물을 보실 수 있습니다.";
    position: absolute;
    right: 0;
    top: 2rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: tomato;
    opacity: 0;
    transition: 0.5s;
  }
  &:hover {
    transform: scale(1.05);
    border: 0.1rem solid #888;
    &::before {
      opacity: 1;
      top: -2.5rem;
    }
  }
`;
const ImgWrap = styled.div`
  width: 100%;
  height: 34.55rem;
  border-radius: 2rem 2rem 0 0;
  overflow: hidden;
  img {
    width: 100%;
    height: inherit;
    object-fit: cover;
  }
`;
const InfoWrap = styled.div`
  margin-left: 2rem;
  display: flex;
  height: calc(100% - 34.55rem);
  align-items: center;
  gap: 1rem;
  img {
    width: 4rem;
  }
`;
const ProjectTit = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;
const BigContent = styled(motion.div)`
  position: absolute;
  width: 80vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #fff;
  border-radius: 1rem;
  overflow: hidden;
`;
const ClsBtn = styled(motion.div)`
  width: 6rem;
  height: 6rem;
  background: tomato;
  border-radius: 3.5rem;
  position: absolute;
  right: 10%;
  top: 5%;
  transition: 0.3s;
  cursor: pointer;
  &::before {
    content: "X";
    color: #fff;
    font-size: 3rem;
    font-weight: 500;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
interface IProps {
  bgimg: string;
  projectTit: string;
  icon: string;
}
const EtcCard = ({ bgimg, projectTit, icon }: IProps) => {
  const [clickId, setClickId] = useState<string | null>(null);
  const showDetail = (e: React.MouseEvent<HTMLElement>) => {
    setClickId(e.currentTarget.getAttribute("data-target"));
  };
  const { scrollY } = useScroll();
  const modalClose = () => {
    setClickId(null);
  };

  console.log(clickId);
  return (
    <>
      <CardWrap
        onClick={showDetail}
        data-target={projectTit}
        layoutId={projectTit}
      >
        <ImgWrap>
          <img src={bgimg} alt={projectTit} />
        </ImgWrap>
        <InfoWrap>
          <img src={icon} alt={projectTit} />
          <ProjectTit>{projectTit}</ProjectTit>
        </InfoWrap>
      </CardWrap>
      <AnimatePresence>
        {clickId && (
          <>
            <Overlay>
              <ClsBtn onClick={modalClose} />
              <BigContent layoutId={projectTit} style={{ top: 120 }}>
                {clickId === "공유누리" && <Share />}
                {clickId === "K-Guard" && <KGaurd />}
                {clickId === "ADA - BackSpace" && <div>ADA - BackSpace</div>}
                {clickId === "0-生" && <div>0-生</div>}
              </BigContent>
            </Overlay>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default EtcCard;
