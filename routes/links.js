const { Router } = require('express');
const { checkAuth } = require('../middleware');
const controller = require('../controllers/LinksController');
const router = Router();

router.post('/generate', checkAuth, controller.create);

router.get('/', checkAuth, controller.getAll);

router.get('/:id', checkAuth, controller.getById);

module.exports = router;