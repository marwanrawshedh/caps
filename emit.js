"use strict";
const events = require("./globalEvent");
require("./module/vendor");
require("./module/delivered");
require("./module/pickup");
events.on("notes-parts", notes);

function notes(payload) {
  events.emit("pickup", payload);
  events.emit("in-transit", payload);
  events.emit("delivered", payload);
}
