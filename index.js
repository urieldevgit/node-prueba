// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
const { app, PORT } = require('./server');
require('./database');

app.listen(PORT,
  // eslint-disable-next-line no-console
  (error) => (error ? console.error(error) : console.info(`Running server on PORT: ${PORT}`)));
