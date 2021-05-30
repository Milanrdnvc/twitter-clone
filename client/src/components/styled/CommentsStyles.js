import styled from 'styled-components';

export const CommentsWrapper = styled.main`
  border-left: 1px solid #38444d;
  border-right: 1px solid #38444d;
  margin-bottom: 200px;
`;

export const CommentsHeader = styled.header`
  color: white;
  font-size: var(--font-small);
  font-weight: 700;
  padding: 1rem;
  border-bottom: 1px solid #38444d;
  position: sticky;
  top: 0;
  background-color: var(--color-bg);
  z-index: 100;
`;

export const SubmitCommentWrapper = styled.div`
  border-top: 1px solid #38444d;
`;

export const SubmitCommentForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 30px;
    height: 30px;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 0.5rem;
    cursor: pointer;
  }

  img {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
    margin-right: 0.5rem;
  }

  button {
    border: none;
    color: var(--color-primary, white);
    background-color: var(--color-fg, #fa0095);
    padding: 0.3rem 1rem;
    font-size: var(--font-small, 1rem);
    border-radius: 50000px;
    font-weight: 600;
    cursor: pointer;
    margin: 0 1rem;
  }
`;

export const SubmitCommentOptions = styled.div`
  position: relative;
  flex: 1;
  display: flex;

  & > div {
    color: var(--color-primary);
    margin: 1rem 0 1rem 1rem;
    padding: 1rem;
    border: 1px solid #38444d;
    border-radius: 5px;
    font-size: var(--font-small);
    flex: 1;

    &:empty:not(:focus)::before {
      color: var(--color-secondary, #192734);
      content: 'Write your comment';
    }

    &:focus {
      outline: none;
    }
  }
`;

export const SubmitCommentImagePreview = styled.div`
  position: relative;

  span {
    font-size: var(--font-large, 2rem);
    background-color: rgba(0, 0, 0, 0.7);
    color: var(--color-primary, white);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    top: 30px;
    right: 30px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  img {
    padding: 1rem;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  padding: 1rem;
  border-top: 1px solid #38444d;

  &:last-child {
    border-bottom: 1px solid #38444d;
  }

  & > img {
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;

export const CommentContent = styled.div`
  color: white;
  font-family: sans-serif;
  font-size: var(--font-small);

  p {
    margin: 0 0 1rem 0;
  }

  strong,
  em {
    color: var(--color-secondary, #b4b4b4);
  }

  strong {
    cursor: pointer;
  }

  strong:hover {
    text-decoration: underline;
  }

  img {
    width: 100%;
    border-radius: 20px;
  }
`;
