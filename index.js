require('dotenv').config();
const {app, PORT} = require('./server');
require('./database');

app.listen(PORT,
    (error) => error ? console.error(error) : console.info(`Running server on PORT: ${PORT}`)
);
