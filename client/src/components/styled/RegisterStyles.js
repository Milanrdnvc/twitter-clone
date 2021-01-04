import styled from 'styled-components';

export default styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    color: var(--color-primary, white);
    font-family: sans-serif;
    font-size: var(--font-small, 1rem);
  }

  a {
    color: var(--color-fg, #fa0095);
  }
`;

export const RegisterHeading = styled.h1`
  color: var(--color-primary, white);
  font-size: var(--font-large, 2rem);
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 50px;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  font-size: var(--font-small);
  padding: 1rem;

  @media (min-width: 600px) {
    width: 600px;
  }
`;

export const RegisterUsernameInput = styled.input`
  font-size: inherit;
  padding: inherit;

  &:focus {
    border: 1px solid var(--color-fg, #fa0095);
  }
`;

export const RegisterEmailInput = styled.input`
  font-size: inherit;
  padding: inherit;

  &:focus {
    border: 1px solid var(--color-fg, #fa0095);
  }
`;

export const RegisterPasswordInput = styled.input`
  font-size: inherit;
  padding: inherit;

  &:focus {
    border: 1px solid var(--color-fg, #fa0095);
  }
`;

export const RegisterSubmit = styled.button`
  border: none;
  color: var(--color-primary, white);
  background-color: var(--color-fg, #fa0095);
  padding: 0.3rem 1rem;
  font-size: var(--font-small, 1rem);
  border-radius: 50000px;
  font-weight: 600;
  cursor: pointer;
`;
