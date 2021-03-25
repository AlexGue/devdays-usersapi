'use strict'

module.exports.findUserByname = function findUserByname(req, res, next) {
  res.send({
    message: 'This is the mockup controller for findUserByname'
  });
};

module.exports.deleteUser = function deleteUser(req, res, next) {
  res.send({
    message: 'This is the mockup controller for deleteUser'
  });
};

module.exports.updateUser = function updateUser(req, res, next) {
  res.send({
    message: 'This is the mockup controller for updateUser'
  });
};