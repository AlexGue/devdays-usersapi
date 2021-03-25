'use strict'

var varapiv1usersController = require('./apiv1usersControllerService');

module.exports.getUsers = function getUsers(req, res, next) {
  varapiv1usersController.getUsers(req.swagger.params, res, next);
};

module.exports.addUser = function addUser(req, res, next) {
  varapiv1usersController.addUser(req.swagger.params, res, next);
};