'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
      get() {
        return this.getDataValue('data').toString('base64'); // or whatever encoding is right
      },
    },
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.User,{
      foreignKey: 'userId',
      targetKey: 'id',
    });
  };
  return Image;
};