"use strict";


const os = require("os"),
      http = require("http"),
      express = require("express"),
      RoutesConfig = require("./config/routes.conf"),
      Routes = require("./routes/index"),
      env          = process.env;

const PORT = env.NODE_PORT || 3000;

const app = express();

var server = require('http').Server(app);

RoutesConfig.init(app);
Routes.init(app, express.Router());

server.listen(PORT, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
