var expect = require('chai').expect;
var app = require('../index');
var request = require('supertest');


const account = {
  firstName: 'test',
  lastName: 'test',
  username: 'test',
  email: 'test@test.com',
  password: 'test'
}

var app = request.agent(app);

it('getUsers', function (done) {
  app
    .get('/users')
    .end(function (err, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
});

it('register', function (done) {
  app
    .post('/register')
    .send(account)
    .end(function (err, response) {
      expect(response.statusCode).to.equal(200);
    done();
    });
});

it('login', function (done) {
  const login = {
    username: account.username,
    password: account.password
  }
  app
    .post('/login')
    .send(login)
    .end(function (err, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
});
