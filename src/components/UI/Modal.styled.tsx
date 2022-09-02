import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 6px;
  z-index: 1000;
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
