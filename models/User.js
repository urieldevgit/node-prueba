const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_FACTOR = 10;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // this email could not be repeated
  },
  password: {
    type: String,
    required: true,

  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

userSchema.pre('save', function saltFunction(next) {
  const user = this;
  if (!user.isModified('password')) return next();

  return bcrypt.genSalt(SALT_FACTOR, (error, salt) => {
    if (error) return next(error);

    return bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      return next();
    });
  });
});

const User = mongoose.model('User', userSchema);

module.exports = User;
