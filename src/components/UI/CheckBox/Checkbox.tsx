import CheckIcon from './icon/CheckIcon';
import { StyledCheckbox, StyledCheckmark } from './Checkbox.style';
import { CheckboxType } from '../../../types';

const Checkbox = ({ name, id, onClick, checked }: CheckboxType) => (
	<StyledCheckmark checked={checked} onClick={onClick}>
		<StyledCheckbox type='checkbox' name={name} id={id} />
		{checked && <CheckIcon />}
	</StyledCheckmark>
);

export default Checkbox;
