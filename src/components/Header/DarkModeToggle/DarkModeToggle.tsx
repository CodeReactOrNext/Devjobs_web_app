import {
  StyledDarkModeToggle,
  StyledDarkModeButton,
  StyledDarkModeButtonDot,
  StyledSunIcon,
  StyledMoonIcon,
} from './DarkModeToggle.styled';

import sunIcon from '../../../assets/desktop/icon-sun.svg';
import moonIcon from '../../../assets/desktop/icon-moon.svg';

interface Props {
  darkModeHandler: () => void;
}

const DarkModeToggle = ({ darkModeHandler }: Props) => {
  return (
    <StyledDarkModeToggle>
      <StyledSunIcon src={sunIcon}></StyledSunIcon>
      <StyledDarkModeButton onClick={darkModeHandler}>
        <StyledDarkModeButtonDot></StyledDarkModeButtonDot>
      </StyledDarkModeButton>
      <StyledMoonIcon src={moonIcon}></StyledMoonIcon>
    </StyledDarkModeToggle>
  );
};

export default DarkModeToggle;
