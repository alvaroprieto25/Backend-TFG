'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.login = function login (req, res, next, body) {
  Default.login(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.register = function register (req, res, next, body) {
  Default.register(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
