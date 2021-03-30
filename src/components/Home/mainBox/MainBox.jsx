import React, { useContext } from 'react';
import Card from './Card';
import styled from 'styled-components';
import { info } from './cardData';
import * as fa from 'react-icons/fa';
import { DarkModeStore } from '../../store/Dark.Mode.Store';

function MainBox() {
  const { isDark } = useContext(DarkModeStore);

  return (
    <BoxContainer id='Skills' isDark={isDark}>
      <Title>
        Development Skills &nbsp;
        <fa.FaCubes />
      </Title>
      <Laptop src='/images/laptop.svg' alt='laptop' />
      <CardContainer>
        {info.map((infoCard, index) => {
          return (
            <CardBox key={index}>
              <Header>{infoCard.mainTitle}</Header>
              {infoCard.infoPairs.map((infoItem, index) => {
                return <Card infoItem={infoItem} key={index} />;
              })}
            </CardBox>
          );
        })}
      </CardContainer>
      <Footer>
        Favorite Text editor: VScode
        <img src='/images/vscode.png' alt='face' height='40' width='40' />
        <img src='/images/face.gif' alt='face' height='40' width='40' />
      </Footer>
    </BoxContainer>
  );
}

export default MainBox;

const BoxContainer = styled.div`
  background-color: ${({ isDark }) => (isDark ? 'rgb(42, 42, 42)' : 'white')};
  color: ${({ isDark }) => (isDark ? 'white' : 'rgb(80, 80, 80)')};
  transition: background-color 0.4s ease, color 0.4s ease;
  width: 38rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  position: relative;
  @media only screen and (max-width: 980px) {
    width: 100vw;
    border-radius: 0;
    background-color: ${({ isDark }) => (isDark ? 'rgb(7, 2, 26)' : 'white')};
    transition: background-color 0.4s ease;
  }
`;

const CardContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  @media only screen and (max-width: 550px) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;
  padding-bottom: 5px;
  border-bottom: 4px solid rgb(80, 80, 80);
  width: 88%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media only screen and (max-width: 550px) {
    font-size: 24px;
    justify-content: center;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin: 10px;
  border-radius: 30px;
  min-width: 15rem;
  border: 5px solid rgb(80, 80, 80);
  box-shadow: 5px -3px lime;
  @media only screen and (max-width: 980px) {
    box-shadow: 5px -3px MediumSpringGreen;
  }
`;

const Laptop = styled.img`
  height: 105px;
  width: 105px;
  position: absolute;
  right: 38px;
  top: -2px;
  @media only screen and (max-width: 550px) {
    display: none;
  }
`;

const Header = styled.h2`
  margin-bottom: 5px;
`;

const Footer = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  @media only screen and (max-width: 550px) {
    margin-top: 20px;
    /* font-size:0.9rem; */
    padding: 0 2rem;
    text-align: center;
    /* white-space:nowrap; */
  }
`;
