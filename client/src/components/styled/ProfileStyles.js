import styled from 'styled-components';

export const EditDetails = styled.section``;

export default styled.div`
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > span {
    color: var(--color-primary);
    font-size: 5rem;
    position: fixed;
    top: 0;
    right: 10px;
    cursor: pointer;
  }
`;

export const Details = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  span {
    color: var(--color-primary);
    font-size: var(--font-medium);
  }

  img {
    margin-bottom: 1rem;
    border-radius: 50%;
  }

  small {
    color: var(--color-primary);
    font-size: var(--font-small);
    margin: 0.1rem 0;

    a {
      color: var(--color-primary);
    }
  }
`;

export const EditDetailsForm = styled.form`
  display: flex;
  flex-direction: column;

  input,
  button {
    margin: 0.5rem 0;
    padding: 0.5rem;
    font-size: var(--font-small);
    border: none;
  }

  input:focus,
  button:focus {
    outline: none;
  }

  input:focus {
    box-shadow: 0 0 0.3rem 0.1rem var(--color-fg);
  }

  button {
    background-color: var(--color-fg);
    color: var(--color-primary);
    font-weight: 700;
    cursor: pointer;
  }

  @media (min-width: 700px) {
    max-width: 60%;
    margin: auto;
  }

  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;
