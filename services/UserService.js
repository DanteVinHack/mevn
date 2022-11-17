const User = require('../models/User');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

class UserService {
  async create({ username, password }) {
    try {
      const candidate = await User.findOne({ username });

      if (candidate) {
        return {
          error: 'Такой пользователь уже существует'
        }
      }

      const hashedPassword = await bcrypt.hash(password, 9)
      const newUser = new User({ 
        username, 
        password: hashedPassword,
      });

      await newUser.save();

      console.log(await User.find())

      return newUser; 
    } catch(e) {
      console.log(e);
    }
  }

  async verify({ username, password }) {
    try {
      const user = await User.findOne({ username });

      if (!user) {
        return {
          error: 'Такого пользователь уже существует'
        }
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);
  
      if (!isPasswordMatch) {
        return {
          error: 'Неверный пароль'
        }
      }

      const token = await jwt.sign({ userId: user.id }, config.get('jwt_key'));

      return { token, userId: user._id };
    } catch(e) {
      console.log(e);
    }
  }
}

module.exports = new UserService();