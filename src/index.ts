import {app} from './app';

const port = process.env.PORT || 8080;

console.log(port);

app.listen(port, () => {
  console.log('Server started');
});