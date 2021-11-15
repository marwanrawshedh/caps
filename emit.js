"use strict";
const faker=require('faker')
const io = require("socket.io-client");
const host = "http://localhost:3000";
const vendorsConnection = io.connect(`${host}/vendors`);
const driverConnection = io.connect(`${host}/drivers`);

setInterval(() => {
  const pickup = {
    event: "pickup",
    time: faker.time.recent(),
    payload: {
      store: "1-206-flowers",
      orderID: `${faker.datatype.number()}-${faker.datatype.number()}-${faker.datatype.number()}`,
      customer: faker.name.findName(),
      address: faker.address.streetAddress(),
    },
  };

  vendorsConnection.emit("pickup", pickup);
  driverConnection.emit("in-transit-package", pickup);
  driverConnection.emit("delivered-package", pickup);
}, 3000);
