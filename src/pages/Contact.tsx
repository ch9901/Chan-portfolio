import React from "react";
import styled from "styled-components";
import git from "../content/contact/github-contact.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 19rem);
  width: 100%;
`;
const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  width: 50%;
`;
const ContactTit = styled.div`
  font-size: 5rem;
  font-weight: 700;
`;
const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const IconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  width: 70%;
  img {
    width: 10rem;
  }
  button {
    padding: 0.5rem 2rem;
    font-size: 2rem;
    border: 0.2rem solid #eee;
    border-radius: 5rem;
    background: rgba(213, 243, 94, 0.28);
    color: #555;
    &:hover {
      background: #d5f35e;
      border: 0.2rem solid #fff;
      color: #000;
    }
  }
`;
const ContactDes = styled.span`
  font-size: 3rem;
  text-decoration: underline;
  font-weight: 600;
  &:hover {
    color: tomato;
  }
`;
const Contact = () => {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("이메일이 클립보드에 복사되었습니다😀");
    } catch (error) {
      await alert("클립보드 복사에 실패하였습니다. 다시 시도해주세요🥲");
    }
  };
  return (
    <Container>
      <ContactWrap>
        <ContactTit>Contact Me !</ContactTit>
        <IconSection>
          <IconWrap>
            <img src={git} alt="github" />
            <ContactDes as={"a"} href="https://github.com/ch9901">
              https://github.com/ch9901
            </ContactDes>
          </IconWrap>
          <IconWrap>
            <img
              src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
              alt="gmail"
            />
            <ContactDes>jcy990113@gmail.com</ContactDes>
            <button onClick={() => handleCopyClipBoard("jcy990113@gmail.com")}>
              Copy
            </button>
          </IconWrap>
        </IconSection>
      </ContactWrap>
    </Container>
  );
};

export default Contact;
