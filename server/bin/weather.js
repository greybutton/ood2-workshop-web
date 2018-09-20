import app from '..';
import di from '../di';

const port = process.env.PORT || 4000;
app(di).listen(port, () => {
  console.log(`Server was started on '${port}'`);
});
