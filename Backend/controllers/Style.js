'use strict';

var utils = require('../utils/writer.js');
var Style = require('../service/StyleService');

module.exports.addStyle = function addStyle (req, res, next, body) {
  Style.addStyle(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteStyle = function deleteStyle (req, res, next, id) {
  Style.deleteStyle(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStyle = function getStyle (req, res, next, id) {
  Style.getStyle(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateStyle = function updateStyle (req, res, next, body, id) {
  Style.updateStyle(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
