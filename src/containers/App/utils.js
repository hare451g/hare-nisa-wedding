// theme
import nightTheme from '../../lib/themes/nightTheme';
import morningTheme from '../../lib/themes/morningTheme';
import noonTheme from '../../lib/themes/noonTheme';

// time keys
import { TIME_KEYS } from '../../lib/timeChecker';

export const themeMap = {
  [TIME_KEYS.MORNING]: morningTheme,
  [TIME_KEYS.NOON]: noonTheme,
  [TIME_KEYS.NIGHT]: nightTheme,
};
