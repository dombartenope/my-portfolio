import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Image } from '../components/Image';
import { motion } from 'framer-motion';

const variants = {
    initial: { opacity: 0, x: 1000 },
    animate: {
        opacity: 1, x: 0, transition: {
            delay: 0.5
        }
    },
    exit: { opacity: 0 }
}

const AboutStyles = styled.div`
    margin: auto;
    h1 {
        margin-top: 3rem;
        text-align: center;
        font-size: 3rem;
        color: var(--glow);
        text-shadow: var(--text-shadow);
        margin-bottom: 3rem;
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
        .name, .baker {
            color: var(--glow);
            text-shadow: var(--text-shadow);
        }
        .baker {
            cursor: pointer;
        }
        .half {
            font-weight: bold;
        }
        .gatsby-image-wrapper {
            border-radius: 3px;
            max-height: 675px;
        }
        .grid1 {
            display: grid;
            grid-template-columns: 1.5fr 1.5fr;
            gap: 1rem;
            align-items: center;
            padding: 5px;
        }
        .grid2 {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 1rem;
            align-items: center;
            padding: 5px;
        }
        @media (max-width: 640px) {
            .grid1, .grid2 {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
        }
    }
`;

const About = () => {
    //Calculating Vandal's birthday
    const dob = '20190707';
    const year = Number(dob.substr(0, 4));
    const month = Number(dob.substr(4, 2)) - 1;
    const day = Number(dob.substr(6, 2));
    const today = new Date();
    let age = today.getFullYear() - year;
    let half = ''
    if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
        age--;
    }
    if ((today.getMonth() - month) > 6) {
        half = '½'
    }

    const [isDesktop, setIsDesktop] = useState();
    const [isBadBaker, setIsBadBaker] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 640) {
            setIsDesktop(false);
        } else {
            setIsDesktop(true);
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 640) {
                setIsDesktop(true);
            } else {
                setIsDesktop(false);
            };
        })
    });

    return (

        <AboutStyles>
            <motion.h1
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
            >About Me</motion.h1>
            <div className="container">
                <h2>
                    Hi I'm <span className="name">Dom</span> and I don't just love programming...
                    </h2>
                <div className="grid1">
                    <Image src={5} />
                    <h3>Meet Vandal, he is {age} <span className="half">{half}</span> {age === 1 && !half ? 'year' : 'years'} old. The story goes: I wasn't going to get a dog, but my roommates brought me to meet one they were looking at for themselves. The breeder handed me this 3 week old puppy, and I knew I was holding my future best friend.</h3>
                </div>
                <div className="grid2">
                    {!isDesktop && <Image src={6} />}
                    <h3>When it comes to hiking, love is a strong word. On just about every hike, I almost immediately regret it five minutes in. Once I get my stride though, you can't beat the views and the fresh air. It also helps that Vandal gets super excited and pulls me up the mountains.</h3>
                    {isDesktop && <Image src={6} />}
                </div>
                <div className="grid1">
                    <Image src={!isBadBaker ? 7 : 8} />
                    <h3>This time last year, I couldn't boil water correctly to make pasta. In fear of getting disowned by my italian family of amazing cooks, I tried making something new every day. Doing so, I found a love for cooking, and only burn stuff 20% of the time. Just don't ask me to bake anything yet, I've still got a lot of learning to do... <small>(Click <span className="baker" onClick={() => setIsBadBaker(!isBadBaker)}>here</span> to see how that went)</small></h3>
                </div>
            </div>
        </AboutStyles >

    )
};

export default About;

// Keeping up to date with emerging technologies
