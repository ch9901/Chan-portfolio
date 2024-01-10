import React, { useState } from "react";
import styled from "styled-components";
import indivisual from "../content/projectIcon/personalProject.png";
import team from "../content/projectIcon/teamProject.png";
import { motion } from "framer-motion";
import { AnimatePresence, useScroll } from "framer-motion";

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: relative;
  border: 0.1rem solid #fff;
  cursor: pointer;
  transition: 0.3s;
  &::before {
    content: "카드를 누르시면 디테일 한 정보를 볼 수 있습니다.";
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
    border: 0.1rem solid #888;
    &::before {
      top: -2.5rem;
      opacity: 1;
    }
  }
`;
const CardWrap = styled.div`
  width: 100%;
  height: 25rem;
  border-radius: 1rem;
  overflow: hidden;
  background: #fff;
  display: flex;
  margin: 0 auto;
`;
const ImgWrap = styled.div`
  width: 60%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    background-size: cover;
  }
`;
const InfoWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 3.5rem 3rem;
  position: relative;
`;
const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  width: 100%;
`;
const HashWrap = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.3rem;
`;
const Hash = styled.div`
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  background: #e2e2e2;
  font-size: 1.4rem;
  font-weight: 500;
`;
const Urls = styled.div`
  position: absolute;
  bottom: 7%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
const UrlWrap = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: underline;
  &:hover {
    color: tomato;
  }
`;
const ProjectType = styled.div`
  position: absolute;
  right: 5%;
  top: 3rem;
  img {
    opacity: 0.7;
    width: 3.3rem;
  }
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
const BigContent = styled(motion.div)`
  position: absolute;
  width: 70vw;
  height: 90vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #fff;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #555;
  display: flex;
`;
const BigImgWrap = styled.div`
  width: 43%;
  height: 100%;
  border-right: 0.1rem solid #000;
  img {
    width: 100%;
    background-position: top left;
  }
`;
const BigInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 6%;
  width: 55%;
`;
const BaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BigTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
`;
const BigUrlWrap = styled(UrlWrap)``;
const BigUrls = styled(Urls)`
  position: static;
  margin-top: 3rem;
`;
const BigCorePart = styled.div`
  margin-top: 5rem;
`;
const PartTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;
const Ul = styled.ul`
  margin-bottom: 3rem;
`;
const Li = styled.li`
  list-style: circle;
  margin-left: 3rem;
  margin-top: 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  &:first-child {
    margin-top: 2rem;
  }
`;
const MyPart = styled.div`
  margin-top: 1rem;
  img {
    width: 3rem;
  }
`;
const PartDesc = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.5rem;
`;
const DevStory = styled.div`
  margin-top: 3rem;
  line-height: 1.6;
`;
interface IProps {
  id: number;
  title: string;
  img: string;
  bigImg?: string;
  hostingUrl: string;
  figmaUrl?: string;
  hash?: any;
  corePart: string[];
  myPart: string | string[];
  devStory: string;
}
const ProjectCard = ({
  id,
  title,
  img,
  bigImg,
  hash,
  hostingUrl,
  figmaUrl,
  corePart,
  myPart,
  devStory,
}: IProps) => {
  const [clickId, setClickId] = useState<string | null>(null);
  const showDetail = (e: React.MouseEvent<HTMLElement>) => {
    setClickId(e.currentTarget.getAttribute("data-target"));
    // console.log(typeof e.currentTarget.getAttribute("data-target"));
  };
  const { scrollY } = useScroll();
  const modalClose = () => {
    setClickId(null);
  };
  return (
    <>
      <Container
        className="projectCardContainer"
        layoutId={title}
        data-target={title}
        onClick={showDetail}
      >
        <CardWrap className="cardWrap">
          <ImgWrap className="imgWrap">
            <img src={img} alt={title} />
          </ImgWrap>
          <InfoWrap className="infoWrap">
            <Title>{title}</Title>
            <HashWrap>
              {hash.map((hash: string) => (
                <Hash key={hash}># {hash}</Hash>
              ))}
            </HashWrap>
            <Urls className="urls">
              <UrlWrap as={"a"} href={hostingUrl} target="_blank">
                🔗Project Url : {hostingUrl}
              </UrlWrap>
              {figmaUrl && (
                <UrlWrap as={"a"} href={figmaUrl} target="_blank">
                  🔗Figma Url : {figmaUrl}
                </UrlWrap>
              )}
            </Urls>
            {myPart === "개인 프로젝트" ? (
              <ProjectType>
                <img src={indivisual} alt="개인프로젝트" />
              </ProjectType>
            ) : (
              <ProjectType>
                <img src={team} alt="팀프로젝트" />
              </ProjectType>
            )}
          </InfoWrap>
        </CardWrap>
      </Container>
      <AnimatePresence>
        {clickId ? (
          <>
            <Overlay onClick={modalClose}>
              <BigContent
                className="bigContent"
                layoutId={clickId}
                style={{
                  top: 60,
                }}
              >
                <BigImgWrap className="bigImgWrap">
                  <img src={bigImg} />
                </BigImgWrap>
                <BigInfoWrap className="bigInfoWrap">
                  <BaseInfo>
                    <BigTitle>{title}</BigTitle>
                    <HashWrap>
                      {hash.map((hash: string) => (
                        <Hash key={hash}># {hash}</Hash>
                      ))}
                    </HashWrap>
                    <BigUrls>
                      <BigUrlWrap as={"a"} href={hostingUrl} target="_blank">
                        🔗Project Url : {hostingUrl}
                      </BigUrlWrap>
                      {figmaUrl && (
                        <UrlWrap as={"a"} href={figmaUrl} target="_blank">
                          🔗Figma Url : {figmaUrl}
                        </UrlWrap>
                      )}
                    </BigUrls>
                  </BaseInfo>
                  <BigCorePart>
                    <PartTitle>핵심파트</PartTitle>
                    <Ul>
                      {corePart.map((part) => (
                        <Li>{part}</Li>
                      ))}
                    </Ul>
                  </BigCorePart>
                  <MyPart className="myPart">
                    <PartTitle>프로젝트 형태</PartTitle>
                    {myPart === "개인 프로젝트" ? (
                      <PartDesc>
                        <img src={indivisual} alt="개인프로젝트" /> {myPart}
                      </PartDesc>
                    ) : (
                      <PartDesc>
                        <img src={team} alt="팀프로젝트" /> {myPart}
                      </PartDesc>
                    )}{" "}
                  </MyPart>
                  <DevStory>
                    <PartTitle>개발이야기</PartTitle>
                    <PartDesc className="devStory">{devStory}</PartDesc>
                  </DevStory>
                </BigInfoWrap>
              </BigContent>
            </Overlay>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
