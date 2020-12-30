import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
    initial: { x: -1000, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { delay: 0.5 } },
    exit: { opacity: 0 }
}

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

const Thanks = () => {
    return (
        <>
            <ThanksStyles>
                <h1>Contact Me!</h1>
                <motion.h2
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >Thanks! I'll get back to you ASAP</motion.h2>
                <div className="back">
                    <Link to={`/`}>
                        <span className="backButton">Back</span>
                    </Link>
                </div>
            </ThanksStyles>
        </>
    )
};

export default Thanks;
