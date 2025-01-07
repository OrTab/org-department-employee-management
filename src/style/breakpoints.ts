export const breakpoints = {
  small: 440,
  medium: 768,
  large: 992,
  xLarge: 1200,
};

export const upToSmall = `@media (max-width: ${breakpoints.small}px)`;
export const smallUp = `@media (min-width: ${breakpoints.small}px)`;
export const upToMedium = `@media (max-width: ${breakpoints.medium}px)`;
export const mediumUp = `@media (min-width: ${breakpoints.medium}px)`;
