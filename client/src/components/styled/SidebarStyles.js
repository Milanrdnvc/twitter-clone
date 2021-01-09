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

export const OptionsWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  margin: 0;
  border-top: 1px solid #38444d;

  @media (min-width: 500px) {
    flex-direction: column;
    border-top: none;
  }

  @media (min-width: 1004px) {
    align-items: flex-start;
  }
`;

export const Option = styled.a`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  border-radius: 20px;

  &:hover {
    background-color: rgba(250, 0, 149, 0.3);
  }

  svg {
    width: 30px;
    cursor: pointer;
  }

  @media (min-width: 500px) {
    margin: 1rem 0;
  }

  @media (min-width: 1004px) {
    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const OptionText = styled.div`
  text-decoration: none;
  color: var(--color-primary, white);
  font-family: sans-serif;
  font-weight: 600;
  font-size: var(--font-medium);
  display: none;

  @media (min-width: 1004px) {
    display: block;
  }
`;

export const SettingsTooltipWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const SettingsTooltip = styled.div`
  width: 200px;
  position: absolute;
  background-color: var(--color-bg);
  border-radius: 10px;
  box-shadow: 2px 1px 30px -5px rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  div {
    color: var(--color-primary, white);
    font-family: sans-serif;
    flex: 1;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  @media (min-width: 500px) {
  }
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
