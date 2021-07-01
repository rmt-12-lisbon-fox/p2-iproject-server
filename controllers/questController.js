const { Question } = require("../models")

class questController {
  static read ( req, res, next ) {
    Question.findAll ()
      .then ( data => {
        res.status( 200 ).json( { data } )
      } )
      .catch ( err => {
        
        next ( err )
      } )
  }

  static create ( req, res, next ) {
    const { question, answer1, answer2, answer3, answer4 } = req.body
    Question.create ( {
      question,
      answer1,
      answer2,
      answer3,
      answer4
    } )
    .then ( ( createQuest ) => {
      res.status ( 201 ).json ( { message: `Quest created`, quest: createQuest } )
    } )
    .catch ( ( err ) => {
      
      next ( {
        status: 500,
        msg: "Internal Server Error"
      } )
    } )
  }

  static findOne ( req, res, next ) {
    Quest.findByPk ( +req.params.id )
      .then ( ( foundQuest ) => {
        if ( foundQuest ) {
          res.status ( 200 ).json ( { quest : foundQuest } )
        } else {
          throw { status: 404, message: "Quest is not Found" }
        }
      } )
      .catch ( ( err ) => {
        
        next ( err )
      } )
  }

  static update ( req, res, next ) {
    const { question, answer1, answer2, answer3, answer4 } = req.body
    Quest.update ( {
      question,
      answer1,
      answer2,
      answer3,
      answer4
    }, {
      where: {
        id: +req.params.id
      },
      returning: true
    } )
      .then ( ( updatedQuest ) => {
        res.status ( 200 ).json ( { message: `Quest has been updated`, quest: updatedQuest[1][0] } )
      } )
      .catch ( ( err ) => {
        
        next ( err )
      } )
  }

  static delete ( req, res, next ) {
    Quest.destroy ( {
      where: {
        id: +req.params.id
      }
    } )
      .then ( ( deletedQuest ) => {
        
        if ( deletedQuest ) {
          res.status ( 200 ).json ( { message: `Quest has been deleted` } )

        } else {
          throw { status: 400, message: `Failed to delete` }
        }
      } )
      .catch ( ( err ) => {
        next ( err )
      } )
  }

}

module.exports = questController