const { Router } = require('restify-router');
const planetController = require('../controllers/planetController');

const router = new Router();

router.get('/planets', planetController.index);

module.exports = router;
