'use strict';

var utils = require('../utils/writer.js');
var Token = require('../service/TokenService');

module.exports.addToken = function addToken (req, res, next, body) {
  Token.addToken(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteToken = function deleteToken (req, res, next, id) {
  Token.deleteToken(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getToken = function getToken (req, res, next, id) {
  Token.getToken(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateToken = function updateToken (req, res, next, body, id) {
  Token.updateToken(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
