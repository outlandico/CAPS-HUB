// vendor.js

'use strict';

// Import the event pool singleton
const eventPool = require('./eventPool');

// Function to simulate a package pickup by a vendor
function pickupPackage(storeName) {
  // Generate package information (you can use random data or predefined scenarios)
  const packageInfo = generatePackageInfo(storeName);

  // Emit a pickup event to the event pool with package information
  eventPool.emit('pickup', packageInfo);
}

// Function to generate package information (sample implementation)
function generatePackageInfo(storeName) {
  // You can use random data generation or predefined scenarios here
  return {
    store: storeName,
    orderId: generateOrderId(),
    customer: generateCustomerName(),
    address: generateAddress()
  };
}

// Function to generate a random order ID
function generateOrderId() {
  // Implement logic to generate a unique order ID
  return Math.random().toString(36).substring(2, 10);
}

// Function to generate a random customer name
function generateCustomerName() {
  // Implement logic to generate a random customer name
  // You can use libraries like Chance.js for more realistic data
  return 'John Doe';
}

// Function to generate a random address
function generateAddress() {
  // Implement logic to generate a random address
  // You can use libraries like Chance.js for more realistic data
  return '123 Main Street, Anytown, USA';
}

// Listen for delivered events and respond by thanking the customer
eventPool.on('delivered', (order) => {
  console.log(`VENDOR: Thank you for delivering ${order.orderId}`);
});

// Export the pickupPackage function so it can be used by other modules
module.exports = pickupPackage;
