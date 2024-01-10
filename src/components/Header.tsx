import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrap = styled.div`
  width: 100%;
  height: 10rem;
  border-bottom: 0.1rem solid #000;
  color: #000;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 100px 5px rgba(0, 0, 0, 0.1);
`;
const HeaderLeft = styled.div`
  border-right: 0.1rem solid #000;
  width: 30rem;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  font-family: gs700;
`;
const TitleC = styled.span`
  margin-top: 1rem;
  color: #707070;
`;
const TitleHan = styled.span`
  margin-top: 1rem;
  color: #828282;
`;
const Navigation = styled.div`
  width: 80rem;
  height: inherit;
`;
const ListWrap = styled.ul`
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5rem;
`;
const List = styled.li`
  font-size: 2rem;
  font-family: gs500;
  &:hover {
    font-weight: 700;
  }
`;

const Header = () => {
  const menuArr = ["Home", "Project", "Example", "Aboutme", "Contact"];
  return (
    <HeaderWrap>
      <HeaderLeft as={"a"} href="/">
        <TitleC>C:</TitleC>
        <TitleHan> han</TitleHan>
      </HeaderLeft>
      <Navigation>
        <ListWrap>
          {menuArr.map((item, index) => (
            <Link key={index} to={`/${item}`}>
              <List>{item}</List>
            </Link>
          ))}
        </ListWrap>
      </Navigation>
    </HeaderWrap>
  );
};

export default Header;
