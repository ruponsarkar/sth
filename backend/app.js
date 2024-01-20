var express = require('express');

var mysql = require('mysql');
var bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const morgan = require('morgan');

const TestRouter = require('./routes/testRoute')
const AuthRouter = require('./routes/authRoute')
const AppRouter = require('./routes/appRoute')


// mongoose.connect('mongodb+srv://pageuptech:admin@123@sthdb.pik80gw.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('err', (err) => {
    console.log(err);
    console.log("Mongoo Not Connected, Error !!!");
})
db.once('open', () => {
    console.log("Connected Mongoo");
})

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static('uploads'))


app.get('/', function(req,res){
  res.send({message: "User added Successfully"});
});


var server = app.listen(4000, function () {
    console.log("App running on port 4000...");
});

app.use('/api/test', TestRouter);
app.use('/api', AuthRouter);
app.use('/api', AppRouter);