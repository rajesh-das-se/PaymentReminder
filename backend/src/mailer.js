var nodemailer = require('nodemailer');
require('dotenv').config();

const sendReminder = async (yourname, customername, customeremail, balance, description, lastdate) =>{
  var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: customeremail,
    subject: 'Payment Reminder from',
    text: `Dear ${customername}`+'\n'+`You have to pay ${balance} Rs to ${yourname} before ${lastdate} for ${description}`
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