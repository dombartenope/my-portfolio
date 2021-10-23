import { Link } from 'gatsby'
import React from 'react'
import p from '../projects/projects.json'
import { Image } from '../components/Image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ProjectsStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    color: var(--white);
    padding: 2rem;
    text-align: center;
    width: 80vw;
    .logo {
        padding: 0 .5rem;
    }
    h1 {
        color: var(--glow);
        font-size: 3rem;
        margin-bottom: 1rem;
        text-shadow: var(--text-shadow);
    }
    @media (max-width: 934px) and (min-width: 761px) {
        .logo {
            width: 50px;
            height: 60px;
        }
    }
    @media (max-width: 760px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto-fit;
        gap: 1rem;
        .logo {
            width: 50px;
            height: 50px;
        }
    }
`;

const ProjectListStyles = styled.div`
    margin-bottom: 3rem;
    padding: .5rem;
    .header {
        margin-bottom: 1rem;
        padding: 4px;
    }
`;

const projects = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProjectsStyles>
                {p.map(project => (
                    <ProjectList
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        src={project.src}
                        technology={project.tech}
                    />
                ))}
            </ProjectsStyles>
        </motion.div>
    )
}

const ProjectList =
    ({
        id,
        title,
        src,
        technology,
    }) => {
        return (
            <ProjectListStyles>
                <SEO title={"Projects"} />
                <div className="inner">
                    <div className="header">
                        <Link to={`/projects/${id}`}>
                            <h1>{title}</h1>
                        </Link>
                        {technology.map((tech, i) => {
                            return (
                                <img key={i} className="logo" width="70px" height="70px" src={require(`../../assets/images/${tech}.svg`)} alt={tech} />
                            )
                        })}
                    </div>
                    <Image src={src} />
                </div>

            </ProjectListStyles>
        )
    }


export default projects
