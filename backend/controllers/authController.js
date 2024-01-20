const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
    let data = req.body
    bcrypt.hash(data.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        } 

        let user = new User({
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: hashedPass
        })
        user.save()
            .then((user) => {
                // console.log();
                res.json({
                    message: 'User Created'
                })
            })
            .catch((err) => {
                res.json({
                    error: 'Error on Creating User'
                })
            })
    })
}

const login =(req, res, next)=>{
    var username = req.body.username;
    var password = req.body.password;
    // res.json(password);
    // return;


//    var a = User.findOne({$or: [{email: username}, {phone: username}]})
   var a = User.findOne({email: username})

//    console.log("====>>>>",a);

    .then(user=>{
        // res.json({ p: user.password});
        // return;
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    res.json({
                        error: err
                    }) 
                }
                if(result){
                    let token = jwt.sign({name:user.name}, 'secretValue', {expiresIn: '365d'})
                    // let refreshtoken = jwt.sign({name:user.name}, 'refreshsecretValue', {expiresIn: '48h'})
                    res.json({
                        message: 'Login Success',
                        token,
                        // refreshtoken
                    })
                }
                else{
                    res.json({
                        message : 'Password does not matched'
                    })
                }
            })
        }else{
            res.json({
                message: 'User Not Found'
            })
        }
    })
}


module.exports = {
    register, login
}