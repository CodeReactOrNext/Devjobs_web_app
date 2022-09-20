import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  padding: 1.5rem;
  background-color: #fff;
  transform: translate(-50%, -50%);
  border-radius: 6px;
`;

export const StyledOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;
