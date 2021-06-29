const { getAPIData, searchById } = require('../helpers/fetch')
const { User, Food, Diet } = require('../models')


class Controller {

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
      return Food.create({
        name :  description,
        fdcId: req.query.fdcId,
        protein : extract[0].amount,
        fat : extract[1].amount,
        carbohydrate : extract[2].amount,
        energy : extract[3].amount,
        sugars : extract[4].amount,
        cholesterol : extract[5].amount,
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