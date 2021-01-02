import styled from 'styled-components';

export default styled.div`
  display: none;
  margin-left: 1rem;
  width: 800px;

  @media (min-width: 1004px) {
    display: block;
  }
`;

export const SearchWrapper = styled.input`
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: var(--font-small);
  color: var(--color-primary, white);
  padding: 0.3rem;
  margin-top: 1rem;
  width: 100%;
`;

export const TrendsWrapper = styled.div`
  margin-top: 1rem;
  border-radius: 10px;
  /* width: 200px; */
  background-color: var(--color-bg-secondary, #192734);
`;

export const TrendsHeader = styled.div`
  color: var(--color-primary, white);
  font-family: sans-serif;
  font-weight: 600;
  font-size: var(--font-small);
  padding: 1rem;
`;

export const Trend = styled.div`
  color: var(--color-primary, white);
  font-family: sans-serif;
  border-top: 1px solid gray;
  padding: 1rem;
  em {
    color: var(--color-secondary);
  }
`;

export const WhoToFollowWrapper = styled.div``;
