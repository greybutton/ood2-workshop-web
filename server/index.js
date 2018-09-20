import '@babel/polyfill';
import Express from 'express';

export default (di) => {
  const app = new Express();

  app.get('/weather', async (req, res) => {
    const ip = di.container.getIp(req);
    const city = di.container.getCity(ip);
    const api = 'http://api.openweathermap.org/data/2.5/';
    const key = '&APPID=af85ac894f9ddf863e28168893b4747f';
    const weather = `weather?q=${city}`;
    const url = `${api}${weather}${key}`;
    const data = await di.container.http(url);
    res.json(data);
  });

  return app;
};
