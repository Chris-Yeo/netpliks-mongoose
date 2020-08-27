const express = require('express')
const route = express.Router();

const {
    getAllMovies,
    getOneMovie,
    addMovie,
    updateMovie,
    deleteMovie
} = require('../controllers/Movies')

route.get('/movies', getAllMovies)
route.get('/movies/:id', getOneMovie)
route.post('/movies', addMovie)
route.put('/movies/:id', updateMovie)
route.delete('/movies/:id', deleteMovie)

module.exports = route