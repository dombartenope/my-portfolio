import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/yeshi-kangrang-Qq7A85iCzhQ-unsplash.jpg'

const GlobalStyles = createGlobalStyle`
    :root {
        --red: #FF4949;
        --grey: #efefef;
        --white: #fff;
        --glow: #fff6a9;
        --box-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
        --text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    }

    body {
        height: 100vh;
        background: #111;
        background-image: url(${bg});
        background-size: cover;
        p {
            color: var(--white);
        }
    }

    #___gatsby {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
    }

    /* Scrollbar Styles */
    body::-webkit-scrollbar {
        width: 12px;
    }
    html {
        scrollbar-width: thin;
        scrollbar-color: var(--grey) #333;
    }
    body::-webkit-scrollbar-track {
        background: #333;
    }
    body::-webkit-scrollbar-thumb {
        background-color: var(--grey) ;
        border-radius: 6px;
        border: 3px solid #333;
    }

    img {
    max-width: 100%;
    }

    @keyframes blink {
        20%,
        24%,
        55% {
            color: #111;
            text-shadow: none;
        }

        0%,
        19%,
        21%,
        23%,
        25%,
        54%,
        56%,
        100% {
        text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
            color: var(--glow);
        }
    }
`;

export default GlobalStyles