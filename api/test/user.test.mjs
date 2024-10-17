const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js'); // Adjust the path to your server file
const User = require('../controllers/auth.controller.js'); // Adjust the path to your User model

chai.use(chaiHttp);

(async () => {
  const { describe, it } = await import('mocha');
  const { expect } = await import('chai');

  describe('User Registration', () => {
    let mongoServer;

    before(async () => {
      mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();
      await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    after(async () => {
      await mongoose.disconnect();
      await mongoServer.stop();
    });

    beforeEach(async () => {
      await User.deleteMany({});
    });

    it('should register a new user', (done) => {
      const newUser = {
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123'
      };

      chai.request(server)
        .post('/api/register') // Adjust the endpoint to your registration route
        .send(newUser)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('username').eql('testuser');
          expect(res.body).to.have.property('email').eql('testuser@example.com');
          done();
        });
    });
  });
})();