const request = require('supertest')
const app = require('../app')
const {User} = require('../models')
const {generateJWT, verifyJWT} = require('../helpers/jwt')

const login = {
  "email": "tesdi@mail.com",
  "password": "Apalagi1@",
}
const customer = {
  "email": "tesdi@mail.com",
  "password": "Apalagi1@",
  "phoneNumber": "08125558765",
}
let token = ''
let registration = ''

beforeAll((done) => {
  User.create(customer)
  .then(instance => {
    registration = {
      email: instance.email,
      phoneNumber: instance.phoneNumber,
      id: instance.id,
    } 
    token = generateJWT(registration)
    done()
  })
  .catch(err => { done(err) })
})


describe('B - LOGIN CUSTOMER', () => {
  test('B1 - berhasil login', (done) => {
    request(app).post('/pub/login')
    .send(login)
    .end((err, res) => {
      if (err) done(err)
      else {
        const output = verifyJWT(res.body.access_token)
        delete output.iat
        expect(res.status).toBe(200)
        expect(output).toEqual(registration)
        done()
      }
    })
  })
  test('B2 - memberikan password yang salah', (done) => {
    request(app).post('/pub/login')
    .send({...login, password: "passworddisalahin"})
    .end((err, res) => {
      if (err) done(err)
      else {
        const errors = "Username and Password Not Match"
        expect(res.status).toBe(401)
        expect(res.body).toHaveProperty('message', expect.any(String))
        expect(res.body.message).toEqual(errors)
        done()
      }
    })
  })
  test('B3 - Email yang diinput tidak terdaftar di database', (done) => {
    request(app).post('/pub/login')
    .send({...login, email: "emailtidakterdaftar@didatabase.com"})
    .end((err, res) => {
      if (err) done(err)
      else {
        const errors = "Username and Password Not Match"
        expect(res.status).toBe(401)
        expect(res.body).toHaveProperty('message', expect.any(String))
        expect(res.body.message).toEqual(errors)
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