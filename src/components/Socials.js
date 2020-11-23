import React from 'react'
import gmail from '../../assets/images/gmail.svg';
import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';
import styled from 'styled-components';
import { Link } from 'gatsby';

const SocialsStyles = styled.div`
    
    ul {
        padding: 5px;
        margin: 0;
        padding: 5px;
        max-width: 100%;
        display: block;
    }
    li {
        display: inline;
        margin: auto;
        padding: 3px;
        list-style: none;
    }
`;

const Socials = () => {
    return (
        <SocialsStyles>
            <ul>
                <li><Link to={`/contact`}>
                    <img width="30px" height="30px" src={gmail} alt="Email Me" />
                </Link></li>
                <li><a href="https://github.com/dombartenope">
                    <img width="30px" height="30px" src={github} alt="Github" />
                </a></li>
                <li><a href="https://www.linkedin.com/in/dominick-bartenope/">
                    <img width="30px" height="30px" src={linkedin} alt="Linkedin" />
                </a></li>
            </ul>
        </SocialsStyles>
    )
};

export default Socials;
