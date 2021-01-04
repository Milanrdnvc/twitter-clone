import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'sans-serif';
  background-color: var(--color-bg);
}

:root {
  --color-bg: #15202b;
  --color-bg-secondary: #192734;
  --color-bg-tertiary: #253341;
  --color-fg: #fa0095;
  --color-primary: white;
  --color-secondary: #b4b4b4;
  --font-large: 2rem;
  --font-medium: 1.5rem;
  --font-small: 1rem;
}
`;
