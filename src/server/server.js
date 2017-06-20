"use strict";

const PORT = process.env.PORT || 3333;

const os = require("os"),
      http = require("http"),
      express = require("express"),
      RoutesConfig = require("./config/routes.conf"),
      Routes = require("./routes/index");

const app = express();

var server = require('http').Server(app);

RoutesConfig.init(app);
Routes.init(app, express.Router());

server.listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`environment: ${process.env.NODE_ENV}`);
    });
