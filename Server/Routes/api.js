const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const passport = require('passport');
const userAccount = require('../../models/useraccount');

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works...');
});


router.get('/register', function (req, res) {
    res.render('register', {});
});

router.post('/register', (req, res, next) => {
    let newUser = new userAccount({
        first: req.body.firstName,
        last: req.body.lastName,
        username: req.body.userName,
        password: req.body.password
    });
    let usr = req.body;
    console.log(JSON.stringify(req.body) + '|' + newUser);
    userAccount.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' });
        } else {
            res.json({ success: true, msg: 'User registered' });
        }
    });

});

router.get('/login', function (req, res) {
    res.send('get Login');
});

router.post('/login', function (req, res) {
    console.log('post login:' + JSON.stringify(req.body.passwordBox));
    if (req.body.passwordBox == 'Newuser123') {
        res.json({ success: true, msg: 'Login Success!' });
    }
    else {
        res.json({ success: false, msg: 'Login failed!' });
    }
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function (req, res) {
    res.status(200).send("pong!");
});

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/airlinesdb', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;