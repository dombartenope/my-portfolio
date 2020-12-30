import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Hamburger from '../icons/hamburger';
import useMenu from '../utils/useMenu';
import { AnimatePresence } from 'framer-motion';

const MenuStyles = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    color: var(--white);
    .logo {
        order:0;
        grid-column: 1 / -1;
        transform: none;
        gap: 0;
        margin-bottom: -2rem;
    }
    ul {
        margin: auto;
        padding: 0;
        display: grid;
        gap: 3rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        list-style: none;
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
    @media (max-width: 640px) {
        gap: 1rem;
        --columns: 2;
        ul {
            grid-template-rows: auto auto;
            grid-template-columns: repeat(var(--columns), 1fr);
            justify-items: center;
        }
        .logo {
            order: 0;
            grid-column: 1 / -1;
            transform: none;
            margin-bottom: -4rem;
        }
    }
`;


const Menu = () => {
    const {
        menuOpen
    } = useMenu();

    return (
        <MenuStyles>
            <AnimatePresence exitBeforeEnter>
                <ul>
                    <li className="logo">
                        <Hamburger />
                    </li>
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
            </AnimatePresence>
        </MenuStyles >
    )
}

export default Menu;
