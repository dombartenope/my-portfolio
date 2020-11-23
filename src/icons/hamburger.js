import React from 'react'
import styled from 'styled-components';
import useMenu from '../utils/useMenu';

const HamburgerStyles = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    min-height: 100px;
    .menu-btn {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }

    .menu-btn-burger {
        width: 50px;
        height: 6px;
        background: var(--glow);
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
        transition: all .5s ease-in-out;
        box-shadow: var(--box-shadow);
        
    }

    .menu-btn-burger::before,
    .menu-btn-burger::after {
        content: '';
        position: absolute;
        width: 50px;
        height: 6px;
        background: var(--glow);
        border-radius: 5px;
        /* box-shadow: 0 2px 5px rgba(255, 101, 47, .2); */
        transition: all .5s ease-in-out;
        box-shadow: var(--box-shadow);
        
    }

    .menu-btn-burger::before {
        transform: translateY(-16px);
    }
    .menu-btn-burger::after {
        transform: translateY(16px);
    }

    .menu-btn.open 
    .menu-btn-burger {
        transform: translateX(-50px);
        background: transparent;
        box-shadow: none;
    }

    .menu-btn.open
    .menu-btn-burger::before {
        transform: rotate(45deg) translate(35px, -35px); 
    }
    .menu-btn.open
    .menu-btn-burger::after {
        transform: rotate(-45deg) translate(35px, 35px); 
    }
`;

const Hamburger = () => {
    const { menuOpen, changeMenu } = useMenu();

    return (
        <HamburgerStyles onClick={changeMenu}>
            <div className={menuOpen ? 'menu-btn open' : 'menu-btn'}>
                <div className="menu-btn-burger">
                </div>
            </div>
        </HamburgerStyles >
    )
}

export default Hamburger
