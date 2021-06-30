const { getAPIData, searchById } = require('../helpers/fetch')
const { User, Food, Diet } = require('../models')
const { Op } = require("sequelize");


class Controller {

  static getChart(req, res, next) {
    let startDate = new Date(2020, 5, 30, 11, 33)
    let endDate = new Date()

    Diet.findAll({
      where : {
        createdAt : {
          [Op.lt]: new Date(),
          [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
        }
      },
      include : [ Food ]
    })
    .then( arr => {
      arr = arr.map( obj => {
        return obj.Food
      })

      let sum = {}
      let proteins = arr.map( el => el.protein)
      let energy = arr.map( el => el.energy)
      let fat = arr.map( el => el.fat)
      let sugars = arr.map( el => el.sugars)
      let cholesterol = arr.map( el => el.cholesterol)
      let carbohydrate = arr.map( el => el.carbohydrate)

      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      sum.protein = proteins.reduce(reducer)
      sum.energy = energy.reduce(reducer)
      sum.fat = fat.reduce(reducer)
      sum.sugars = sugars.reduce(reducer)
      sum.cholesterol = cholesterol.reduce(reducer)
      sum.carbohydrate = carbohydrate.reduce(reducer)


      res.json(sum)
    })
    .catch(next)
  }

  static getDietData(req, res, next) {

    Diet.findAll({
      where : {
        userId : req.user.id
      },
      include : [ Food ]
    })
    .then( data => {
      res.json(data)
    })
    .catch(next)
  }

  static getAPI(req, res, next) {

    let food = req.query.food

    getAPIData(food)
    .then(json => {
      res.status(200).json(json)
    });
  }

  static recordDiet(req, res, next) {
    let extractTemp

    searchById(req.query.fdcId)
    .then( ({foodNutrients, description}) => {

      let extract = foodNutrients.map( el =>{
        return {
          name : el.nutrient.name,
          unitName : el.nutrient.unitName,
          number : +el.nutrient.number,
          amount: el.amount
        } 
      })
      extract.sort(function(a, b) {
        return a.number - b.number;
      });


      extractTemp = extract
      return Food.findOrCreate({
        where: {
          fdcId: req.query.fdcId
        },
        defaults : {
          name :  description,
          fdcId: req.query.fdcId,
          protein : extract[0].amount,
          fat : extract[1].amount,
          carbohydrate : extract[2].amount,
          energy : extract[3].amount,
          sugars : extract[4].amount,
          cholesterol : extract[5].amount,
        }
      })
    })
    .then( _ => {
      return Diet.create({
        userId : req.user.id,
        fdcId : req.query.fdcId
      })
    })
    .then( _=> {
      res.status(200).json(extractTemp)
    })
    .catch(next)
    

    
  }

}

module.exports = Controller