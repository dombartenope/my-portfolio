import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";

const FourOhFour = styled.div`
  text-align: center;
  h1 {
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-shadow: var(--text-shadow);
    color: var(--glow);
  }
  .back {
        text-align: center;
    }
    .backButton:before {
        content: '←';
        color: var(--glow);
        text-shadow: var(--text-shadow);
        animation: blink 10s infinite linear;
    }
`;

const NotFoundPage = () => {
  return (
    <FourOhFour>
      <SEO title={"404"} />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

      <div className="back">
        <Link to={`/`}>
          <span className="backButton">Home</span>
        </Link>
      </div>

    </FourOhFour>
  )
};

export default NotFoundPage;
