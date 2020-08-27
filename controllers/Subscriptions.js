const Subscriptions = require('../models/Subscriptions')

module.exports = {
    getAllSubscriptions: async(req, res) => {
        try{
            const allSubscriptions = await Subscriptions.find({})
            .populate({path: 'id_user', select: 'username email'})
            if(allSubscriptions){
                res.status(200).json({
                    message: "All Subscriptions"
                })
            } else {
                res.status(400).json({
                    message: 'Error Fetching Subscriptions'
                })
            }
        }
        catch(err){
            console.log(err);
            res.status(500).json({
                message: 'Invalid Server Error'
            })
        }
    },
    
    getOneSubscription: async (res, req) => {
        try{
            const oneSubscription = await Subscriptions.findById(req.params.id)
            .populate({path: 'id_user', select: 'username email'})
            if(oneSubscription){
                res.status(200).json({
                    message: "Here is your subscription",
                    oneSubscription
                })
            } else {
                res.status(400).json({
                    message: "Failed Fetching Subscription"
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
    addSubscription: async (req, res) => {
        try{
            const {id_user, status} = req.body;
        const newSubscription = await Subscriptions.create({
            id_user,
            status
        })
        if(newSubscription){
            res.status(200).json({
                message: "Subscription Added",
                newSubscription
            })
        } else {
            res.status(400).json({
                message: "Error Subscribing"
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
    deleteSubscription: async (req, res) => {
        const {id} = req.params.id;
        await Subscriptions.deleteOne({
            _id:id
        }),
        (err, result) => {
            if(err){
                res.status(400).json({
                    message: "Error deleting subscription"
                })
            } else {
                res.status(200).json({
                    message: "Subscription deleted",
                    result
                })
            }
        }
    }
}
