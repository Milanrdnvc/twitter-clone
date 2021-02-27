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
