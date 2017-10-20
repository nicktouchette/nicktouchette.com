const env = require('env');

var submit = (data, mailer) => {
  return new Promise((resolve, reject) => {
    // Test data for required fields and reject if any are blank or missing
    if (['email', 'company', 'name', 'message'].some((field)=>data[field] === '' || data[field] === undefined)) {
      return reject(422);
    };

    // mailer transport config
    let transporter = mailer.createTransport({
      service: env.service,
      auth: {
        user: env.email,
        pass: env.password
      }
    });

    // mailer options using data from user
    let mailOptions = {
      to: env.email,
      subject: 'Website submission from ' + data.name,
      text: 'Email: ' + data.email + '\nCompany: ' + data.company + '\nMessage: ' + data.message
    };

    // send the email given the options using the specified mailer transport
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Message send failed: ' + error);
        return reject(400);
      } else {
        console.log('Message %s sent: %s', info.messageId, info.response);
        return resolve();
      }
    });
  });
}

module.exports = submit;
