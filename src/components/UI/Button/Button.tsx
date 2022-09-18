import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.type';

const Button = ({ children, variant, onClick, width }: ButtonProps) => {
	return (
		<StyledButton onClick={onClick} variant={variant} width={width}>
			{children}
		</StyledButton>
	);
};
export default Button;
