const request = require('supertest')
const server = require('../api/server.js')
const db = require('../database/dbConfig.js')

describe('server', function() {
  afterAll(async () => {
    await db('users').truncate()
  })

  describe('GET /', () => {
    it('should return 200 and "up"', async () => {
      return request(server)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200)
      })
    })
  });

  describe('POST /register', () => {
    it('adds a new user and gets 201', async () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          username: "thegreattim",
          password: "123abc"
        })
        .then(res => {
          expect(res.status).toBe(201)
        })
    })
    it('won\'t add a new user without a username', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          password: "123abc"
        })
        .then(res => {
          expect(res.status).toBe(500)
        })
    });
  }); // end of register

  describe('POST /api/auth/login', () => {
    it('gets a token back on login', () => {
      return request(server)
        .post('/api/auth/login')
        .send({
          username: 'thegreattim',
          password: '123abc'
        })
        .then(res => {
          expect(res.body.token).toBeTruthy()
        })
    })

    it('rejects bad login information', () => {
      return request(server)
      .post('/api/auth/login')
      .send({
        username: 'thegreattim',
        password: '123abd'
      })
      .then(res => {
        expect(res.status).toBe(401)
      })
    })
  }); // end of LOGIN

  describe('GET /api/jokes', () => {
    it('gets jokes from the api', () => {
      return request(server)
        .get('/api/jokes')
        .then(res => {
          expect(res.text.length).toBeGreaterThan(0)
        })
    })
  }); // end of JOKES
});