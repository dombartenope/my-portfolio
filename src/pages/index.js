import React from 'react';
import styled from 'styled-components';
import TextLoop from 'react-text-loop';

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
    text-shadow: var(--text-shadow);
    animation: blink 10s linear infinite;
    @media (max-width: 510px) {
      font-size: 4rem;
      line-height: calc(5px + 10vh);
      margin-top: 3rem;
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
    text-shadow: var(--text-shadow);
  }
  .content {
    margin-top: 2rem;
    padding: 0;
  }
  .arrow:before {
    content: '↖';

  }
  @media (max-width: 1763px) and (min-width: 1500px) {
    .arrow:before {
      content: '↑'
    }
  }
  @media (max-width: 1320px) and (min-width: 1017px) {
    .arrow:before {
      content: '↑'
    }
  }
  @media (max-width: 866px) and (min-width: 762px) {
    .arrow:before {
      content: '↑'
    }
  }
  @media (max-width: 672px) {
    .arrow:before {
      content: '↑'
    }
  }
  @media (min-width: 1500px) {
    width: 60%
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

          <h2 className="content">Recent bootcamp grad, here to showcase my projects and all of the emerging technologies I test my hand in! Feel free to check out my work (and my pup) in the menu above <span className="arrow"></span> Thanks for stopping by! </h2>
        </ContentStyles>
      </HomePageStyles>
    </>
  )
}

export default index
