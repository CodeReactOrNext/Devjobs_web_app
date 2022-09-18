import { forwardRef } from 'react';
import { StyledInput } from './Input.styled';
import { InputPropsType, RefInputType } from './Input.type';

const Input = forwardRef<RefInputType, InputPropsType>(
	({ placeholder }, ref) => <StyledInput ref={ref} placeholder={placeholder} />
);

export default Input;
