const UserService = require('../services/UserService');
const Utils = require('../utils');

module.exports = {
  create: async (req, res) => {
    try {
      const user = await UserService.create(req.body);
      res.status(201).send({ user });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await UserService.getUsers();
      res.status(200).send({ users });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
  login: async (req, res) => {
    try {
      const user = await UserService.getUserByEmail(req.body.email);
      if (!user) res.status(400).send({ message: 'Login Incorrect' });
      const isMatch = Utils.comparePasswords(req.body.password, user.password);
      if (!isMatch) res.status(400).send({ message: 'Login Incorrect' });
      const payload = {
        // eslint-disable-next-line no-underscore-dangle
        id: user._id,
        name: user.name,
        lastname: user.lastName,
        email: user.email,
      };
      const token = Utils.createToken(payload);
      if (!token) res.status(500).send({ message: 'Error creating token' });
      res.status(200).send({ message: 'Login Successfuly', token });
    } catch (error) {
      res.status(500).send({ error });
    }
  },
};
