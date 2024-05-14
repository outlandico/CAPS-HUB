// vendor.js

'use strict';

// Import the event pool singleton
const events = require('./eventPool');

function pickupPackage(){
  let order = {
    id:Math.random(), name: "Fred"
  }
    
 events.emit("ready-for-pickup", order)
  
}

events.on("delivered", function(payload){
  console.log("Vendor says thank you!", payload)
})
setInterval(function () {
  pickupPackage();
}, 1000)

