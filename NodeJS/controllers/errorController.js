
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Errors } = require('../models/errors');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    Errors.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Errors :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Errors.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var err = new Errors({
        myid: req.body.myid,
        errormsg: req.body.errormsg,
        solution1: req.body.solution1,
        solution2: req.body.solution2,
        solution3: req.body.solution3
    });
    err.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Error Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var err = {
        myid: req.body.myid,
        errormsg: req.body.errormsg,
        solution1: req.body.solution1,
        solution2: req.body.solution2,
        solution3: req.body.solution3,
    };
    Errors.findByIdAndUpdate(req.params.id, { $set: err }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Error Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Errors.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Error Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
