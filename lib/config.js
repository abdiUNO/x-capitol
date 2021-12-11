import moment from 'moment';
const privacyPolicy = require('/privacy-policy.json');
const Config = require('/config.json');

let cache = null;

export function fetchPrivacyPolicy() {
  if (!cache) {
    cache = {
      date: moment(privacyPolicy.date).format('MMM Do YYYY'),
      content: privacyPolicy.body || '',
    };
  }

  return cache;
}

export default Config;
