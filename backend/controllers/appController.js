const Test = require('../models/Test')

const User = require('../models/User');
const Account = require('../models/Account');
const Notification = require('../models/Notification');
const mongoose = require('mongoose');
const db = mongoose.connection


const Payment = (req, res, next) => {
    let u_id = req.body.u_id;
    let amount = req.body.amount;
    let due_date = req.body.due_date;
    let payment_date = req.body.payment_date;

    let account = new Account({
        u_id: u_id,
        amount: amount,
        due_date: due_date,
        payment_date: payment_date
    })

    account.save()
        .then(response => {
            res.status(200).json({
                message: "Payment Successfull !"
            })
        })
        .catch((error) => {
            res.status(400).json({
                error
            })
        })

}


// notifications 
const notification_request = async (req, res, next) => {
    
    const approval_limit = await User.find().count();

    let save = new Notification({
        requested_by: req.body.u_id,
        type: req.body.type,
        notification: req.body.notification,
        approval_limit: approval_limit,
        status: 'Active'
    })

    save.save()
        .then(response => {
            res.status(200).json({
                message: 'Request Submitted'
            })
        })
}

const get_notification = (req, res, next)=>{
    Notification.find().then((noti)=>{
        res.json({noti})
    })
}






// get data 
const index = (req, res, next) => {
    Test.find()
        .then(response => {
            res.json({ data: response, status: 200 })
        })
        .catch(err => {
            res.json({
                message: 'Error Occured'
            })
            // console.log();
        })
}


// get by id 
const show = (req, res, next) => {
    let empID = req.query.empID;
    Test.findById(empID)
        .then(response => {
            res.json(response)
        })
        .catch((err) => {
            res.json({
                message: 'Not Found'
            })
        })
}


// store data 
const store = (req, res, next) => {
    let a = req.body;
    // console.log("data=>", req);
    // res.send(a);
    // return;


    let emp = new Test({
        name: a.name,
        email: a.email,
        phone: a.phone,
    })

    if (req.file) {
        emp.image = req.file.path
        res.send("File Found");
    }
    // else{
    //     res.send("not Found");
    // }

    emp.save()
        .then((response) => {
            res.json({
                message: 'Saved Data'
            })
        })
        .catch((err) => {
            res.json({
                message: 'Error'
            })
        })
}


// update data 
const update = (req, res, next) => {
    let empId = req.query.empID;

    let updateData = {
        name: req.query.name,
        email: req.query.email,
        phone: req.query.phone,
    }

    Test.findByIdAndUpdate(empId, { $set: updateData })
        .then((response) => {
            res.json({
                message: 'Updated Successfully'
            })
        })
        .catch((err) => {
            console.log(err);
            res.json({
                message: 'Error on Update',
                errmsg: err
            })
        })
}



// delete data 
const destroy = (req, res, next) => {
    let empId = req.body.empId;

    Test.findByIdAndRemove(empId)
        .then((response) => {
            res.json({
                message: 'Deleted Successfully'
            })
        })
        .catch((err) => {
            res.json({
                message: 'Error on Delete'
            })
        })
}



module.exports = {
    index, show, store, update, destroy,
    Payment, notification_request, get_notification
}




