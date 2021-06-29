const request = require('supertest')
const app = require('../app')
const {User} = require('../models')

const user = {
  "email": "tesdi@mail.com",
  "password": "Apalagi1@",
  "phoneNumber": "08125558765",
}

describe('A - REGISTER CUSTOMER', () => {
  test('A1 - berhasil register', (done) => {
    request(app).post('/register')
    .send(user)
    .end((err, res) => {
      if (err) done(err)
      else {
        expect(res.status).toBe(201)
        expect(res.body).toHaveProperty('email', user.email)
        expect(res.body).not.toHaveProperty('password')
        expect(res.body).toHaveProperty('phoneNumber', user.phoneNumber)
        done()
      }
    })
  })
})

afterAll((done) => {
  User.destroy({truncate: true, cascade: true})
  .then(_ => done())
  .catch(err => done(err))
})