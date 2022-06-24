var nodemailer = require('nodemailer');
require('dotenv').config();

const sendReminder = (data) =>{
  console.log(data);
  var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
console.log(data.customeremail);
  var mailOptions = {
    from: process.env.EMAIL,
    to:[data.customeremail],
    subject: 'Payment Reminder from',
    text: `Dear ${data.customername}`+'\n'+`You have to pay ${data.balance} Rs to ${data.yourname} before ${data.lastdate} for ${data.description}`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error.message);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendReminder;