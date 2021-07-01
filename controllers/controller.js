const {Signal, Portofolio} = require('../models')
const axios = require('axios')
const { Sequelize, Op } = require('sequelize')
const { QueryTypes } = require('sequelize');

class Controller {
  static signal(req, res, next) {
    const {title, signal} = req.body
    const input = {title, signal}
    Signal.create(input)
    .then(instance => {
      res.status(201).json(instance)
    })
    .catch(err => {
      let errors
      if (err.errors) errors = err.errors.flatMap(m => m.message)
      err.errors ? next({code:400, message: errors}) : next({code:500})
    })
  }
  static hello(req, res, next) {
    res.status(200).json({message: 'welcome to smartinvestment'})
  }
  static market(req, res, next) {
    axios({
      method: 'get',
      url: 'https://indodax.com/api/tickers',
    })
    .then(({data}) => {
      res.status(200).json({
        btc: data.tickers.btc_idr,
        eth: data.tickers.eth_idr,
        doge: data.tickers.doge_idr,
        ltc: data.tickers.ltc_idr,
        xrp: data.tickers.xrp_idr
      })
    })
    .catch(_ => { next({code:500}) })
  }
  static adzan(req, res, next) {
    axios({
      method: 'get',
      url: 'http://api.aladhan.com/v1/timings/29-06-2021?latitude=-6.344785&longitude=106.641315&method=99&methodSettings=20.0,null,18.0&tune=0,0,-1,0,0,1,1,0,0'
    })
    .then(({data}) => {
      console.log(data)
      res.status(200).json({
        subuh: data.data.timings.Fajr,
        terbit: data.data.timings.Sunrise,
        duhur: data.data.timings.Dhuhr,
        asar: data.data.timings.Asr,
        magrib: data.data.timings.Maghrib,
        isya: data.data.timings.Isha
      })
    })
    .catch(_ => { next({code:500}) })
  }
  static bestxrp(req, res, next) {
    // Signal.count({
    //   attributes: ['title', 'signal', 'createdAt'],
    //   group: ['title', 'signal', 'createdAt'],
    //   order: [ Sequelize.fn('MAX', Sequelize.col('createdAt'))]
    // })
    Signal.findAll({ where: { title: 'XRPIDR' }, order: [['createdAt', 'desc']], limit: 1 })
    .then(([instance]) => {
      res.status(200).json({xrp: instance.signal})
    }).catch(_ => { next({code:500}) })
  }
  static bestbtc(req, res, next) {
    Signal.findAll({ where: { title: 'BTCIDR' }, order: [['createdAt', 'desc']], limit: 1 })
    .then(([instance]) => {
      res.status(200).json({btc: instance.signal})
    }).catch(_ => { next({code:500}) })
  }
  static besteth(req, res, next) {
    Signal.findAll({ where: { title: 'ETHIDR' }, order: [['createdAt', 'desc']], limit: 1 })
    .then(([instance]) => {
      res.status(200).json({eth: instance.signal})
    }).catch(_ => { next({code:500}) })
  }
  static bestltc(req, res, next) {
    Signal.findAll({ where: { title: 'LTCIDR' }, order: [['createdAt', 'desc']], limit: 1 })
    .then(([instance]) => {
      res.status(200).json({ltc: instance.signal})
    }).catch(_ => { next({code:500}) })
  }
  static bestdoge(req, res, next) {
    Signal.findAll({ where: { title: 'DOGEIDR' }, order: [['createdAt', 'desc']], limit: 1 })
    .then(([instance]) => {
      res.status(200).json({doge: instance.signal})
    }).catch(_ => { next({code:500}) })
  }
  static portofolio(req, res, next) {
    const {title, quantity, price, status, UserId} = req.body
    const input = {title, quantity, price, status, UserId}
    Portofolio.create(input)
    .then(instance => res.status(201).json(instance))
    .catch(err => {
      let errors
      if (err.errors) errors = err.errors.flatMap(m => m.message)
      err.errors ? next({code:400, message: errors}) : next({code:500})
    })
  }
  static portofolioPut(req, res, next) {
    const UserId = +req.user.id
    const id = +req.params.id
    const {title, quantity, price, status} = req.body
    const input = {title, quantity, price, status}
    console.log(input)
    console.log(UserId)
    console.log(id)
    Portofolio.update(input, {
      where: {id: 9},
      // returning: true,
    })
    .then(array => {
      console.log('>>>>>>>>>>>>>>>>>>>masuk')
    })
    .catch(err => {
      let errors
      if (err.errors) errors = err.errors.flatMap(m => m.message)
      err.errors ? next({code:400, message: errors}) : next({code:500})
    })
  }
}

module.exports = Controller