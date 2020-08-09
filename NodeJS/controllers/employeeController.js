const express = require('express');
var router = express.Router();
var ObjectId=require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

//login
router.post('/login', (req, res) => {
    var fname = req.body.fname;
    var lname = req.body.lname;
    Employee.findOne({fname: fname, lname: lname},function(err,emp){
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        if(!emp){
            return res.status(405).send();
        }
        return res.status(200).send();
    })
  
});


router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});




 // ADD user
router.post('/', (req, res) => {
    var emp = new Employee({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        contact: req.body.contact,
        address:req.body.address,
        country:req.body.country

        
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
 //edit
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        contact: req.body.contact,
        address:req.body.address,
        country:req.body.country

    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
//delete 
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;