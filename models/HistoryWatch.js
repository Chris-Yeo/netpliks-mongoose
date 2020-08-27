const mongoose = require('mongoose')

const Schema = mongoose.Schema

const historySchema = new Schema({
    id_movie: {
        type: Schema.Types.ObjectId,
        ref: 'movies',
        required: true
    },
    id_user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    id_subscription: {
        type: Schema.Types.ObjectId,
        ref: 'subscriptions',
        required: true
    }
}, {
    timestamps: true
})

const HistoryWatch = mongoose.model('history_watch', historySchema)

module.exports = HistoryWatch;