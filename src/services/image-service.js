const Database = require('../models/index');

class ImageService {
  constructor() {
    this.File = Database.Image;
    this.uploadImage = async (userId, data) => {
      this.File.create({
        data,
        userId
      }).then(() => {
        console.log('usr', userId),
        console.log('upload success');
      }).catch(err => {
        console.log(err);
        throw err;
      });
    }

    this.getAllImages = async () => {
      return this.File.findAll();
    }

  }
}

module.exports = ImageService;