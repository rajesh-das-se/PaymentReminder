const express = require('express');
require('./DB/conn')
const PaymentInfo = require("./model/PaymentInfo");
const sendMail=require("./mailer")

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.json());


app.get('/', (req, res) => {
    res.send("welcome to server");
})

app.get('/getdetails',async (req, res)=>{
    try{
        const Info=await PaymentInfo.find();
        res.json(Info);
    }catch(e){
        res.send(e.messsage);
    }
})

app.post('/putdetails', async (req, res) => {
    try {
        const data = req.body;
        const Info = new PaymentInfo({
            yourname: data.yourname,
            customername: data.customername,
            customeremail: data.customeremail,
            balance: data.balance,
            description: data.description,
            lastdate: data.lastdate
        })
        const ack = await Info.save();
        console.log(ack)
        res.send("Info saved success fully");
    } catch (e) {
        console.log(e.message);
        res.Error("Error during saving data");
    }
})

app.post('/sendreminder',async (req, res)=>{
    try{
    const _id=req.body._id;
    const data=await PaymentInfo.find({_id});
    sendMail(data[0]);
    res.json({message:"okay"});
    }catch(e){
        res.json({message:e.message})
    }
})

app.post('/remove',async (req,res)=>{
    try{
        const ack=await PaymentInfo.deleteOne({_id:req.body._id});
        console.log(ack);
        res.send("okay");
    }
    catch(error){
        res.json({message:error.message});
    }
})

app.get('*', (req, res) => {
    res.status(404).send("This page does not exist");
})

app.listen(port, (err) => {
    if (err) console.log(err.messsage);
    else {
        console.log(`running at http://localhost:${port}`);
    }
})
