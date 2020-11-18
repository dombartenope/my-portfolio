import React from 'react'
import styled from 'styled-components';

const HomePageStyles = styled.div`
  font-size: 3rem;
  text-align: center;
  color: var(--glow);
`;

const index = () => {
  return (
    <HomePageStyles>
      <h1 className="title">Dom Bartenope</h1>
    </HomePageStyles>
  )
}

export default index
