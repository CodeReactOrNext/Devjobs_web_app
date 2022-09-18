import { StyledCheckbox, StyledCheckmark } from './Checkbox.style';
import { CheckboxProps } from './Checkbox.type';
import CheckIcon from './icon/CheckIcon';

const Checkbox = ({ name, id, onClick, checked }: CheckboxProps) => (
  <StyledCheckmark checked={checked} onClick={onClick}>
    <StyledCheckbox type="checkbox" name={name} id={id} />
    {checked && <CheckIcon />}
  </StyledCheckmark>
);

export default Checkbox;
