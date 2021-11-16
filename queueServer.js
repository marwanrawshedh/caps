"use strict";
require("dotenv").config();
const PORT = process.env.PORT;
const caps = require("socket.io")(PORT);
const vendors = caps.of("/vendors");
const drivers = caps.of("/drivers");
const pickup = require("./handler/pickup");
const inTransit = require("./handler/inTransit");
const delivered = require("./handler/delivered");
const uuid = require("uuid").v4;
const msgQueue = {
  chores: {},
};
vendors.on("connection", (socket) => {
  // console.log("CONNECTED", socket.id);
  const id = uuid();
  socket.on("pickup", (payload) => {
    msgQueue.chores[id] = payload;
    pickup(payload);
    vendors.emit("pickup", payload);
  });
});

drivers.on("connection", (socket) => {
  
  // console.log("CONNECTED", socket.id);
  socket.on("get_all", () => {
    Object.keys(msgQueue.chores).forEach((id) => {
      drivers.emit("in-transit", { id: id, payload: msgQueue.chores[id] });
      drivers.emit("delivered", { id: id, payload: msgQueue.chores[id] });
    });
  });

  socket.on("in-transit-package", (payload) => {
    Object.keys(msgQueue.chores).forEach((id) => {
    drivers.emit("in-transit", { id: id, payload: msgQueue.chores[id] });
  })});
  socket.on("delivered-package", (payload) => {
    Object.keys(msgQueue.chores).forEach((id) => {
    drivers.emit("delivered", { id: id, payload: msgQueue.chores[id] });
  })});
  socket.on("received", (payload) => {
    inTransit(payload.payload);
    delivered(payload.payload);
    delete msgQueue.chores[payload.id];
  });
});
