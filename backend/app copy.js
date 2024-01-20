var express = require('express');
var app = express();
var mysql=require('mysql');
var bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.set('view engine', 'ejs');

var conn=mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'node',
});

conn.connect(function(err){
    if(err) throw err;
    console.log("connection successful...");
});



app.get('/', function(req,res){
  //  res.render('insert');
  res.send({message: "User added Successfully"});
});

app.post('/create', function(req,res){
    // var name = req.body.name;
    // var email = req.body.email;
    // var password = req.body.password;
    var sql = `insert into users(name, phone, email, address, city, state, pin, password, password2) values ('${req.body.name}','${req.body.phone}','${req.body.email}','${req.body.address}','${req.body.city}','${req.body.state}','${req.body.pin}','${req.body.password}','${req.body.password2}')`;

    conn.query(sql,function(err,results){
        if(err) throw err;
        res.send({message: "User added Successfully"});
    });

});

app.get('/alluser',function(req,res){

    var sql="select * from users";
    conn.query(sql,function(err,results){
        if(err) throw err;

        res.send(results)
    });

});

app.get('/delete/:id', function(req,res){
    var id = req.params.id;
    
    var sql=`delete from users where id='${id}'`;

    conn.query(sql,function(err,results){
        if(err) throw err;
        res.redirect('/show');
    });

});

app.get('/edit/:id', function(req,res){
    var id = req.params.id;

    var sql=`select * from users where id='${id}'`;

    conn.query(sql,function(err,results){

        if(err) throw err;
        res.render('edit',{users:results});

    });
});

app.post('/update/:id', function(req,res){
    
    var id=req.params.id;

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    var sql=`update users set name='${name}', email='${email}', password='${password}' where id='${id}'`;

    conn.query(sql,function(err,results){

        if(err) throw err;

        res.redirect('/show');

    });
});
var server = app.listen(4000, function(){
    console.log("App running on port 4000...");
});