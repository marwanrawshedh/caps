const pickup=require('../handler/pickup');
const inTransit=require('../handler/inTransit');
const delivered=require('../handler/delivered');
const vendor=require('../module/venedor/handler/vendorHandler');
const driverdelivered=require('../module/driver/handler/deliveredHandler');
const driverInTransit=require('../module/driver/handler/inTransitHandeler');
const faker=require('faker');
describe("logger test", () => {
    let payload={ 
        "event": "pickup",
        "time": faker.time.
        recent(),
        "payload": { 
          "store": "1-206-flowers",
          "orderID": `${faker.datatype.number()}-${faker.datatype.number()}-${faker.datatype.number()}`,
          "customer": faker.name.findName(),
          "address": faker.address.streetAddress()
        }
      };
    let consoleSpy;
    beforeEach(() => {
      consoleSpy = jest.spyOn(console, "log").mockImplementation();
    });
  
    afterEach(() => {
      consoleSpy.mockRestore();
    });
    test("1-CAPS pickup handler", async () => {
      pickup(payload);
      expect(consoleSpy).toHaveBeenCalled();
    });
    test("2-CAPS in-Transit", async () => {
      inTransit(payload);
      expect(consoleSpy).toHaveBeenCalled();
    });
    test("3-CAPS delivered handler", async () => {
        delivered(payload);
      expect(consoleSpy).toHaveBeenCalled();
    });
    test("4-vendor handler", async () => {
      vendor(payload);
      expect(consoleSpy).toHaveBeenCalled();
    });
    test("5-driver handler (pickup)", async () => {
      driverInTransit(payload);
      expect(consoleSpy).toHaveBeenCalled();
    });
    test("6-driver handler (deliverd)", async () => {
      driverdelivered(payload);
    expect(consoleSpy).toHaveBeenCalled();
  
  });
})