const mongoose = require('mongoose');
const URL = process.env.DB_URL;

mongoose.connect(URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (error) => error ? console.error(error) : 
    console.info("Database Connected Successfully")
);

module.exports = mongoose;