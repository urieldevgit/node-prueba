const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

const BASE_URL = '/users';
router.post(BASE_URL, UserController.create);
router.get(BASE_URL, UserController.getUsers);

module.exports = router;
