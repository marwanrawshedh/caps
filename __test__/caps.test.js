const delivered=require('../module/handler/deliveredHandler');
const driver=require('../module/handler/vendorHandler');
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
    test("pickup handler", async () => {
        delivered(payload);
      expect(consoleSpy).toHaveBeenCalled();
    });
    test("Vendor Client Application", async () => {
        delivered(payload);
      expect(consoleSpy).toHaveBeenCalled();
    });
    test("Driver Client Application", async () => {
        driver(payload);
      expect(consoleSpy).toHaveBeenCalled();
    });
})