import styled from 'styled-components';

export default styled.div`
  color: red;
  background-color: rgba(255, 0, 0, 0.2);
  padding: 1rem 5rem;
  border-radius: 5px;
  font-family: sans-serif;
  font-size: var(--font-small, 1rem);
  margin: 1rem;
  display: flex;
  align-items: center;

  span {
    padding: 0 1rem;
    color: rgba(255, 0, 0);
    cursor: pointer;
    font-size: var(--font-large, 2rem);
  }
`;
