module.exports = function(){

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'sabrinaanhthong@gmail.com',
    pass: 'Thongfamily7'
    }
});

var mailOptions = {
    from: 'sabrinaanhthong@gmail.com',
    to: 'sabrinaanhthong@gmail.com',
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
