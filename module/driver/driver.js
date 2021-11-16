'use strict'
const deliveredFunction=require('./handler/deliveredHandler')
const inTransitHandeler=require('./handler/inTransitHandeler')
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const driverConnection = io.connect(`${host}/drivers`);
driverConnection .emit('get_all');
driverConnection.on('in-transit',inTransitHandeler)
driverConnection.on('delivered',(payload) => {
    
    console.log(`delivered ${payload.payload.payload.orderID}`);
    driverConnection.emit('received',payload)
  })



