import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled.aside`
  background-color: var(--color-bg, #15202b);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #38444d;

  @media (min-width: 500px) {
    flex-direction: column;
    justify-content: flex-start;
    position: static;
    height: 100vh;
    border-right: 1px solid #38444d;
    padding: 0 1rem;
  }
`;

export const OptionWrapper = styled.div`
  cursor: pointer;
  padding: 1rem;

  &:first-child {
    display: none;
  }

  @media (min-width: 500px) {
    margin: 0 auto;

    &:hover a {
      background-color: rgba(254, 19, 146, 0.5);
    }

    &:first-child:hover a {
      background-color: transparent;
    }

    &:first-child {
      cursor: default;
      display: block;

      img {
        margin: 0;
      }
    }

    @media (min-width: 700px) {
      margin: 0;
    }
  }
`;

export const OptionLink = styled(Link)`
  padding: 0.2rem 1rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-primary);
  font-weight: 700;
  font-size: var(--font-medium);
  display: flex;
  align-items: center;

  span {
    display: none;
  }

  @media (min-width: 500px) {
    width: fit-content;
    border-radius: 9999px;
    transition: background-color 0.1s ease-in-out;
  }

  @media (min-width: 700px) {
    span {
      display: inline;
    }

    img {
      margin-right: 1rem;
    }
  }
`;
