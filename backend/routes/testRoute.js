var express = require('express');
const router = express.Router()

const TestController = require('../controllers/testController');
const upload = require('../middleware/upload')
const authenticate = require('../middleware/authenticate')

router.get('/index', authenticate, TestController.index);
router.post('/show', TestController.show);
router.post('/store', upload.single('image'), TestController.store);
router.post('/update', TestController.update);
router.post('/delete', TestController.destroy);


module.exports = router;
