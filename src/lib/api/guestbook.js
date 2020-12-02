import axios from 'axios';

const BASE_URL = 'https://hare-nisa-wedding.herokuapp.com';

const guestbook = {
  getEntries: () => axios.get(BASE_URL),
  postNewEntry: (message, name) => axios.post(BASE_URL, { name, message }),
};

export default guestbook;
