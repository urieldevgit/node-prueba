const express = require('express');

const router = express.Router();
const UserController = require('../controllers/UserController');

// eslint-disable-next-line spaced-comment
//const middleware = require('../middlewares');

const UserValidator = require('../validators/UserValidator');

const BASE_URL = '/users';

// router.use(middleware.validateToken);

router.post(BASE_URL, UserValidator.create, UserController.create);
router.get(BASE_URL, UserController.getUsers);

module.exports = router;
