"use strict";

const AgendaController = require("../controller/agenda-controller");

module.exports = class AgendaRoutes {
    static init(router) {
      router
        .route("/api/agendas")
        .get(AgendaController.getAll)
        .post(AgendaController.createAgenda);

      router
        .route("/api/agendas/:id")
        .get(AgendaController.getById)
        .put(AgendaController.updateAgenda)
        .delete(AgendaController.deleteAgenda);
    }
}
