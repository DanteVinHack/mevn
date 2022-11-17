const config = require('config');
const jwt = require("jsonwebtoken");

module.exports.checkAuth = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    
    if (!token) {
      res.status(401).json({ message: 'Нет авторизации' })
    }
    
    const decoded = jwt.verify(token, config.get('jwt_key'))
    req.user = decoded;
    next();

  } catch (e) {
    console.log(e);
    res.status(401).json({ message: 'Нет авторизации' })
  }
}