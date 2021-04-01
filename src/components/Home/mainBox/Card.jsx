import React, { useEffect } from 'react';
import styled from 'styled-components';

function Card({ infoItem }) {
  // console.log(infoItem)
  useEffect(() => {
    fetch('https://dagbareshet.herokuapp.com');
  }, []);
  return (
    <InnerBox>
      <h3>{infoItem.title}</h3>
      <Pic src={infoItem.src} alt={infoItem.title} />
    </InnerBox>
  );
}

export default Card;

const InnerBox = styled.div`
  width: 12rem;
  margin: 5px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Pic = styled.img`
  height: 30px;
  width: 30px;
`;
