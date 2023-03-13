const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/newDB',

// (err) => {
//     if(!err){
//         console.log("DB Connection Successful");
//     }else{
//         console.log("Error in Connection "+ err);
//     }
// });

module.exports = mongoose;

mongoose.connect('mongodb://localhost:27017/newDB') // if error it will throw async error
    .then(() => { // if all is ok we will be here
        return server.start();
    })
    .catch(err => { // we will not be here...
        console.error('App starting error:', err.stack);
        process.exit(1);
    });