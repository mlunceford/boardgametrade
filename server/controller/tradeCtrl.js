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
    }
}