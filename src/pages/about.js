import React from 'react'
import styled from 'styled-components';

const AboutStyles = styled.div`
    margin: auto;
    h1 {
        margin-top: 3rem;
        text-align: center;
        font-size: 3rem;
        color: var(--glow);
        text-shadow: var(--text-shadow);
        margin-bottom: 1rem;
    }
    .container {
        margin: auto;
        max-width: 80%;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.6);
        padding: 1rem;
        h2 {
            text-align: center;
            padding: 1.5rem;
        }
        span {
            position: relative;
            color: var(--glow);
            text-shadow: var(--text-shadow);
        }
        span:hover {
            cursor: default;
        }
        span:before {
            color: black;
            text-shadow: none;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 5px;
            position: absolute;
            left: -3.5rem;
            top: 2rem;
        }
        span:hover:before {
            content: '⬉ (mostly)';
        }
        .grid1 {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 1rem;
            align-items: center;
        }
        .grid2 {
            display: grid;
            grid-template-columns: 2fr 1fr;
            align-items: center;
        }
    }
`;

const about = () => {
    return (
        <AboutStyles>
            <h1>About Me</h1>
            <div className="container">
                <h2>
                    Hey my name is Dom, and
                </h2>
                <h2>Here are some of my other favorite things:</h2>
                <div className="grid1">
                    <img src='https://images.unsplash.com/photo-1605401430429-1be9523a39d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' alt="pic" width="450px" height="300px" />
                    <h3>I love car. It go drive and beep. I use car for the fuck in back seat.</h3>
                </div>
                <div className="grid2">
                    <h3>This my wife. She young and cute. I met her online.</h3>
                    <img src="https://images.unsplash.com/photo-1605425971671-aed55e6f4660?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" alt="My wife" width="450px" height="300px" />
                </div>
            </div>
        </AboutStyles>
    )
}

export default about

// Keeping up to date with emerging technologies
