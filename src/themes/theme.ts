const color = {
  violet: '#5964e0',
  lightViolet: '#939BF4',
  veryDarkBlue: '#19202D',
  midnight: '#121721',
  white: '#FFFFFF',
  lightGrey: '#F4F6F8',
  dirtyWhite: '#eff0fc',
  dirtyViolet: '#c5c9f4',
  gray: ' #9DAEC2',
  mediumGray: '#303642',
  lightmGray: '#696e76',
  darkGray: '#6E8098',
};

export const theme = {
  basicColor: color.white,
  themeColor: color.violet,
  themeSecondColor: color.lightViolet,
  mainBackground: color.lightGrey,
  boxBackground: color.white,
  headingText: color.veryDarkBlue,
  regularText: color.gray,
  buttonSecond: color.dirtyWhite,
  buttonSecondText: color.violet,
  buttonSecondHover: color.dirtyViolet,
  themeMode: 'lightMode',

  darkMode: {
    mainBackground: color.midnight,
    boxBackground: color.veryDarkBlue,
    headingText: color.white,
    regularText: color.darkGray,
    buttonSecond: color.mediumGray,
    buttonSecondHover: color.lightGrey,
    buttonSecondText: color.white,
    themeMode: 'darkMode',
  },

  textHeading: {
    h1: `
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;`,
    h2: `
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;`,
    h3: `
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;`,
    h4: `
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;`,
  },
};
