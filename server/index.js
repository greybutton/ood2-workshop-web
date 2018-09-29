import '@babel/polyfill';
import Express from 'express';

export default (di) => {
  const app = new Express();

  app.get('/weather', async (req, res) => {
    const {
      requestIp,
      geoip,
      http,
    } = di.container;
    const ip = requestIp.getClientIp(req);
    const { city } = geoip.lookup(ip);
    const api = 'http://api.openweathermap.org/data/2.5/';
    const key = '&APPID=af85ac894f9ddf863e28168893b4747f';
    const weather = `weather?q=${city}`;
    const url = `${api}${weather}${key}`;
    try {
      const { data } = await http(url);
      res.json(data);
    } catch (e) {
      const { response: { data } } = e;
      res.status(data.cod);
      res.json(data);
    }
  });

  return app;
};
