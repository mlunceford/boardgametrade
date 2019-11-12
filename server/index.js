require('dotenv').config(); // always put this on top of index.js server file
const express = require('express')
const massive = require('massive') //connects server to db
const session = require('express-session')
const{SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const authCtrl = require('./controller/authCtrl')
const tradeCtrl = require('./controller/tradeCtrl')
//this gives us access to use middleware and some other crap
const app = express();
//parser so we can convert json to javascript. and allows us to send json.
app.use(express.json())
// this tells wehre to go to connect to database
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db hot and ready')
})

//?dont know why this isnt working possible npm i thing i didnt do. and i didt it npm i express-session
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { // this keeps you logged in for 15 mins
        maxAge: 1000 * 60 * 15
    }
}))

//todo db endpoints
app.get('/api/trade', tradeCtrl.getTrades)
app.post('/api/trade', tradeCtrl.addTrade)
app.get('/api/trade/:item_id', tradeCtrl.getSaveTradeItemId)
//todo below is bad screw queries
app.get(`api/mytrade/id?`, tradeCtrl.getMyTradesByUserId)
// auth endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
// app.post('/auth/getuser', authCtrl.getuser)

//todo main ctrl endpoints



app.listen(SERVER_PORT, console.log('backend is working', SERVER_PORT))