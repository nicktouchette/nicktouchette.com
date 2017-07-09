"use strict";

const OpenshiftController = require("../controller/openshift-controller");

module.exports = class OpenShiftRoutes {
  static init(router) {
    router
      .route("/health")
      .get(OpenshiftController.health);

    router
      .route(["/info/gen","/info/poll"])
      .get(OpenshiftController.poll);

    router
      .route("/submit")
      .post(OpenshiftController.submit);
  }
}
