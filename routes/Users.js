const express = require('express')
const route = express.Router();

const{
    getAllUsers,
    addUser,
    getOneUser,
    updateProfile,
    deleteProfile
} = require('../controllers/Users')

route.get('/users', getAllUsers)
route.post('/users', addUser)
route.get('/users/:id', getOneUser)
route.put('/users/:id', updateProfile)
route.delete('/users/:id', deleteProfile)

module.exports = route