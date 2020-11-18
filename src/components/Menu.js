import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Hamburger from '../icons/hamburger';
import useMenu from '../utils/useMenu';

const MenuStyles = styled.nav`
    color: var(--white);
    ul {
        margin: 0;
        padding: 0;
        display: grid;
        gap: 3rem;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        list-style: none;
        align-items: center;
    }
    li {
        order: 1;
        animation: blink 12s linear infinite;
    }
    a {
        text-align: center;
        display: block;
        text-decoration: none;
    }
    @media (max-width: 510px) {
        --columns: 4;
        ul {
            grid-template-rows: auto auto;
            grid-template-columns: repeate(var(--columns), 1fr);
            justify-items: center;
        }
        .logo {
            order: 0;
            grid-column: 1 / -1;
            transform: none;
            margin-bottom: -2rem;
        }
    }
`;


const Menu = () => {
    const {
        menuOpen
    } = useMenu();

    return (
        <MenuStyles>
            <ul>
                {/* Pull menu state in from global state to hide/show menu items */}
                {menuOpen ? (
                    <>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/projects`}>Projects</Link>
                        </li>
                    </>
                ) : ''}
                <li className="logo">
                    <Hamburger />
                </li>
                {menuOpen ? (
                    <>
                        <li>
                            <Link to={`/contact`}>Contact Me</Link>
                        </li>
                        <li>
                            <Link to={`/about`}>About Me</Link>
                        </li>
                    </>
                ) : ""}

            </ul>
        </MenuStyles >
    )
}

export default Menu;
