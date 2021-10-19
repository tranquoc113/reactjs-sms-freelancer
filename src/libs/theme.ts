import getLessVars from 'src/utils/getLessVars';

const color = getLessVars('color', true);
const box_shadow_base = getLessVars('box-shadow-base', true);
const space = getLessVars('space', true);

const theme = {
  color,
  space,
  box_shadow_base,
};

export type Theme = typeof theme;

export default theme;
