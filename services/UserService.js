const User = require('../models/User');

module.exports = {
  create: (body) => {
    const newUser = new User(body);
    return newUser.save();
  },
  getUsers: () => User.find({ isActive: true }),
  getUserByEmail: (userEmail) => User.findOne({ email: userEmail }),
};
