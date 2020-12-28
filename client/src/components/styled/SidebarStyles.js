import styled from 'styled-components';

export default styled.aside`
  color: red;
  background-color: var(--color-bg, #15202b);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const OptionsStyles = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  margin: 0;
  border-top: 1px solid gray;
`;

export const OptionStyles = styled.li`
  max-width: 30px;
`;

export const ProfileStyles = styled.div`
  display: none;
`;
