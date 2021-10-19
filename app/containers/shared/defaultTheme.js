// Typography
const fonts = {
  Gotham:
    "Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

export const font = fonts.Gotham;
export const fontFamilies = fonts;

export const fontSizes = [
  '0.625rem', // 0
  '0.75rem', // 1
  '0.875rem', // 2
  '1rem', // 3
  '1.125rem', // 4
  '1.25rem', // 5
  '1.375rem', // 6
  '1.5rem', // 7
  '1.75rem', // 8
  '2rem', // 9
  '2.25rem', // 10
  '2.5rem', // 11
  '2.75rem', // 12
  '3rem', // 13
  '3.25rem', // 14
  '3.5rem', // 15
  '3.75rem', // 16
  '4rem', // 17
  '4.25rem', // 18
  '4.5rem', // 19
  '4.75rem', // 20
  '5rem', // 21
  '5.25rem', // 22
  '5.5rem', // 23
  '5.75rem', // 24
  '6rem', // 25
];

export const fontWeights = [300, 400, 500, 700];

export const lineHeights = [
  '0.875rem', // 0
  '1rem', // 1
  '1.125rem', // 2
  '1.25rem', // 3
  '1.5rem', // 4
  '1.75rem', // 5
  '2.25rem', // 6
  '2.50rem', // 7
  '3.5rem', // 8
  '4.5rem', // 9
  '3rem', // 10
  '2rem', // 11
];

export const letterSpacings = [1.6, 1.2, -0.2, 1, 2.0];

export const borderWidths = {
  read: '0',
  hover: '1px',
  unread: '4px',
};
// Colors
export const colors = {
  accessibleOrange: '#C35500',
  accessibleBlue: '#156BA3',
  pureWhite: '#FFFFFF',
  white: '#FFFFFF',
  softWhite: '#F5F5F5',
  paleGrey: '#DEDEDE',
  freedomCharcoal: '#4E4E4E',
  pureBlack: '#000000',
  orange: '#C35500',
  blue: '#156BA3',
  brandBlue: '#2873b8',
  grey: '#DEDEDE',
  accessibleGrey: '#8f8f8f',
  charcoal: '#4E4E4E',
  black: '#000000',
  errorRed: '#CC0000',
  transparent: 'transparent',
};

export const breakpoints = ['992px'];
export const mediaqueryBreakpoints = {
  sm: breakpoints[0],
  md: breakpoints[0],
  lg: breakpoints[0],
  xl: breakpoints[0],
};
export const space = [
  '0', // 0
  '0.25rem', // 1
  '0.375rem', // 2
  '0.5rem', // 3
  '0.625rem', // 4
  '0.75rem', // 5
  '0.875rem', // 6
  '1rem', // 7
  '1.125rem', // 8
  '1.25rem', // 9
  '1.375rem', // 10
  '1.5rem', // 11
  '1.75rem', // 12
  '2rem', // 13
  '2.25rem', // 14
  '2.5rem', // 15
  '2.75rem', // 16
  '3rem', // 17
  '3.25rem', // 18
  '3.5rem', // 19
  '3.75rem', // 20
  '4rem', // 21
  '4.25rem', // 22
  '4.5rem', // 23
  '4.75rem', // 24
  '5rem', // 25
  '5.25rem', // 26
  '5.5rem', // 27
  '5.75rem', // 28
  '6rem', // 29
  'auto', // 30
  '-0.125rem', // 31
  '-0.25rem', // 32
  '-0.375rem', // 33
  '-0.5rem', // 34
  '-0.75rem', // 35
  '-1rem', // 36
  '6.25rem', // 37
];

export const radius = 4;
export const buttons = {
  primary: {
    color: colors.pureWhite,
    backgroundColor: colors.accessibleOrange,
    backgroundSize: '200% 200%',
    padding: '1.25em 1.5em',
    border: 'none',
    '&:hover': {
      '@media only screen and (min-width: 992px)': {
        backgroundImage: `linear-gradient(
            to top,
            ${colors.pureBlack} 50%,
            transparent 50%
          )`,
        backgroundPosition: '0 100%',
        transition: 'background-position 300ms, color 300ms ease',
      },
    },
    '&:active': {
      backgroundImage: `linear-gradient(
            to top,
            ${colors.accessibleBlue} 50%,
            transparent 50%
          )`,
      backgroundPosition: '0 100%',
      backgroundColor: colors.accessibleBlue,
    },
    '&:disabled': {
      backgroundImage: 'none',
      backgroundColor: colors.paleGrey,
      color: colors.freedomCharcoal,
      cursor: 'default',
    },
  },
  greyed: {
    color: colors.freedomCharcoal,
    backgroundColor: colors.paleGrey,
    backgroundSize: '200% 200%',
    padding: '1.25em 1.5em',
    cursor: 'default',
    border: 'none',
    '&:hover': {
      backgroundImage: 'none',
    },
    '&:active': {
      backgroundImage: 'none',
      backgroundColor: colors.paleGrey,
    },
  },
  secondary: {
    color: colors.freedomCharcoal,
    backgroundColor: colors.pureWhite,
    border: `0.125em solid ${colors.accessibleOrange}`,
    transition: `0.1s ease-in-out`,
    padding: '1.125em 1.5em',
    '&:hover': {
      '@media only screen and (min-width: 992px)': {
        padding: '1.125em 1.5em 0.875em 1.5em',
        borderBottom: `0.375em solid ${colors.accessibleOrange}`,
      },
    },
    '&:active': {
      borderColor: colors.accessibleBlue,
      padding: '1.125em 1.5em 0.875em 1.5em',
      borderBottom: `0.375em solid ${colors.accessibleBlue}`,
    },
  },
  primaryDark: {
    color: colors.pureWhite,
    backgroundColor: colors.accessibleOrange,
    backgroundSize: '200% 200%',
    padding: '1.25em 1.5em',
    border: 'none',
    '&:hover': {
      '@media only screen and (min-width: 992px)': {
        color: colors.pureBlack,
        backgroundImage: `linear-gradient(
            to top,
            ${colors.pureWhite} 50%,
            transparent 50%
          )`,
        backgroundPosition: '0 100%',
        transition: 'background-position 300ms, color 300ms ease',
      },
    },
    '&:active': {
      backgroundImage: `linear-gradient(
            to top,
            ${colors.accessibleBlue} 50%,
            transparent 50%
          )`,
      backgroundPosition: '0 100%',
      color: colors.pureWhite,
      backgroundColor: colors.accessibleBlue,
    },
  },
  secondaryDark: {
    color: colors.pureWhite,
    backgroundColor: 'transparent',
    padding: '1.025em 0.5em',
    border: `0.125em solid ${colors.pureWhite}`,
    transition: `0.1s ease-in-out`,
    '&:hover': {
      '@media only screen and (min-width: 992px)': {
        padding: '1.125em 1.5em 0.875em 1.5em',
        borderBottom: `0.375em solid ${colors.pureWhite}`,
      },
    },
    '&:active': {
      borderColor: colors.accessibleBlue,
      padding: '1.125em 1.5em 0.875em 1.5em',
      borderBottom: `0.375em solid ${colors.accessibleBlue}`,
    },
  },
  secondaryDarkFooter: {
    color: colors.pureWhite,
    backgroundColor: 'transparent',
    padding: '0.75em 17.59px 1.125em 17.59px',
    border: `0.125em solid ${colors.pureWhite}`,
    transition: `0.1s ease-in-out`,
    '&:hover': {
      '@media only screen and (min-width: 992px)': {
        padding: '0.75em 17.59px 0.875em',
        borderBottom: `0.375em solid ${colors.pureWhite}`,
      },
    },
    '&:active': {
      borderColor: colors.accessibleBlue,
      padding: '0.75em 17.59px 0.875em',
      borderBottom: `0.375em solid ${colors.accessibleBlue}`,
    },
  },
};

export const checkBoxes = {
  unchecked: {
    cursor: 'pointer',
    border: `0.125em solid ${colors.freedomCharcoal}`,
    background: `${colors.white}`,
  },
  checked: {
    cursor: 'pointer',
    border: `0.05em solid ${colors.blue}`,
    background: `${colors.blue}`,
  },
  disabled: {
    cursor: 'default',
    border: `0.05em solid ${colors.grey}`,
    background: `${colors.grey}`,
  },
};

const zindexDropdown = 1000;
const zindexSticky = 1020;
const zindexFixed = 1030;
const zindexModalBackdrop = 1040;
const zindexModal = 1050;
const zindexPopover = 1060;
const zindexTooltip = 1070;
const zindexPlanHeader = 0;
const zindexPlanContent = -1;

export const zIndices = [
  zindexDropdown, // 0
  zindexSticky, // 1
  zindexFixed, // 2
  zindexModalBackdrop, // 3
  zindexModal, // 4
  zindexPopover, // 5
  zindexTooltip, // 6
  zindexPlanHeader, // 7
  zindexPlanContent, // 8
];

export const variants = {
  cardLink: {
    textDecoration: 'none',
    border: '0.1em solid transparent',
    '&:hover': {
      border: '0.1em solid black',
      textDecoration: 'none',
    },
  },
  unstyledList: {
    listStyle: 'none',
  },
  paleGreyBorder: {
    border: `1px solid  ${colors.paleGrey}`,
  },
  paleGreyBorderBottom: {
    borderBottom: `1px solid  ${colors.paleGrey}`,
  },
  blackBorderBottom: {
    borderBottom: `0.18rem solid ${colors.black}`,
  },
  bannerLink: {
    '&:hover': {
      textDecoration: 'underline',
      fontWeight: 'bold',
      color: 'white',
    },
    color: 'white',
  },
};

export default {
  breakpoints,
  buttons,
  checkBoxes,
  colors,
  font,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  radius,
  space,
  variants,
  zIndices,
};
