import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled.aside`
  background-color: var(--color-bg, #15202b);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* display: flex; */

  @media (min-width: 500px) {
    position: static;
    height: 100vh;
    border-right: 1px solid #38444d;
    padding: 1rem;
  }
`;

export const OptionWrapper = styled.div`
  cursor: pointer;
  padding: 1rem;

  @media (min-width: 500px) {
    &:hover a {
      background-color: rgba(254, 19, 146, 0.5);
    }

    &:first-child:hover a {
      background-color: transparent;
    }

    &:first-child {
      cursor: default;

      img {
        margin: 0;
      }
    }
  }
`;

export const OptionLink = styled(Link)`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.2rem 1rem;
  border-radius: 9999px;
  transition: background-color 0.1s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-primary);
  font-weight: 700;
  font-size: var(--font-medium);

  img {
    margin-right: 1rem;
  }
`;
