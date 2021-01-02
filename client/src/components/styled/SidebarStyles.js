import styled from 'styled-components';

export default styled.aside`
  color: red;
  background-color: var(--color-bg, #15202b);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  @media (min-width: 500px) {
    position: static;
    height: 100vh;
    border-right: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
`;

export const OptionsWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  margin: 0;
  border-top: 1px solid gray;

  @media (min-width: 500px) {
    flex-direction: column;
    border-top: none;
  }
`;

export const Option = styled.li`
  max-width: 30px;
  margin: 0.5rem;
`;

export const ProfileWrapper = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: block;
  }
`;

export const ProfilePfp = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
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
