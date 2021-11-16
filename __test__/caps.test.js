const pickup=require('../handler/pickup');
const inTransit=require('../handler/inTransit');
const delivered=require('../handler/delivered');
const vendor=require('../module/venedor/handler/vendorHandler');
const driverdelivered=require('../module/driver/handler/deliveredHandler');
const driverInTransit=require('../module/driver/handler/inTransitHandeler');
const faker=require('faker');
describe("logger test", () => {
    let payload={
      id: 'e69cd79d-ce52-4f7f-9cf2-ca5968014dc4',
      payload: {
        event: 'pickup',
        time: 1637071740113,
        payload: {
          store: '1-800-flowers',
          orderID: '89244-14497-32260',
          customer: 'Heather Adams',
          address: '371 Schmeler Rest'
        }
      }
    }
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