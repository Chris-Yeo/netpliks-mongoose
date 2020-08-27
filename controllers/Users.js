const Users = require('../models/Users');

module.exports = {
    getAllUsers: (req, res) => {
        Users.find()
        .then(result => {
            res.send({
                message: 'All Users',
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'Internal Server Error',
                status: 500
            })
            
        })
    },
    addUser: (req, res) => {
        const {fullname, username, email, password, address} = req.body
        Users.create({
            fullname,
            username,
            email,
            password,
            address
        }, (error, result) => {
            if(error) {
                res.send({
                    message: 'Cannot Add User',
                    status: 400
                })
            } else {
                res.send({
                    message: 'User Added Successfully', 
                    result
                })
            }
        })
    },
    getOneUser: async(req, res) => {
        try{
            const oneUser = await Users.findById(req.params.id);
            if(oneUser){
                res.status(200).json({
                    message: "Here's The Profile You Requested",
                    oneUser
                })
            } else {
                res.status(400).json({
                    message: "Error Fetching Profile"
                })
            }
        }
        catch(error){
            console.log(error)
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    },
    updateProfile: async(req, res) => {
        try{
            const userUpdate = await Users.findByIdAndUpdate(req.params.id, req.body)
            if(userUpdate){
                res.status(200).json({
                    message: "Profile Updated",
                    userUpdate
                })
            } else {
                res.status(400).json({
                    message: "Failed Updating Profile"
                })
            }
        }
        catch(error){
            console.log(error);
            res.status(500).json({
                message: "Invalid Server Error"
            })
        }
    },

    deleteProfile: async (req, res) => {
        const {id} = req.params.id;
        await Users.deleteOne({
            _id: id
        }),
        (err, result) => {
            if(err){
                res.status(400).json({
                    message: "Error Deleting History"
                })
            } else {
                res.status(200).json({
                    message: "Profile Deleted",
                    result
                })
            }
        }
    }
}