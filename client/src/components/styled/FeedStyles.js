import styled from 'styled-components';

export default styled.main`
  &::-webkit-scrollbar {
    display: none;
  }

  max-height: 100vh;
  overflow-y: scroll;
  -moz-scroll: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: var(--color-bg, #15202b);
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

export const CreateTuwueetWrapper = styled.div`
  display: flex;

  @media (min-width: 500px) {
    flex-grow: 1;
    padding: 1rem 0.5rem;
  }
`;

export const CreateTuwueetTextInput = styled.textarea`
  font-family: sans-serif;
  font-size: var(--font-medium, 1rem);
  background-color: transparent;
  border: none;
  resize: none;
  color: var(--color-primary, white);
`;

export const CreateTuwueetPfp = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const CreateTuwueetOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const TuwueetBtn = styled.button`
  border: none;
  color: var(--color-primary, white);
  background-color: var(--color-fg, #fa0095);
  padding: 0.3rem 1rem;
  font-size: var(--font-small, 1rem);
  border-radius: 50000px;
  font-weight: 600;
  cursor: pointer;
`;

export const CreateTuwueetForm = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-grow: 1;
  }
`;

export const TuwueetWrapper = styled.div`
  display: flex;
  border-top: 0.5px solid gray;
  border-bottom: 0.5px solid gray;
  padding: 1rem 0.5rem;
  transition: background-color 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--color-bg-tertiary);
  }
`;

export const TuwueetInfo = styled.div`
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

  img {
    width: 100%;
    border-radius: 20px;
  }
`;

export const TuwueetPfp = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const TuwueetOptions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;
