// vendor.js

'use strict';

// Import the event pool singleton
const events = require('./eventPool');
events.on("pickup", function(payload){
  console.log("driver got it!", payload)
  events.emit("package-delivered", payload)
})
