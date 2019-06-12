module.exports = function(){

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'email@gmail.com',
    pass: 'Password'
    }
});

var mailOptions = {
    from: 'email@gmail.com',
    to: 'useremail@gmail.com',
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

};