'use strict';

const nodemailer = require('nodemailer');
const submit = require('./submit');
const cors = require('cors')({
  origin: 'http://www.nicktouchette.com',
  methods: ['POST', 'OPTIONS'],
  optionsSuccessStatus: 200
});

exports.submit = (req, res) => {
  cors(req, res, function() {
    submit(req.body, nodemailer)
    .then(function(){
      res.end();
    }, function(code) {
      res.status(code).end();
    });
  });
};

exports.event = (event, callback) => {
  callback();
};
