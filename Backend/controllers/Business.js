'use strict';

var utils = require('../utils/writer.js');
var Business = require('../service/BusinessService');

module.exports.addBusiness = function addBusiness (req, res, next, body) {
  Business.addBusiness(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBusiness = function deleteBusiness (req, res, next, id) {
  Business.deleteBusiness(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBusiness = function getAllBusiness (req, res, next) {
  Business.getAllBusiness()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBusiness = function getBusiness (req, res, next, id) {
  Business.getBusiness(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBusinessBudgets = function getBusinessBudgets (req, res, next, id) {
  Business.getBusinessBudgets(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBusinessClients = function getBusinessClients (req, res, next, id) {
  Business.getBusinessClients(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBusinessProjects = function getBusinessProjects (req, res, next, id) {
  Business.getBusinessProjects(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBusinessStyle = function getBusinessStyle (req, res, next, id) {
  Business.getBusinessStyle(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBusinessToken = function getBusinessToken (req, res, next, id) {
  Business.getBusinessToken(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBusiness = function updateBusiness (req, res, next, body, id) {
  Business.updateBusiness(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
