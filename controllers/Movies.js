const Movies = require('../models/Movies');

module.exports = {
    getAllMovies : async (req, res) => {
        try {
            const movies = await Movies.find()
            if(movies){
                res.status(200).json({
                    message: 'All Movies',
                    movies
                })
            } else {
                res.status(400).json({
                    message: 'Failed to get Movies'
                })
            }
        }
        catch(error){
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    },
    getOneMovie: async (req, res) => {
        try {
            const oneMovie = await Movies.findById(req.params.id)
            if(oneMovie){
                res.status(200).json ({
                    message: "Here's the movie you requested:",
                    oneMovie
                })
            } else {
                res.status(400).json({
                    message: "Failed to get movie"
                })
            }
        }
        catch(error){
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    },
    addMovie: async (req, res) => {
        try {
        const {title, year, genre, description, url_trailer} = req.body;
        const newMovie = await Movies.create({
            title,
            year,
            genre,
            description,
            url_trailer
        })
        if(newMovie) {
            res.send({
                message: 'Movie Added!',
                status: 200,
                newMovie,
            })
        } else {
            res.send({
                message: 'Movie Upload Failed',
                status: 400
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Internal Server Error'
        })
    } 
    },
    updateMovie: async (req,res) => {
        try{
            // const {title, year, genre, description, url_trailer} = req.body;
            const updatedMovie = await Movies.findByIdAndUpdate(req.params.id, req.body)
            if(updatedMovie){
                res.status(200).json({
                    message: "Movie Updated!",
                    updatedMovie
                })
            } else {
                res.status(400).json({
                    message: "Update Failed"
                })
            }
        }
        catch(error){
            console.log(error);
            res.status(500).son({
                message: "Internal Server Error",
            })
        }
    },
    deleteMovie: async (req, res) => {
        const {id} =  req.params.id;
        Movies.deleteOne({
            _id:id
        },
        (err, result) => {
            if(err){
                res.status(400).json({
                    message: "Error Deleting Movie"
                })
            } else {
                res.status(200).json({
                    message: "Movie Deleted",
                    result
                })
            }
        })
    }
}