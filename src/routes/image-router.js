 
let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');

const fileWorker = require('../controllers/image-controller.js');
 
router.post('/upload', upload.single("data"), fileWorker.uploadFile);
router.get('/images', fileWorker.getAllImages);

module.exports = router;