import { createGlobalStyle } from 'styled-components';

import Quicksand from '../assets/fonts/Quicksand-Bold.otf';
import Sacramento from '../assets/fonts/Sacramento-Regular.ttf';

const Typography = createGlobalStyle`
  /* H1 title font */
  @font-face {
    font-family: Sacramento;
    src: url(${Sacramento});
  }
  /* Default font */
  @font-face {
    font-family: Quicksand;
    src: url(${Quicksand});
  }
  html {
    font-family: Quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    h1 {
      font-family: Sacramento, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', cursive;
    }
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  .center {
    text-align: center;
  }
`;

export default Typography;