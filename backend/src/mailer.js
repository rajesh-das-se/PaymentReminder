var nodemailer = require('nodemailer');

const sendReminder = async (Info) =>{
  const data=Info;
  var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'rd1585700@outlook.com',
      pass: 'Rajesh@2001'
    }
  });

  var mailOptions = {
    from: 'rd1585700@outlook.com',
    to: data.customeremail,
    subject: 'Payment Reminder from',
    text: `Dear ${data.customername}`+'\n'+`You have to pay ${data.balance} Rs to ${data.yourname} before ${data.lastdate} for ${data.description}`
  };

  const k=await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendReminder;