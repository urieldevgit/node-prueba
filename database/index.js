const mongoose = require('mongoose');

const URL = process.env.DB_URL;

mongoose.connect(URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  // eslint-disable-next-line no-console
  (error) => (error ? console.error(error)
    // eslint-disable-next-line no-console
    : console.info('Database Connected Successfully')));

module.exports = mongoose;
