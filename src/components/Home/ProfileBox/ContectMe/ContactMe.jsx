import React, { useContext } from 'react';
import styled from 'styled-components';
import * as fa from 'react-icons/fa';

import { DarkModeStore } from '../../../store/Dark.Mode.Store';

function ContactMe() {
  const { isDark } = useContext(DarkModeStore);
  return (
    <Container>
      <ContactLink
        href='https://www.facebook.com/elad.bar007/'
        target='_blank'
        rel='noreferrer'
        isDark={isDark}
      >
        <fa.FaFacebook />
      </ContactLink>
      <ContactLink
        href='https://github.com/develad'
        target='_blank'
        rel='noreferrer'
        isDark={isDark}
      >
        <fa.FaGithub />
      </ContactLink>
      <ContactLink
        href='https://www.linkedin.com/in/elad-bar-b25ab532/'
        target='_blank'
        rel='noreferrer'
        isDark={isDark}
      >
        <fa.FaLinkedin />
      </ContactLink>
    </Container>
  );
}

export default ContactMe;

const Container = styled.div`
  width: 120px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 3rem;
  @media only screen and (max-width: 980px) {
    width: 180px;
  }
`;

const ContactLink = styled.a`
  color: ${({ isDark }) => (isDark ? 'white' : 'rgb(80, 80, 80)')};
  transition: color 0.4s ease;
  &:hover {
    transform: scale(0.95);
    transition: all 0.2s ease;
  }
`;
