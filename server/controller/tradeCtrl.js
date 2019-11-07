module.exports = {
    getTrades: (req, res) => {
        const db = req.app.get('db') // connnecting database
        db.get_trades() // this is grabbing my db get_trades.sql file
            .then(trades => res.status(200).send(trades))
            .catch(err => console.log(err))
            
    },
    addTrade: (req, res) => {
        const db = req.app.get('db') // connnecting database
        const { name, description, img, cost } = req.body //descructuring
        db.add_trade(name, description, img, cost)
          .then(trades => res.status(200).send('worked'))//grabbing my db get_trade.sql file
    }
}