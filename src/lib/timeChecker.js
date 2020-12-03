const CURRENT_HOURS = new Date().getHours();

export const TIME_MAP = {
  isMorning: CURRENT_HOURS >= 6 && CURRENT_HOURS < 10,
  isNoon: CURRENT_HOURS >= 10 && CURRENT_HOURS < 17,
  isNight: CURRENT_HOURS >= 17 || CURRENT_HOURS < 6,
};

export const TIME_KEYS = {
  MORNING: 'MORNING',
  NOON: 'NOON',
  NIGHT: 'NIGHT',
};

const timeChecker = () => {
  console.log(CURRENT_HOURS);
  if (TIME_MAP.isMorning) {
    return TIME_KEYS.MORNING;
  } else if (TIME_MAP.isNoon) {
    return TIME_KEYS.NOON;
  } else if (TIME_MAP.isNight) {
    return TIME_KEYS.NIGHT;
  } else {
    return TIME_KEYS.MORNING;
  }
};

export default timeChecker;
