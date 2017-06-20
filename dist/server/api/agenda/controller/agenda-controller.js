"use strict";

const AgendaDAO = require("../dao/agenda-dao");

module.exports = class AgendaController {
  static getAll(req, res) {
      AgendaDAO
        .getAll()
        .then(agendas => res.status(200).json(agendas))
        .catch(error => {console.log(error); res.status(400).json(error.message)});
  }

  static getById(req, res) {
      AgendaDAO
        .getById(req.params.id)
        .then(agenda => res.status(200).json(agenda))
        .catch(error => res.status(400).json(error.message));
  }

  static createAgenda(req, res) {
      let _agenda = req.body;

      AgendaDAO
        .createAgenda(_agenda)
        .then(agenda => res.status(201).json(agenda))
        .catch(error => res.status(400).json(error.message));
  }

  static updateAgenda(req, res) {
      let _agenda = req.body;

      AgendaDAO
        .updateAgenda(_agenda)
        .then(agenda => res.status(204).end())
        .catch(error => res.status(400).json(error.message));
  }

  static deleteAgenda(req, res) {
    let _id = req.params.id;

    AgendaDAO
      .deleteAgenda(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error.message));
  }
}
