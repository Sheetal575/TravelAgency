 const express = require('express')
const router = express.Router()
const destController = require('../controllers/destinations')
const actController = require('../controllers/activities')
const hotController = require('../controllers/hotels')
const tentController = require('../controllers/tents')

router.get('/destinations', destController.getDestinations)
router.get('/activities',actController.getActivities)
router.get('/tents',tentController.getTents)
router.get('/hotels',hotController.getHotels)

module.exports=router