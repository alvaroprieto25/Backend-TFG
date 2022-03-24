'use strict';

var utils = require('../utils/writer.js');
var Project = require('../service/ProjectService');

module.exports.addProject = function addProject (req, res, next, body) {
  Project.addProject(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProject = function deleteProject (req, res, next, id) {
  Project.deleteProject(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProject = function getProject (req, res, next, id) {
  Project.getProject(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProjectBudget = function getProjectBudget (req, res, next, id) {
  Project.getProjectBudget(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProjectBusiness = function getProjectBusiness (req, res, next, id) {
  Project.getProjectBusiness(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProjectClient = function getProjectClient (req, res, next, id) {
  Project.getProjectClient(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProject = function updateProject (req, res, next, body, id) {
  Project.updateProject(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
