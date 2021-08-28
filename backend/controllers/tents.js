const Tent = require('../models/tents')

exports.getTents= (req,res) => {
    Tent.fetchAll()
    .then((tents) =>{
        res.json({
            tents: tents
        })
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500)
    })

}