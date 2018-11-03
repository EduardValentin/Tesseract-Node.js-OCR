const jwt = require('jsonwebtoken')

const VerifyToken = (req, res, next) => {
  const JWToken = req.headers.authorization;
  const cleanToken = JWToken.replace('Bearer ', '');

  jwt.verify(cleanToken, JWTSecret, (err, isValid) => {
    if(!isValid) {
      res.status(401).send({
        error: 'Unauthorized',
      });
    } else {
      next();
    }
  });
};

module.exports = VerifyToken;