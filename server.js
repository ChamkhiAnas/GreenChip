var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
const passport = require('passport');

const app = express();

const route = require('./routes/routes')

// connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://khalil:admin@cluster0-shard-00-00-qlize.mongodb.net:27017,cluster0-shard-00-01-qlize.mongodb.net:27017,cluster0-shard-00-02-qlize.mongodb.net:27017/greenchip?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
        useNewUrlParser: true
    }).then(res => console.log("Connected to DB"))
    .catch(err => console.log(err));

// on connection
mongoose.connection.on('connected', () => {
    console.log('connected to database mongodb @27017')
})

mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('Error in Database connection', err);
    }
});


// port no
const port = process.env.PORT || 3200;

// adding middleware - cors
app.use(cors());

// body parser
app.use(bodyparser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport');

app.use('/api', route);



// static files
app.use(express.static(path.join(__dirname, 'public')));

// testing server
app.get('/', (req, res) => {
    res.send('the ultimate bobo');
})

app.listen(port, () => {
    console.log('server started at port: ' + port);
});