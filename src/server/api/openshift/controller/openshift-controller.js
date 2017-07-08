"use strict";

const nodemailer = require('nodemailer');

const contentTypes = require('../../../utils/content-types'),
      sysInfo      = require('../../../utils/sys-info');

module.exports = class OpenshiftController {
  static health(req, res) {
    res.writeHead(200);
    res.end();
  }

  static poll(req, res) {
    let url = req.url;

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache, no-store');
    res.end(JSON.stringify(sysInfo[url.slice(6)]()));
  }

  static submit(req, res){
    var data = req.body;

    if (['email', 'company', 'name', 'message'].some((field)=>data[field]==='')) res.status(422).end();

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'touchette@gmail.com',
        pass: process.env.GMAIL_PASS
      }
    });

    let mailOptions = {
        to: 'touchette@gmail.com',
        subject: 'Website submission from ' + data.name,
        text: 'Email: ' + data.email + '\nCompany: ' + data.company + '\nMessage: ' + data.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

    res.end();
  }
}
