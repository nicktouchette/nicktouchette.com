"use strict";

const Promise = require("bluebird");
const _ = require("lodash");

var Datastore = require('nedb'),
    db = new Datastore();

module.exports = class AgendaDAO {
  static getAll () {
      return new Promise((resolve, reject) => {
          let _query = {};

          db.find(_query).sort({createdAt: 1})
              .exec((err, agendas) => {
                err ? reject(err)
                    : resolve(agendas);
              });
      });
  };

  static getById (id) {
      return new Promise((resolve, reject) => {
          if (!id) {
            return reject(new Error("Id is not defined."));
          }

          db.findOne({ _id: id })
              .exec((err, agenda) => {
                err ? reject(err)
                    : resolve(agenda);
              });
      });
  }

  static createAgenda (agenda) {
      return new Promise((resolve, reject) => {

        if (agenda.constructor === Object && Object.keys(agenda).length === 0) {
            return reject("Agenda is not a valid object.");
        }

        if (agenda._id) {
          return reject(new Error("_id should not be defined."));
        }

        if (agenda.description.length > 140) return reject(new Error("Description max is 140 characters"));

        db.count({}, function (err, count) {
          if (count >= 8) return reject(new Error("Maximum of 8 agendas reached."));

          db.insert(agenda, (err, saved) => {
            err ? reject(err)
                : resolve(saved);
          });
        })
      });
  }

  static updateAgenda (agenda) {
      return new Promise((resolve, reject) => {
        if (agenda.constructor === Object && Object.keys(agenda).length === 0) {
            return reject(new Error("Agenda is not a valid object."));
        }

        if (agenda.description.length > 140) return reject(new Error("Description max is 140 characters"));

        db.update({_id: agenda._id}, agenda, {}, (err, saved) => {
          err ? reject(err)
              : resolve(saved);
        });
      });
  }

  static deleteAgenda (id) {
      return new Promise((resolve, reject) => {
          if (!_.isString(id)) {
              return reject(new Error("Id is not a valid string."));
          }

          db.remove({ _id: id }, {}, (err, deleted) => {
            err ? reject(err)
                : resolve();
         });
      });
  }
}
