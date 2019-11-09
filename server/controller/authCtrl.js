const bcrypt = require('bcryptjs');
module.exports = { //!register works hitting both status codes
    register: async (req, res) => {

        const db = req.app.get('db'); // always do this to grab your database
        const { username, password } = req.body
        let foundUser = await db.check_username([username])
        console.log(foundUser)
        console.log(username,password)
        if (foundUser[0]) {
            return res.status(405).send('Username already exists')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let newUser = await db.register([username, hash]);
        console.log(newUser)
        return res.status(200).send(newUser[0])
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body;

        let foundUser = await db.check_username([username])
        foundUser = foundUser[0];
        if(!foundUser){ //? for some reason !foundUser[0] in the if statement doesnt work??????
            return res.status(401).send('Username does not exist')
        };
        const authenticated = bcrypt.compareSync(password, foundUser.password);
        if(authenticated){
            delete foundUser.password;

            res.status(200).send('logged in')
        } else {
            res.status(401).send('Password is bad')
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
        //? this makes it clear history cant hit back to get back into w/e
        // localStorage.clear();   
        // window.loaction.href = '/'
    },
    // getUser: (req, res) => {
    //     if(req.session.user){
    //         res.status(200).send(req.session.trade_users)
    //     }
    //     res.sendStatus(200)
    // },
}