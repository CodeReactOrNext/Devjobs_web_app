import { StyledButton } from './Button.styled';
import { ButtonProps } from '../../types/types';

const Button = ({ children, variant, onClick }: ButtonProps) => {
	return (
		<StyledButton onClick={onClick} variant={variant}>
			{children}
		</StyledButton>
	);
};
export default Button;
