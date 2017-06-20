"use strict";

const contentTypes = require('../../../utils/content-types'),
      sysInfo      = require('../../../utils/sys-info');

module.exports = class OpenShiftRoutes {
  static init(router) {
    router
      .route("/health")
     .get(function(req, res) {
        res.writeHead(200);
        res.end();
     })

    router
      .route(["/info/gen","/info/poll"])
      .get(function(req,res){
         let url = req.url;

         res.setHeader('Content-Type', 'application/json');
         res.setHeader('Cache-Control', 'no-cache, no-store');
         res.end(JSON.stringify(sysInfo[url.slice(6)]()));
      })
  }
}
