const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { JWT_SECRET } = process.env;

module.exports = {
  comparePasswords: (newPassword, password) => bcrypt.compareSync(newPassword, password),
  createToken: (payload) => jwt.sign(payload, JWT_SECRET, { expiresIn: '30d' }),
};
