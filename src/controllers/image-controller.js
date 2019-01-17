const Service = require('../services/image-service');

const ImageService = new Service();
const jwt = require('jsonwebtoken')
const Database = require('../models/index');
	
// var stream = require('stream');
 

const uploadFile = async (req, res) => {
  let decoded = null;
  let userId = null;
  try {
    const authorization = req.headers.authorization;
    try {
      decoded = jwt.verify(authorization, process.env.JWT_SECRET);
    } catch (e) {
      return res.status(401).send('unauthorized');
    }
    const u = await Database.User.findOne({
      where: {
        username: decoded.username,
      }
    })
    userId = u.id;
    console.log(userId)
    ImageService.uploadImage(userId, req.file.buffer).then(() => {
      res.status(201).json({msg:'File uploaded successfully! -> filename = ' + req.name});
    });
  }
  catch(error){
    res.status(500).json({error: error.message});
  }
}

const getAllImages = async (req, res) => {
  try {
    const response = await ImageService.getAllImages();
    res.status(200).json({data: response});
  }
  catch(error){
    res.status(500).json({error: error.message});
  }
}

module.exports = {
  uploadFile,
  getAllImages
}

// exports.uploadFile = (req, res) => {
// 	File.create({
// 		type: req.file.mimetype,
// 		name: req.file.originalname,
// 		data: req.file.buffer
// 	}).then(() => {
// 		res.json({msg:'File uploaded successfully! -> filename = ' + req.file.originalname});
// 	}).catch(err => {
// 		console.log(err);
// 		res.json({msg: 'Error', detail: err});
// 	});
// }
 
// exports.listAllFiles = (req, res) => {
// 	File.findAll({attributes: ['id', 'name']}).then(files => {
// 	  res.json(files);
// 	}).catch(err => {
// 		console.log(err);
// 		res.json({msg: 'Error', detail: err});
// 	});
// }
 
// exports.downloadFile = (req, res) => {
// 	File.findById(req.params.id).then(file => {
// 		var fileContents = Buffer.from(file.data, "base64");
// 		var readStream = new stream.PassThrough();
// 		readStream.end(fileContents);
		
// 		res.set('Content-disposition', 'attachment; filename=' + file.name);
// 		res.set('Content-Type', file.type);
 
// 		readStream.pipe(res);
// 	}).catch(err => {
// 		console.log(err);
// 		res.json({msg: 'Error', detail: err});
// 	});
// }