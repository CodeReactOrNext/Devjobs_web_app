import React from 'react';
import ReactDOM from 'react-dom';
import { ModalType } from '../../../types';
import { StyledModal, StyledOverlay } from './Modal.styled';

export default function Modal({ backdropHandler, children }: ModalType) {
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
