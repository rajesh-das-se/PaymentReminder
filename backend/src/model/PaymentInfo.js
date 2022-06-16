const mongoose = require('mongoose');
const validator = require('validator');

const paymentInfoSchema=new mongoose.Schema({
    yourname:{
        type: String,
        required: true
    },
    customername:{
        type: String,
        required: true
    },
    customeremail:{
        type: String,
        required: true
    },
    balance:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    lastdate:{
        type: Date,
        required: true,
        default: Date.now()
    }
})

const PaymentInfo=new mongoose.model('PaymentInfo', paymentInfoSchema);

module.exports=PaymentInfo;