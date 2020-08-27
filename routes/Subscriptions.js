const express = require('express')
const route = express.Router();

const {
    getAllSubscriptions,
    getOneSubscription,
    addSubscription,
    deleteSubscription
} = require('../controllers/Subscriptions')

route.get('/subscription', getAllSubscriptions)
route.get('/subscriptions/:id', getOneSubscription)
route.post('/subscriptions', addSubscription)
route.delete('/subscriptions/:id', deleteSubscription)

module.exports = route