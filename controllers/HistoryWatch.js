const HistoryWatch = require('../models/HistoryWatch')

module.exports = {
    getAllHistory: async (req, res) => {
        try{
            const allHistory = await HistoryWatch.find({})
                .populate({path: 'id_movie', select:'title year description'})
                .populate({path: 'id_user', select: 'username email'})
                .populate({path: 'id_subscription', select: '_id'})

                if(newHistory){
                    res.status(200).json({
                        message: "Here Are All Histories",
                        allHistory
                    })
                } else {
                    res.status(400).json({
                        message: "Error Fetching History"
                        })
                    }
                }
                catch(err){
                    console.log(err);
                    res.status(500).json({
                        message: "Invalid Server Error"
                    })
                }
        },

        getOneHistory: async (req, res) => {
            try{
                const oneHistory = await HistoryWatch.findById(req.params.id)
                .populate({path: 'id_movie', select:'title year description'})
                .populate({path: 'id_user', select: 'username email'})
                .populate({path: 'id_subscription', select: '_id'})

                if(oneHistory){
                    res.status(200).json({
                        message: "Here is the history you requested",
                        oneHistory
                    })
                } else {
                    res.status(400).json({
                        message: "Failed Fetching History"
                    })
                }
            }
            catch(err){
                console.log(err);
                res.status(500).json({
                    message: "Internal Server Error"
                })
            }
        },
        deleteHistory: async (req, res) => {
                const {id} = req.params.id;
                await HistoryWatch.deleteOne({
                    _id:id
                }),
                (err, result) => {
                    if(err){
                        res.status(400).json({
                            message: "Error Deleting History"
                        })
                    } else {
                        res.status(200).json({
                            message: "History Deleted",
                            result
                        })
                    }
                }
         },
         addHistory: async (req, res) => {
             const {id_movie, id_user, id_subscription} = req.body;
             const newHistory = await HistoryWatch.create({
                 id_movie,
                 id_user,
                 id_subscription
             })
             if(newHistory){
                 res.status(200).json({
                     message: "Movie History Added",
                     newHistory
                 })
             } else {
                 res.status(400).json({
                     message: "Failed to Add History"
                 })
             }
         }
}