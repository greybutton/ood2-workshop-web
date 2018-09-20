import app from '..';

const port = process.env.PORT || 4000;
app().listen(port, () => {
  console.log(`Server was started on '${port}'`);
});
