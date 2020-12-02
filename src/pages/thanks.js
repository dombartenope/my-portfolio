import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';

const ThanksStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    h1 {
        margin-top: 3rem;
        color: var(--glow);
        text-shadow: var(--text-shadow);
        font-size: 3rem;
    }
    h2 {
        padding: 2rem;
    }
    .back {
        text-align: center;
    }
    .backButton:before {
        content: '←';
        color: var(--glow);
        text-shadow: var(--text-shadow);
    }
`;

const thanks = () => {
    return (
        <>
            <ThanksStyles>
                <h1>Contact Me!</h1>
                <h2>Thanks, I'll get back to you ASAP!</h2>
                <div className="back">
                    <Link to={`/`}>
                        <span className="backButton">Back</span>
                    </Link>
                </div>
            </ThanksStyles>
        </>
    )
};

export default thanks;
