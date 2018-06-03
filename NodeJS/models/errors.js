// const mongoose = require('mongoose');
//
// var Employee = mongoose.model('Employees', {
//   name: { type: String },
//   position: { type: String},
//   office: { type: String},
//   salary: { type: Number}
// });
//
// module.exports = {Employee};
const mongoose = require('mongoose');

var Errors = mongoose.model('Errors', {
    myid: { type: String},
    errormsg: { type: String },
    solution1: { type: String },
    solution2: { type: String },
    solution3: { type: String }
});

module.exports = { Errors };
