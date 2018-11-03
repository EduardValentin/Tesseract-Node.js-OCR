const Database = require('../models/index');
const Bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');

const registerUser = (req, res, next) => {
  Bcrypt.hash(req.body.password, 10)
  .then( hash => {
    Database.User.create({
      ...req.body,
      password: hash,
    })
    .then( user => {
      res.status(200).send({
        user,
      })
      .catch(error => {
        res.status(400).send({
          error,
        })
      });
    })
    .catch(error => {
      res.status(500).send(error);
    });
  });
};

const getUsers =  (req, res, next) => {
  Database.User.findAll()
  .then(result => res.status(200).send(result));
};

const loginUser =  (req, res, next) => {
  Database.User.findAll({
    where: {
      username: req.body.username,
    },
  })
  .then((user) => {
    const plainTextPassword = req.body.password;
    Bcrypt.compare(plainTextPassword, user[0].password)
    .then((isEqual) => {
      console.log(user[0].password,'----  ',plainTextPassword,'   ---',isEqual)
      if(isEqual){
        const token = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + 3600,
          username: user[0].username,
        }, process.env.JWT_SECRET);
        return token;
      }
    })
    .then( token => {
      if(token) {
        return res.status(200).send({
          "token": token,
        });
      } else {
        res.status(401).send({error: 'Unauthorized'});
      }
    })
  })
  .catch(error => {
    res.status(404).send(error);
  });
};

const deleteUser = (req,res,next) => {

}

module.exports = {
  registerUser,
  getUsers,
  loginUser,
  deleteUser,
};