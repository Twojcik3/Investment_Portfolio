const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const router = require('./router');


const app = express();
let sessionOptions = session({
    secret: 'javascript',
    store: new MongoStore({ client: require('./db') }),
    name: 'Session',
    resave: false,
    saveUninitialized: false,
    withCredentials: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: false }
})
app.use(sessionOptions);
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
    credentials: true
}));

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use('/', router);

module.exports = app;