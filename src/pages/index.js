import React from 'react';
import styled from 'styled-components';
import TextLoop from 'react-text-loop';
import { BsArrowUpLeft as Icon } from 'react-icons/bs';

const HomePageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 4rem;
    line-height: calc(10px + 20vh);
    padding: 5px;
    text-align: center;
    color: var(--glow);
    text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    animation: blink 10s linear infinite;
    @media (max-width: 510px) {
      font-size: 2rem;
  }
}
`;
const ContentStyles = styled.div`
  padding: 3rem;
  margin-top: 1rem;
  color: var(--white);
  text-align: center;
  width: 80%;
  .mark, .arrow {
    display: inline;
    color: var(--glow);
    text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
  }
  .content {
    padding: 2rem;
  }
  .arrow:before {
    content: '↖';

  }
  @media (max-width: 510px) {
    .arrow:before {
      content: '↑'
    }
  }
`;

const index = () => {
  return (
    <>
      <HomePageStyles>
        <h1 className="title">Dom Bartenope</h1>
        <ContentStyles>
          <h2>New Jersey based web developer with a love for all things<span> </span>
            {/* Scrolling Text */}
            <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
              <span className="mark">Javascript</span>
              <span className="mark">React</span>
              <span className="mark">CSS</span>
              <span className="mark">Html</span>
              <span className="mark">GraphQL</span>
              <span className="mark">NodeJS</span>
              <span className="mark">Svelte</span>
            </TextLoop>
          </h2>

          <h2 className="content">Recent bootcamp grad here to showcase my projects and introduce my self to the world of programming! Feel free to check out my work (and my pup) in the menu above <span className="arrow"></span> Thanks for stopping by! </h2>
        </ContentStyles>
      </HomePageStyles>
    </>
  )
}

export default index
