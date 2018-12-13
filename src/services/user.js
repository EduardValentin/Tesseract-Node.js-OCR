const jwt = require('jsonwebtoken');
const Database = require('../models/index');
const Bcrypt = require('bcrypt');

class UserService {
  constructor() {
    this.getAll = async () => {
      return Database.User.findAll();
    };

    this.createNew = async (user) => {
      const hash = await Bcrypt.hash(user.password, 10);
      const newUser = await Database.User.create({
        ...user,
        password: hash,
      });
      return newUser;
    };

    this.login = async (credentials) => {
      const currentUser = await Database.User.findAll({
        where: {
          username: credentials.username,
        },
      });

      if (!currentUser) {
        throw Error("Username or password doesnt't match");
      }
      const plainTextPassword = credentials.password;
      const isEqual = await Bcrypt.compare(plainTextPassword, currentUser[0].password);
      if (isEqual) {
        const token = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + 3600,
          username: currentUser[0].username,
        }, process.env.JWT_SECRET);

        if (!token) {
          throw new Error("Username or password doesnt't match");
        }

        return token;
      }
    };

    this.delete = async (id) => {
      return Database.User.destroy({
        where: {
          id,
        }
      });
    };
  }
}

module.exports = UserService;