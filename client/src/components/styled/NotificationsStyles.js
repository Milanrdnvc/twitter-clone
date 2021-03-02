import styled from 'styled-components';

export const NotificationsWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  padding: 1rem;
  overflow: auto;
  padding-top: 70px;

  & > span {
    color: var(--color-primary);
    font-size: 5rem;
    position: fixed;
    top: 0;
    right: 10px;
    cursor: pointer;
  }
`;

export const NotificationWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 5px;

  span {
    color: white;
    font-size: var(--font-small);
  }

  img {
    margin-right: 0.2rem;
  }

  &:hover {
    background-color: rgba(207, 17, 121, 0.8);
  }
`;
