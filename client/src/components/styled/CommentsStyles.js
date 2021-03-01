import styled from 'styled-components';

export const CommentsWrapper = styled.main`
  border-left: 1px solid #38444d;
  border-right: 1px solid #38444d;
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

  input:first-child {
    background-color: transparent;
    color: var(--color-primary);
    margin: 1rem 0 1rem 1rem;
    padding: 1rem;
    border: 1px solid #38444d;
    border-radius: 5px;
    font-size: var(--font-small);
    flex: 1;

    &:focus {
      outline: none;
    }
  }

  input:nth-child(2) {
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

  svg {
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
`;