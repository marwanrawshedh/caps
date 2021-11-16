"use strict";
const faker = require("faker");
const io = require("socket.io-client");
const host = "http://localhost:3000";
const vendorsConnection = io.connect(`${host}/vendors`);
const driverConnection = io.connect(`${host}/drivers`);

class Store {
  constructor(stroe) {
    this.pickup = {
      event: "pickup",
      time: faker.time.recent(),
      payload: {
        store: stroe,
        orderID: `${faker.datatype.number()}-${faker.datatype.number()}-${faker.datatype.number()}`,
        customer: faker.name.findName(),
        address: faker.address.streetAddress(),
      },
    };
  }

  emiting() {
    driverConnection.emit("in-transit-package", this.pickup);
    vendorsConnection.emit("pickup", this.pickup);
    driverConnection.emit("delivered-package", this.pickup);
  }}
  

module.exports=Store