import React, { useContext } from 'react';
import styled from 'styled-components';
import { textMain } from './textMain';
import { DarkModeStore } from '../../store/Dark.Mode.Store';

function Profilebox() {
  const { isDark } = useContext(DarkModeStore);

  return (
    <Profile isDark={isDark}>
      <HeaderTitle>ELAD BAR</HeaderTitle>
      <ProfileImg src='/images/img_01A.jpg' alt='logo' />
      <ProfileDiv>
        <Hello>Hello! 🎉😃</Hello>
        {textMain.map((text, index) => {
          return <MainProfileBox key={index}>{text}</MainProfileBox>;
        })}
      </ProfileDiv>
      <HelloImg src='/images/hello.gif' alt='hello-person' />
    </Profile>
  );
}

export default Profilebox;

const Profile = styled.div`
  background-color: ${({ isDark }) => (isDark ? 'rgb(42, 42, 42)' : 'white')};
  color: ${({ isDark }) => (isDark ? 'white' : 'rgb(80, 80, 80)')};
  transition: background-color 0.4s ease, color 0.4s ease;
  width: 22rem;
  margin: 0 1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 980px) {
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    border-radius: 0;
    background-color: ${({ isDark }) => (isDark ? 'rgb(7, 2, 26)' : 'white')};
    transition: background-color 0.4s ease;
  }
`;

const HeaderTitle = styled.h1`
  font-family: Bungee;
  font-size: 3rem;
  @media only screen and (max-width: 980px) {
    margin-bottom: 20px;
    margin-top: 40px;
  }
`;

const ProfileImg = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Hello = styled.h3`
  text-align: center;
  @media only screen and (max-width: 980px) {
    font-size: 24px;
  }
`;

const ProfileDiv = styled.div`
  font-size: 1rem;
  margin-top: 20px;
  width: 90%;
  @media only screen and (max-width: 980px) {
    width: 82vw;
  }
`;

const MainProfileBox = styled.p`
  font-size: 16px;
  margin-top: 20px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 980px) {
    font-size: 20px;
    /* text-align:justify; */
  }
`;

const HelloImg = styled.img`
  height: 100px;
  position: absolute;
  right: 8%;
  bottom: 20px;
  @media only screen and (max-width: 980px) {
    display: none;
  }
`;
