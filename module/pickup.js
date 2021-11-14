'use strict'
const events = require('../globalEvent');
const faker=require('faker')
const pickupFunction=require('./handler/pickupHandler')
require('../emit');
events.on('pickup',pickupFunction)
setInterval(() => {
    const pickup= { 
        "event": "pickup",
        "time": faker.time.
        recent(),
        "payload": { 
          "store": "1-206-flowers",
          "orderID": `${faker.datatype.number()}-${faker.datatype.number()}-${faker.datatype.number()}`,
          "customer": faker.name.findName(),
          "address": faker.address.streetAddress()
        }
      }
    
    events.emit('notes-parts',  pickup );
    
  
  }, 2000);



