const express = require('express');
const router = express.Router();
const UserRouter = require('./UserRouter');

router.get('/', (req, res) => res.status(200).send('Get endpoint with Routes'));

router.use(UserRouter);

module.exports = router;