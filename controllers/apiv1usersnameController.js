'use strict'

var varapiv1usersnameController = require('./apiv1usersnameControllerService');

module.exports.findUserByname = function findUserByname(req, res, next) {
  varapiv1usersnameController.findUserByname(req.swagger.params, res, next);
};

module.exports.deleteUser = function deleteUser(req, res, next) {
  varapiv1usersnameController.deleteUser(req.swagger.params, res, next);
};

module.exports.updateUser = function updateUser(req, res, next) {
  varapiv1usersnameController.updateUser(req.swagger.params, res, next);
};