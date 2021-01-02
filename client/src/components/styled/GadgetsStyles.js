import styled from 'styled-components';

export default styled.div`
  display: none;
  margin-left: 1rem;

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
  margin-top: 0.5rem;
`;

export const TrendsWrapper = styled.div`
  margin-top: 1rem;
`;

export const TrendsHeader = styled.div`
  color: var(--color-primary, white);
  font-family: sans-serif;
  font-weight: 600;
  font-size: var(--font-small);
  border: 1px solid gray;
  padding: 1rem;
`;

export const Trend = styled.div`
  color: var(--color-primary, white);
  font-family: sans-serif;
  border: 1px solid gray;
  padding: 1rem;
  em {
    color: var(--color-secondary);
  }
`;

export const WhoToFollowWrapper = styled.div``;
