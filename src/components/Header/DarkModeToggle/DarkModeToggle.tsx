import {
  StyledDarkModeToggle,
  StyledDarkModeButton,
  StyledDarkModeButtonDot,
  StyledSunIcon,
  StyledMoonIcon,
} from './DarkModeToggle.styled';

import sunIcon from '../../../assets/desktop/icon-sun.svg';
import moonIcon from '../../../assets/desktop/icon-moon.svg';
import { useState } from 'react';

const DarkModeToggle = () => {
  const [darkModeIsOn, setDarkModeIsOn] = useState<boolean>(false);

  const darkModeHandler = () => {
    setDarkModeIsOn(isOn => !isOn);
  };

  return (
    <StyledDarkModeToggle>
      <StyledSunIcon src={sunIcon}></StyledSunIcon>
      <StyledDarkModeButton onClick={darkModeHandler}>
        <StyledDarkModeButtonDot
          isDark={darkModeIsOn}
        ></StyledDarkModeButtonDot>
      </StyledDarkModeButton>
      <StyledMoonIcon src={moonIcon}></StyledMoonIcon>
    </StyledDarkModeToggle>
  );
};

export default DarkModeToggle;
