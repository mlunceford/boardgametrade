require('dotenv').config(); // always put this on top of index.js server file
const express = require('express')
const massive = require('massive') //connects server to db
const session = require('express-session')
const{SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const authCtrl = require('./controller/authCtrl')
const tc = require('./controller/tradeCtrl')
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
app.get('/api/trade', tc.getTrades)
app.post('/api/trade', tc.addTrade)
app.get('/api/trade/:item_id', tc.getSaveTradeItemId)
app.put('/api/trade/:item_id', tc.editTradeInfo)
app.delete('/api/trade/:item_id', tc.deleteTrade) //this was looking at nodb review1

app.get(`/api/mytrade/:user_id`, tc.getMyTradeUserId)
// auth endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
app.get('/auth/getuser', authCtrl.getUser)

//todo main ctrl endpoints



app.listen(SERVER_PORT, console.log('backend is working', SERVER_PORT))