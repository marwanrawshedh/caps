module.exports=(payload)=>{
    console.log(`DRIVER:picked up${payload.payload.orderID}`);
    console.log("EVENT" ,{ "event": 'in-transit',
    "time": payload.time,
    "payload":{
    "store": payload.payload.store,
    "orderId": payload.payload.orderID,
    "customer": payload.payload.customer,
    "address": payload.payload.address}})
    console.log(`DRIVER:delivered up${payload.payload.orderID}`)
    console.log(`VENDOR: Thank you for delivering  ${payload.payload.orderID}`)
    }