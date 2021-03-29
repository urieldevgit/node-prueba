const express = require('express');

const router = express.Router();
const UserRouter = require('./UserRouter');
const AuthRouter = require('./AuthRouter');

router.get('/', (req, res) => res.status(200).send('Get endpoint with Routes'));

router.use(UserRouter);
router.use(AuthRouter);

module.exports = router;
