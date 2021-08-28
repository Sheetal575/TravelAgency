const Activity = require('../models/activities')

exports.getActivities= (req,res) => {
    Activity.fetchAll()
    .then((activities) =>{
        res.json({
            activities: activities
        })
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500)
    })

}