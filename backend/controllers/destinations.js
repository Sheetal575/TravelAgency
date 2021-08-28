const Destination = require('../models/destinations')

exports.getDestinations= (req,res) => {
    Destination.fetchAll()
    .then((destinations) =>{
        res.json({
            destinations: destinations
        })
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500)
    })

}