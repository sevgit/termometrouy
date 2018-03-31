import mongoose from 'mongoose'
import User from '../models/userModel'

mongoose.Promise = global.Promise;



const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

const userCredentials = {
  'email': 'email@email.com',
  'password': '123@abc'
}

const registerDetails = {
  'name': 'Sebastián Ventura',
  'email': 'email@email.com',
  'company': 'Terrible',
  'password': '123@abc'
};

describe('Create new account', () => {
  
  describe('POST /user/signup', () => {
    it('should register a new user', (done) => {
      chai.request('http://localhost:3000')
        .post('/user/signup')
        .send(registerDetails)
        .end((err, res) => {
          res.should.have.status(201)
          done()
        })
    })

    it('should NOT register without an EMAIL', (done) => {
      chai.request('http://localhost:3000')
        .post('/user/signup')
        .send({'name': 'Sebastián Ventura','company': 'Terrible','password': '123@abc'})
        .end((err, res) => {
          res.should.have.status(409)
          done()
        })
    })

    it('should NOT register without a NAME', (done) => {
      chai.request('http://localhost:3000')
        .post('/user/signup')
        .send({'email': 'email@email.com','company': 'Terrible','password': '123@abc'})
        .end((err, res) => {
          res.should.have.status(409)
          done()
        })
    })
    it('should NOT register without a COMPANY', (done) => {
      chai.request('http://localhost:3000')
        .post('/user/signup')
        .send({'name': 'Sebastián Ventura','email': 'email@email.com','password': '123@abc'})
        .end((err, res) => {
          res.should.have.status(409)
          done()
        })
    })
  })
})

describe('Retrieve authentication token', () => {

  describe('POST /user/login', () => {
    it('should retrieve a token when credentials are ok', (done) => {
      chai.request('http://localhost:3000')
        .post('/user/login')
        .send(userCredentials)
        .end((req, res) => {
          res.body.should.have.property('token')
          done()
        })
    })

    it('should NOT retrieve a token when password is incorrect', (done) => {
      chai.request('http://localhost:3000')
        .post('/user/login')
        .send({'email': 'email@email.com','password': '123'})
        .end((req, res) => {
          res.should.have.status(401)
          done()
        })
    })
    it('should NOT retrieve a token when an EMAIL doesn\'t exist', (done) => {
      chai.request('http://localhost:3000')
        .post('/user/login')
        .send({'email': 'email2@email.com','password': '123@abc'})
        .end((req, res) => {
          res.should.have.status(401)
          done()
        })
    })
  })
})
