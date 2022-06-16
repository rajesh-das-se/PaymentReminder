const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.connect("mongodb://localhost:27017/PaymentRemiderDB")
.then(()=>{
    console.log("connected database");
}).catch((e)=>{
    console.log(e.message);
})