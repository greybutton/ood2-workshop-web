import Express from 'express';
import requestIp from 'request-ip';
import geoip from 'geoip-lite';
import axios from 'axios';

export default () => {
  const app = new Express();

  app.get('/weather', async (req, res) => {
    const clientIp = requestIp.getClientIp(req);
    const { city } = geoip.lookup(clientIp);
    const api = 'http://api.openweathermap.org/data/2.5/';
    const key = '&APPID=af85ac894f9ddf863e28168893b4747f';
    const weather = `weather?q=${city}`;
    const url = `${api}${weather}${key}`;
    const { data } = await axios(url);
    res.json({ data });
  });

  return app;
};
