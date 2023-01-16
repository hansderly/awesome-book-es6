import { DateTime } from './luxon.js';

const option = {
  month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
};

const today = DateTime.now();
const todayFormat = today.setLocale('en-US').toLocaleString(option).replace(' at', ',');
const time = document.querySelector('.time-text');
time.innerHTML = todayFormat;

export default time;