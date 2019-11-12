module.exports = {
    getTrades: (req, res) => {
        const db = req.app.get('db') // connnecting database
        db.get_trades() // this is grabbing my db get_trades.sql file
            .then(trades => res.status(200).send(trades))
            .catch(err => console.log(err))
            
    },
    addTrade: (req, res) => { console.log('hit add tra')
        const db = req.app.get('db') // connnecting database
        const { name, description, imgurl, cost, user_id } = req.body //descructuring
        console.log(req.body)
        db.add_trade(name, description, imgurl, cost, user_id)
            .then(trades => res.status(200).send(trades))//grabbing my db get_trade.sql file
    },
    getSaveTradeItemId: async (req, res) => {
        console.log(+req.params.item_id)
        const db = req.app.get('db') // connnecting database
        let trades = await db.get_save_trade_item_id(+req.params.item_id) // the plus forces it to be a number  this is grabbing my db get_trades.sql file
        res.status(200).send(trades)
    },
    getMyTradesByUserId: (req, res) => {
        const db = req.app.get('db')
        //todo might need this below?????
        //? const {name, description, imgurl, cost, item_id} = req.body
        //? db.get_my_trades_by_user_id(name, description, imgurl, cost, user_id) 
        db.get_my_trades_by_user_id(req.query.user_id) // grabing sql file
        .then(myTrade => res.status(200).send(myTrade))
        .catch(err => console.log(err,'mytrade error'))
    },

}