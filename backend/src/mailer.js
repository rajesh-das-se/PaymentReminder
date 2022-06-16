var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'rd1585700@outlook.com',
    pass: 'Rajesh@2001'
  }
});

var mailOptions = {
  from: 'rd1585700@outlook.com',
  to: 'rajesh1585700@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});