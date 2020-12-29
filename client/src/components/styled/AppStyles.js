import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'sans-serif';
}

:root {
  --color-bg: #15202b;
  --color-fg: #fa0095;
  --color-primary: white;
  --color-secondary: #b4b4b4;
  --font-large: 2rem;
  --font-medium: 1.5rem;
  --font-small: 1rem;
}
`;

export const AppWrapperStyles = styled.div`
  @media (min-width: 500px) {
    display: flex;
  }
`;
