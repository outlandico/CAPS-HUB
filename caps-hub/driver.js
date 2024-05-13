// driver.js

'use strict';

// Import the event pool singleton
const eventPool = require('./eventPool');

// Listen for pickup events from the event pool
eventPool.on('pickup', (packageInfo) => {
  // Log a message indicating that the package has been picked up by the driver
  console.log(`DRIVER: picked up ${packageInfo.orderId}`);

  // Emit an 'in-transit' event to the event pool with the package information
  eventPool.emit('in-transit', packageInfo);

  // Log a message indicating that the package is in transit
  console.log(`DRIVER: in transit ${packageInfo.orderId}`);

  // Simulate a delay to represent the transit time
  setTimeout(() => {
    // Emit a 'delivered' event to the event pool with the package information
    eventPool.emit('delivered', packageInfo);

    // Log a message indicating that the package has been delivered
    console.log(`DRIVER: delivered ${packageInfo.orderId}`);
  }, 2000); // Simulated transit time of 2 seconds
});
