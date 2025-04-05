import styled from 'styled-components';

export const EditDetails = styled.section``;

export const ProfileWrapper = styled.div`
  display: none;

  @media (min-width: 700px) {
    align-self: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-bg-secondary);
    margin: 1rem 0 0 1rem;
    padding: 1rem;
    border-radius: 5px;
    position: sticky;
    right: 0;
    top: 1rem;

    p {
      color: white;
      font-size: var(--font-small);
      margin: 0.5rem 0;
    }

    a {
      margin: 0.5rem 0;
      color: white;
      font-size: var(--font-small);
    }

    button {
      background-color: var(--color-fg);
      color: var(--color-primary);
      font-weight: 700;
      cursor: pointer;
      margin: 0.5rem 0;
      padding: 0.5rem;
      font-size: var(--font-small);
      border: none;
    }
  }
`;

export const ProfilePfp = styled.section`
  position: relative;

  img:first-child {
    border-radius: 50%;
  }

  img:last-child {
    position: absolute;
    bottom: -5px;
    right: -10px;
    cursor: pointer;
    margin: 0;
  }
`;

export const EditProfileWrapper = styled.div`
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

  input:focus {
    outline: none;
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

export const EditButton = styled.div`
  position: relative;

  input {
    width: 25px;
    height: 25px;
    opacity: 0;
    position: absolute;
    bottom: -5px;
    right: -10px;
    cursor: pointer;
    z-index: 10;
  }
`;

export const ProfileInfoWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;

  span {
    color: var(--color-primary);
    font-size: 5rem;
    position: fixed;
    top: 0;
    right: 10px;
    cursor: pointer;
  }
`;

export const ProfileInfoData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  p,
  a {
    text-align: center;
    color: var(--color-primary);
    font-size: var(--font-small);
  }
`;
