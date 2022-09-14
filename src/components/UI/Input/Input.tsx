import { forwardRef } from 'react';
import { StyledInput } from './Input.styled';
import { RefInputType, InputPropsType } from '../../../types';

const Input = forwardRef<RefInputType, InputPropsType>(
	({ placeholder }, ref) => <StyledInput ref={ref} placeholder={placeholder} />
);

export default Input;
