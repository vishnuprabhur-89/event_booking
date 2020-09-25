var express = require("express");
var Router = express.Router();
var Events = require("../controllers/controller");

Router.get('/access/data', Events.Access_Data);
Router.post('/access/event', Events.eventId);
module.exports = Router;