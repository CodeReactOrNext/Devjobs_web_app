import React from 'react';
import ReactDOM from 'react-dom';
import { StyledModal, StyledOverlay } from './Modal.styled';
import { ModalProps } from './Modal.type';

export default function Modal({ backdropHandler, children }: ModalProps) {
	return ReactDOM.createPortal(
		<>
			<StyledOverlay
				onClick={() => backdropHandler(false)}
			></StyledOverlay>
			<StyledModal>{children}</StyledModal>
		</>,
		document.getElementById('modal')!
	);
}
