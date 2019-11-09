import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex: 1;
    height: 100%;
  }
  body, html {
      height: 100%;
      margin: 0;
  }
`;
