import Bottle from 'bottlejs';
import requestIp from 'request-ip';
import geoip from 'geoip-lite';
import axios from 'axios';

const bottle = new Bottle();
bottle.service('requestIp', () => requestIp);
bottle.service('geoip', () => geoip);
bottle.service('http', () => axios);

export default bottle;
