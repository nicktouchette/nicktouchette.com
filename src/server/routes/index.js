"use strict";

const AgendaRoutes = require("../api/agenda/route/agenda-route");
const OpenShiftRoutes = require("../api/openshift/route/openshift-route")

module.exports = class Routes {
   static init(app, router) {
     AgendaRoutes.init(router);
     OpenShiftRoutes.init(router);

     app.use("/", router);
   }
}
