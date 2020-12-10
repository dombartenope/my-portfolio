import React, { useState } from 'react';
import styled from 'styled-components';
import { Image } from '../components/Image';

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
        line-height: calc(5px + 3vw);
        h2 {
            text-align: center;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }
        small {
            font-size: 10px;
        }
        .name {
            color: var(--glow);
            text-shadow: var(--text-shadow);
        }
        .half {
            font-weight: bold;
        }
        .gatsby-image-wrapper {
            border-radius: 3px;
        }
        .grid1 {
            display: grid;
            grid-template-columns: 1.5fr 1.5fr;
            gap: 1rem;
            align-items: center;
        }
        .grid2 {
            display: grid;
            grid-template-columns: 2fr 1fr;
            align-items: center;
        }
        @media (max-width: 640px) {
            .grid1 {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
        }
    }
`;

const about = () => {
    const dob = '20190707';
    const year = Number(dob.substr(0, 4));
    const month = Number(dob.substr(4, 2)) - 1;
    const day = Number(dob.substr(6, 2));
    const today = new Date();
    console.log(today.getDate())
    let age = today.getFullYear() - year;
    let half = ''
    if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
        age--;
    }
    if ((today.getMonth() - month) > 6) {
        half = '½'
    }

    return (
        <AboutStyles>
            <h1>About Me</h1>
            <div className="container">
                <h2>
                    Hi I'm <span className="name">Dom</span> and I don't just love programming...
                </h2>
                <div className="grid1">
                    <Image src={5} />
                    <h3>Meet Vandal, he is {age} <span className="half">{half}</span> {age === 1 && !half ? 'year' : 'years'} old. The story goes: I wasn't going to get a dog, but my roommates brought me to meet one they were looking at for themselves. The breeder handed me this 3 week old puppy, and I knew I was holding my future best friend. <small>(Click to see Vandal's first day home with me)</small></h3>
                </div>
            </div>
        </AboutStyles>
    )
};

export default about;

// Keeping up to date with emerging technologies
