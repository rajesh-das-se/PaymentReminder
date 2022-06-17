const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DBADDRESS)
.then(()=>{
    console.log("connected database");
}).catch((e)=>{
    console.log(e.message);
})