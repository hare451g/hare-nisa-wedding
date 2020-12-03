import heroMorning from '../../assets/hero_morning.jpg';
import heroNoon from '../../assets/hero_noon.jpg';
import heroNight from '../../assets/hero_night.jpg';

import { TIME_KEYS } from '../../lib/timeChecker';

const navlist = [
  {
    link: '#hero',
    label: 'Home',
  },
  {
    link: '#gallery',
    label: 'Gallery',
  },
  {
    link: '#rundown',
    label: 'Rundown',
  },
  {
    link: '#guestbook-form',
    label: 'Guestbook',
  },
];

const selection = {
  [TIME_KEYS.NIGHT]: heroNight,
  [TIME_KEYS.NOON]: heroNoon,
  [TIME_KEYS.MORNING]: heroMorning,
};

export { navlist, selection };
