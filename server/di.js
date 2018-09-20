import Bottle from 'bottlejs';
import requestIp from 'request-ip';
import geoip from 'geoip-lite';
import axios from 'axios';

const bottle = new Bottle();
bottle.service('getIp', () => req => requestIp.getClientIp(req));
bottle.service('getCity', () => (ip) => {
  const { city } = geoip.lookup(ip);
  console.log(ip, city);
  return city;
});
bottle.service('http', () => async (url) => {
  const { data } = await axios(url);
  return data;
});

export default bottle;
