const { Router } = require('express');
const controller = require('../controllers/RedirectController')
const router = Router();

router.get('/:code', controller.redirect)

module.exports = router;