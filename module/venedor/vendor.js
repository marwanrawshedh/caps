'use strict'
const driverFunction=require('./handler/vendorHandler');
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const vendorsConnection = io.connect(`${host}/vendors`);

vendorsConnection.on('pickup',driverFunction);