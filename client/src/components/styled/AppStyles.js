import { createGlobalStyle } from 'styled-components';

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
  --font-large: 2rem;
  --font-medium: 1.5rem;
  --font-small: 1rem;
}
`;
