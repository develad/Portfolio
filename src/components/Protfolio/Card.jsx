import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as fa from 'react-icons/fa';
import { DarkModeStore } from '../store/Dark.Mode.Store';

function Card({ project }) {
  const { isDark } = useContext(DarkModeStore);

  return (
    <Box isDark={isDark}>
      {/* {project.id===3 && isDark? 
                <CardImg src={project.img[1]}
                    key="img-light"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{
                        type:'tween',
                        duration:0.4
                    }}
                />: */}
      <CardImg
        src={project.img[0]}
        key='img-dark'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'tween',
          duration: 0.4,
        }}
      />
      {/* } */}
      <CardDesc>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <h3>Main features:</h3>
        <UlBox>
          {project.features.map((feature, index) => {
            return <li key={index}>{feature}</li>;
          })}
          <li>
            Mobile responsive&nbsp;
            <fa.FaMobileAlt />
          </li>
        </UlBox>
        <ButtonsContainer>
          <a href={project.githubLink} target='_blank' rel='noreferrer'>
            <Button flag={false}>github</Button>
          </a>
          <a href={project.websiteLink} target='_blank' rel='noreferrer'>
            <Button flag={true}>website</Button>
          </a>
        </ButtonsContainer>
      </CardDesc>
    </Box>
  );
}

export default Card;

const CardImg = styled(motion.img)`
  height: 100%;
  width: 50%;

  @media only screen and (max-width: 980px) {
    height: 20vh;
    width: auto;
    border-radius: 5px;
    margin: 20px auto;
  }
`;

const CardDesc = styled.div`
  height: 95%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: space-between;
  padding: 0 30px;

  @media only screen and (max-width: 980px) {
    min-height: 60vh;
    width: 75%;
    flex-direction: column;
    border-radius: 0px;
    overflow: visible;
    margin: 0;
    padding: 0 20px 20px 20px;
    border-bottom: 4px solid rgb(80, 80, 80);

    @media only screen and (max-width: 350px) {
      padding: 0 40px;
    }
  }
`;

const Box = styled.div`
  height: 600px;
  width: 600px;
  background-color: ${({ isDark }) => (isDark ? 'rgb(42, 42, 42)' : 'white')};
  color: ${({ isDark }) => (isDark ? 'white' : 'rgb(80,80,80)')};
  transition: background-color 0.4s ease, color 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 30px;
  overflow: hidden;
  margin: 1rem;

  @media only screen and (max-width: 980px) {
    height: 100%;
    width: 100%;
    flex-direction: column;
    border-radius: 0px;
    overflow: visible;
    margin-right: 0;
    margin: 0;
    background-color: ${({ isDark }) => (isDark ? 'rgb(7, 2, 26)' : 'white')};
    transition: background-color 0.4s ease, color 0.4s ease;

    /* &:nth-child(3) > img {
      border: 1px solid rgb(80, 80, 80);
      border-radius: 0;
    } */
  }
`;

const Title = styled.p`
  text-align: center;
  font-size: 36px;
  font-family: Bungee;
  font-weight: bolder;
  line-height: 1;

  @media only screen and (max-width: 980px) {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 30px;
  }
`;

const Button = styled.button`
  font-family: Bungee;
  font-size: 24px;
  min-width: 180px;
  font-weight: bold;
  color: ${({ flag }) => (flag ? 'white' : 'yellow')};
  background-color: ${({ flag }) => (flag ? 'lightcoral' : 'rgb(80,80,80)')};
  border: none;
  padding: 20px 5px;
  height: 40px;
  border-radius: 20px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(0, 255, 200);
    color: black;
  }

  @media only screen and (max-width: 350px) {
    font-size: 20px;
    border-radius: 10px;
  }
`;

const ButtonsContainer = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 980px) {
    margin-top: 20px;
  }
`;

const UlBox = styled.ul`
  padding-left: 20px;
`;

const Description = styled.p`
  @media only screen and (max-width: 980px) {
    font-weight: bolder;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
