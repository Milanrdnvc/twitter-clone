import styled from 'styled-components';

export default styled.aside`
  background-color: var(--color-bg, #15202b);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  @media (min-width: 500px) {
    position: static;
    height: 100vh;
    border-right: 1px solid #38444d;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 50px;
  margin-bottom: 2rem;
  display: none;

  @media (min-width: 500px) {
    display: block;
  }
`;
