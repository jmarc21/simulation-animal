require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , massive = require('massive')
    , cors = require('cors')
    , axios = require('axios');


const app = express();
app.use(cors());
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
})

app.post('/api/register-user', (req, res) => {
    const { username , password } = req.body
    const db = app.get('db');
    db.create_user([
        username,
        password
    ]).then( resp => {
        res.status(200).send('User Registered')
    })
})

app.post('/api/add-animal', (req,res)=> {
    const { animal } = req.body;
    const db = app.get('db')
    db.get_user([]).then( resp => {
        var id = resp[0].id
        db.add_animal([animal, id]).then( respo => {
            res.status(200).send(respo)
        })
    })
})

app.get('/api/getUsersCart', (req,res) => {
    const db = app.get('db');
    db.get_user([]).then( resp => {
        var id = resp[0].id
        db.get_user_cart([id]).then( respo => {
            res.status(200).send(respo)
        })
    })
})


const { SERVER_PORT } = process.env
app.listen(SERVER_PORT, () => {
    console.log(`I'm listening on port: ${SERVER_PORT}`)
});