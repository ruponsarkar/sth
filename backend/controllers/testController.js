const Test = require('../models/Test')



// get data 
const index = (req, res, next) => {
    Test.find()
        .then(response => {
            res.json({data: response, status: 200})
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

    if(req.file){
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
    index, show, store, update, destroy
}




