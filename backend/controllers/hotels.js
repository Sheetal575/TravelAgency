const Hotel = require('../models/hotels')

exports.getHotels= (req,res) => {
    Hotel.fetchAll()
    .then((hotels) =>{
        res.json({
            hotels: hotels
        })
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500)
    })

}