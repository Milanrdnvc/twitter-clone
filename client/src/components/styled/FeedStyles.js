import styled from 'styled-components';

export default styled.main`
  min-height: 100vh;
  background-color: var(--color-bg, #15202b);
  max-width: 800px;
  border-right: 1px solid gray;
`;

export const FeedHeader = styled.header`
  color: var(--color-primary, white);
  font-family: sans-serif;
  font-weight: 600;
  font-size: var(--font-small);
  position: sticky;
  top: 0;
  height: 50px;
  background-color: var(--color-bg);
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

export const CreateTweetBtn = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 70px;
  right: 20px;
  background-color: var(--color-fg, #fa0095);
  border-radius: 50%;
  cursor: pointer;

  @media (min-width: 500px) {
    display: none;
  }
`;

export const CreateTweetWrapper = styled.div`
  display: flex;

  @media (min-width: 500px) {
    flex-grow: 1;
    padding: 1rem 0.5rem;
  }
`;

export const CreateTweetForm = styled.textarea`
  font-family: sans-serif;
  font-size: var(--font-medium, 1rem);
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  resize: none;
  color: var(--color-primary, white);

  @media (min-width: 500px) {
    border: none;
  }
`;

export const CreateTweetPfp = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const CreateTweetOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const TweetBtn = styled.button`
  border: none;
  color: var(--color-primary, white);
  background-color: var(--color-fg, #fa0095);
  padding: 0.3rem 1rem;
  font-size: var(--font-small, 1.5rem);
  border-radius: 50000px;
  font-weight: 600;
  cursor: pointer;
`;

export const CreateTweetFormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-grow: 1;
  }
`;

export const CreateTweetBlurBg = styled.div`
  position: fixed;
  top: 20%;
  bottom: 20%;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    position: static;
    background-color: transparent;
  }
`;

export const TweetWrapper = styled.div`
  display: flex;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 1rem 0.5rem;
`;

export const TweetInfo = styled.div`
  color: white;
  font-family: sans-serif;
  font-size: var(--font-small);
  p {
    margin: 0;
  }

  strong,
  em {
    color: var(--color-secondary, #b4b4b4);
  }

  strong {
    cursor: pointer;
  }
`;

export const TweetPfp = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const TweetOptions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;
