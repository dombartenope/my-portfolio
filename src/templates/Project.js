import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Image } from '../components/Image';


const SingleProjectStyles = styled.div`
    color: var(--white);
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .top {
        margin-top: 1rem;
        position: relative;
        width: 60vw;
        .clickMe {
            color: var(--glow);
            text-shadow: var(--text-shadow);
            font-size: 1.5rem;
            animation: blink 8s linear infinite;
        }
        .clickMe:after {
            content: '⤴'
        }
    }
    .container {
        max-width: 80%;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.6);
        padding-bottom: 10px;
    }
    .grid {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: minmax(300px, 1fr);
        gap: 1rem;
    }
    .logos {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .features {
        text-align: left;
        color: var(--glow);
        text-shadow: var(--text-shadow);
        animation: blink 10s linear infinite;
    }
    .featuresList, .logos {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    @media (max-width: 640px) {
        .grid {
            grid-template-columns: 1fr;
            grid-template-rows: minmax(100px, 1fr);
            gap: 1rem;
        }
        .logos {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            max-height: 100px;
            margin: 0;
        }
        .features {
            text-align: center;
        }
        .featuresList {
            margin: auto;
            padding: 5px;
            line-height: 20px;
        }
    }
    h1 {
        text-align: center;
        font-size: 3rem;
        color: var(--glow);
        margin-top: 1rem;
        margin-bottom: 1rem;
        text-shadow: var(--text-shadow);
    }
    h2 {
        padding: 10px;
        text-align: center;
        width: 80%;
        margin: auto;
    }
    p {
        text-align: center;
    }
    .back {
        text-align: center;
    }
    .backButton:before {
        content: '←';
        color: var(--glow);
        text-shadow: var(--text-shadow);
    }
    .gatsby-image-wrapper {
        margin: auto;
        max-width: 50vw;
    }
    @media (max-width: 1080px) {
        .gatsby-image-wrapper {
            max-width: 60vw;
        }
    }
    @media (max-width: 640px) {
        .gatsby-image-wrapper {
            min-width: 90%;
            min-height: 100%;
        }
    }
    
`;

const Project = ({ pageContext }) => {
    const project = pageContext;

    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 640) {
                setIsDesktop(false);
            } else {
                setIsDesktop(true);
            };
        }, [isDesktop])
    });

    return (
        <>
            <SingleProjectStyles>
                <div className="top">
                    <a href={project.url}><h1 className="main-headline">{project.title}</h1>
                        <Image src={isDesktop ? project.src : project.mobile} />
                    </a>
                    <p>(Check It Out)<span className="clickMe"></span></p>
                </div>
                <div className="container">
                    <h2>
                        {project.description}
                    </h2>
                    <div className="grid">
                        <div className="logos">
                            {project.tech.map((t, i) => (
                                <img key={i} width="60px" height="60px" src={require(`../../assets/images/${t}.svg`)} alt={t} />
                            ))}
                        </div>
                        <div className="featuresList">
                            <h3 className="features">Features:</h3>
                            {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}

                        </div>
                    </div>
                    <div className="back">
                        <Link to={`/projects`}>
                            <span className="backButton">Back</span>
                        </Link>
                    </div>
                </div>

            </SingleProjectStyles>
        </>
    )
}

export default Project
