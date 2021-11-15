"use strict";
require('dotenv').config();
const PORT = process.env.PORT ;
const caps = require("socket.io")(PORT);
const vendors = caps.of("/vendors");
const drivers = caps.of("/drivers");
const pickup=require('./handler/pickup');
const inTransit=require('./handler/inTransit');
const delivered=require('./handler/delivered');
vendors.on("connection", (socket) => {
  // console.log("CONNECTED", socket.id);
  socket.on("pickup", (payload) => {
    pickup(payload)
    vendors.emit("pickup", payload);
  });
});

drivers.on("connection", (socket) => {
  // console.log("CONNECTED", socket.id);
  socket.on("in-transit-package", (payload) => {
    inTransit(payload)
    drivers.emit("in-transit", payload);
  });
  socket.on("delivered-package", (payload) => {
    delivered(payload)
    drivers.emit("delivered", payload);
  });
});
