import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  // body {
  //   font-family: 'Barlow', sans-serif;
  // }

  // body.fontLoaded {
  //   font-family: 'Barlow', sans-serif;
  // }

  #app {
    background-color: #F8FAFC;
    min-height: 100%;
    min-width: 100%;
  }

  // p,
  // label {
  //   font-family: 'Barlow', sans-serif;
  //   line-height: 1.5em;
  // }
`;

export default GlobalStyle;
