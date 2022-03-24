'use strict';

var utils = require('../utils/writer.js');
var Budget = require('../service/BudgetService');

module.exports.addBudget = function addBudget (req, res, next, body) {
  Budget.addBudget(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBudget = function deleteBudget (req, res, next, id) {
  Budget.deleteBudget(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBudget = function getBudget (req, res, next, id) {
  Budget.getBudget(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBudgetBusiness = function getBudgetBusiness (req, res, next, id) {
  Budget.getBudgetBusiness(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBudgetClient = function getBudgetClient (req, res, next, id) {
  Budget.getBudgetClient(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBudgetProject = function getBudgetProject (req, res, next, id) {
  Budget.getBudgetProject(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBudget = function updateBudget (req, res, next, body, id) {
  Budget.updateBudget(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
