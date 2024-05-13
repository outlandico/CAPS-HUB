// hub.js

'use strict';

// Import the event pool singleton
const eventPool = require('./eventPool');

// Listen to all events from the event pool
eventPool.onAny((eventName, eventData) => {
  // Log the event with timestamp and payload information
  console.log('EVENT:', {
    event: eventName,
    time: new Date().toISOString(),
    payload: eventData
  });
});
