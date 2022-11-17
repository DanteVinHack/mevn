const { Router } = require('express');
const { check } = require('express-validator');
const controller = require('../controllers/AuthController');
const router = Router();

router.post(
  '/login',
  [
    check('username', 'Неккоректное имя пользователя').isLength({ min: 5 }),
    check('password', 'Минимальная длинна пароля 7 симоволов').exists()
  ],    
  controller.login);

router.post(
  '/registration', 
  [
    check('username', 'Неккоректное имя пользователя').isLength({ min: 5 }),
    check('password', 'Минимальная длинна пароля 7 симоволов').isLength({ min:7 })
  ], 
  controller.registration);

module.exports = router;