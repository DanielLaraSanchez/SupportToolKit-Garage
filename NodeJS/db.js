// const mongoose = require('mongoose');
//
// mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
//   if (!err)
//   console.log('MngoDB connection succeded.....');
//   else
//     console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
//
//
// });
//
// module.exports = mongoose;
const mongoose = require('mongoose');

mongoose.connect('mongodb://daniellaraedinburgh:Mayusculas2@ds259268.mlab.com:59268/cruddb', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
