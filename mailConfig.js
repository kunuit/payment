const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PWD_EML
  }
});

// const mailOptions = {
//   from: 'Xuân Tình Nguyện',
//   to: 'cutuinholam@gmail.com',
//   subject: 'Yêu cầu đặt lại mật khẩu - Xuân Tình Nguyện',
//   html: '<p>Chào bạn, bạn vừa mới yêu câu đặt lại mật khẩu. Đây là mã xác thực </p> <h2>54569</h2>'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

module.exports = transporter