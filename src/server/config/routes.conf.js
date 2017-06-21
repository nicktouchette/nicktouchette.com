"use strict";

const bodyParser = require("body-parser");
const contentLength = require("express-content-length-validator");
const helmet = require("helmet");
const express = require("express");
const compression = require("compression");
const zlib = require("zlib");
const path = require("path");

module.exports = class RouteConfig {
    static init(application) {
        let _root = process.cwd();
        let _serverDirectory = path.join(__dirname, '..');
        let _tempClient = "/.tmp/client/serve";
        let _srcClient = "/src/client";

        application.use(compression({
            level: zlib.Z_BEST_COMPRESSION,
            threshold: "1kb"
        }));

        if (process.env.NODE_ENV === "development") {
          application.use(express.static(path.join(_root, _tempClient)));
          application.use(express.static(path.join(_root, _srcClient)));
          application.use('/bower_components', express.static(path.join(_root, 'bower_components')));
        }
        application.use(express.static(path.join(_root, '/client')));

        application.use(bodyParser.json());
        application.use(contentLength.validateMax({max: 999}));
        application.use(helmet());
    }
}
