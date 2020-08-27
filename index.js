 const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser')

const userRouter = require('./routes/Users')
const movieRouter = require('./routes/Movies')
const subscriptionRouter = require('./routes/Subscriptions')
const historyRouter = require('./routes/HistoryWatch')

const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/', userRouter)
app.use('/', movieRouter)
app.use('/', subscriptionRouter)
app.use('/', historyRouter)

db.on('error', console.error.bind(console, 'DB Error Detected'));
db.once('open', () => console.log('DB Connected'));

app.listen(8000, ()=> {
    console.log('connected')
})
