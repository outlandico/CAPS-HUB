// hub.js

'use strict';

// Import the event pool singleton
const events = require('./eventPool');
const driver = require('./driver');
const vendor = require('./vendor');



events.on("ready-for-pickup", function (payload) {
  console.log("Hub:", payload);
  events.emit("pickup", payload);
});

events.on("package-delivered", function (payload) {
  console.log("Hub-package-delivered:", payload);
  events.emit("delivered", payload);
});