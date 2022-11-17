const UserService = require('../services/UserService');
const { validationResult } = require('express-validator');

class AuthController {
  async login(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const userData = await UserService.verify(req.body);

      if (userData?.error) {
        console.log(userData)
        return res.status(500).json({
          errors: [
            {msg: userData.error}
          ]
        })
      }

      res.status(200).json(userData)
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }

  async registration(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ 
          errors: errors.array(),
        })
      }

      const newUser = await UserService.create(req.body);

      if (newUser?.error) {
        console.log(newUser)
        return res.status(500).json({
          errors: [
            {msg: newUser.error}
          ]
        })
      }
      
      res.status(201).json({ message: 'Пользователь создан' });
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }
}

module.exports = new AuthController();