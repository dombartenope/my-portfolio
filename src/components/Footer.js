import React from 'react'
import styled from 'styled-components';
import Socials from './Socials';

const FooterStyles = styled.div`
    color: var(--white);
    margin-top: 50px;
    text-align: center;
    width: 100%;
    @media (min-width: 1200px) {
        margin-top: 100px;
    }
`;

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterStyles>
            <Socials />
            <small>
                Dom Bartenope {currentYear} &copy;
            </small>
        </FooterStyles>
    )
}

export default Footer
