import styled from 'styled-components';

export default styled.aside`
  color: red;
  background-color: blue;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const OptionsStyles = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`;

export const OptionStyles = styled.li`
  max-width: 30px;
`;
