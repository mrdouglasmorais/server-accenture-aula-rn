'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _server = require('../server.json');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = new _express.Router();

routes.get('/all', (req, res) => {
  return res.json(_server2.default.accenture.map(dt => dt));
});

routes.get('/find', (req, res) => {
  const id = req.query.id;
  const filter = _server2.default.accenture.find(dt => dt.id === parseInt(id));

  return res.json(filter);
});

exports.default = routes;