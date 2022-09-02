import React from 'react';
import ReactDOM from 'react-dom';
import { StyledModal, StyledOverlay } from './Modal.styled';

interface Props {
  backdropHandler: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

export default function Modal({ backdropHandler, children }: Props) {
  return ReactDOM.createPortal(
    <>
      <StyledOverlay
        onClick={() => {
          backdropHandler(false);
        }}
      ></StyledOverlay>
      <StyledModal>{children}</StyledModal>
    </>,
    document.getElementById('modal')!
  );
}
