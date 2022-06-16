const express = require('express');
require('./DB/conn')
const PaymentInfo = require("./model/PaymentInfo");

const app=express();
const port=5000||process.env.PORT;

app.use(express.json());


app.get('/', (req, res)=>{
    res.send("welcome to server");
})

app.post('/putdetails', (req, res)=>{
    console.log("oojkju");
    console.log(req.body);
    res.send("okay");
})

app.get('*',(req, res)=>{
    res.status(404).send("This page does not exist");
})

app.listen(port, (err)=>{
    if(err) console.log(err.messsage);
    else{
        console.log(`running at http://localhost:${port}`);
    }
})
