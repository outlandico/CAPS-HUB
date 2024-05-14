![uml](<Screenshot 2024-05-13 at 1.28.09 PM (2)-1.png>)

-created files
-creadated folders
-attached uml
-npm install init -y

### DRIVER.JS

Example:
Imports the eventPool
(object).(method)  “event”, function, may contain information being sent
(callback function) gets ‘logged
(emits or broadcasts) <- is a method that is provided by the object “events”
-it also passes the payload with the information that was sent

// vendor.js

'use strict';

// Import the event pool singleton
const events = require('./eventPool');
events.on("pickup", function(payload){
 console.log("driver got it!", payload)
 events.emit("package-delivered", payload)
})

### VENDOR.JS

Imports the event pool module
Has time interval
id:
(function that generates a random number in which would be with the setInterval, with the name Fred)
(callback function) gets ‘logged’
(emits or broadcasts) <- is a method that is provided by the object “events”
-it also passes the payload with the information that was sent

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

### HUB.JS

Imports the event pool module
Imports the driver module
Imports the vendor module
(object).(method)(“event”, function(may contain information being sent)
(callback function) gets ‘logged’
(emits or broadcasts) <- is a method that is provided by the object “events”
-it also passes the payload with the information that was sent

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
