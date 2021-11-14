'use strict'
const deliveredFunction=require('./handler/deliveredHandler')
const events = require('../globalEvent');
events.on('delivered',deliveredFunction)
