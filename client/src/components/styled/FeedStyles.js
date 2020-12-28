import styled from 'styled-components';

export default styled.main`
  min-height: 100vh;
  background-color: var(--color-bg, #15202b);
`;

export const CreateTweetBtnStyles = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 70px;
  right: 20px;
  background-color: var(--color-fg, #fa0095);
  border-radius: 50%;
  cursor: pointer;
`;

export const CreateTweetStyles = styled.div`
  /* display: none; */
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;

export const CreateTweetFormStyles = styled.textarea`
  font-family: sans-serif;
  font-size: var(--font-medium, 1rem);
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  resize: none;
  color: var(--color-primary, white);
`;

export const CreateTweetPfpStyles = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const CreateTweetOptionsStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const TweetBtnStyles = styled.button`
  border: none;
  color: var(--color-primary, white);
  background-color: var(--color-fg, #fa0095);
  padding: 0.3rem 1rem;
  font-size: var(--font-small, 1.5rem);
  border-radius: 50000px;
  font-weight: 600;
  cursor: pointer;
`;

export const CreateTweetWrapperStyles = styled.div`
  display: flex;
  flex-direction: column;
`;
