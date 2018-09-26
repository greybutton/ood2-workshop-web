import Bottle from 'bottlejs';
import requestIp from 'request-ip';
import geoip from 'geoip-lite';
import axios from 'axios';

const bottle = new Bottle();
bottle.service('getIp', () => requestIp.getClientIp);
bottle.service('getCity', () => geoip.lookup);
bottle.service('http', () => axios);

export default bottle;
