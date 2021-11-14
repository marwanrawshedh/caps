'use strict'
const events = require('../globalEvent');
const driverFunction=require('./handler/vendorHandler');
events.on('in-transit',driverFunction);