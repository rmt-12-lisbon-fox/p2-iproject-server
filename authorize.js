const { Schedule } = require('./models')

function authorize(req, res, next) {
    console.log(`masuk authorize <<<<<<<<<<<<<<<`)
    let { id } = req.body
    console.log(id, `ini req paras <<<<<<<<<<<`)
    Schedule.findByPk(id)
    .then( data => {
        console.log(data,` ini data schedule find by pk`)
        if (data.UserId === req.user.id) {
            console.log(`authorizer berhasil <<<<<<<<<<<<<<<`)
            
            next()
        } else {
            console.log(`authorizer gagal <<<<<<<<<<<<<<<`)
            res.status(403).json({ message : `not authorized`})
        }
    })
    .catch( err => res.status(500).json({ message : `internal server error`}))
}

module.exports = authorize