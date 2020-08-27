const express = require('express')
const route = express.Router();

const {
    getAllHistory,
    getOneHistory,
    deleteHistory,
    addHistory
} = require('../controllers/HistoryWatch')

route.get('/history', getAllHistory)
route.get('/history/:id', getOneHistory)
route.delete('/history', deleteHistory)
route.post('/history', addHistory)

module.exports = route