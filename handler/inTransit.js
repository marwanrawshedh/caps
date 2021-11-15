module.exports = (payload) => {
  console.log("EVENT", {
    event: "in-transit",
    time: payload.time,
    payload: {
      store: payload.payload.store,
      orderId: payload.payload.orderID,
      customer: payload.payload.customer,
      address: payload.payload.address,
    },
  });
};
