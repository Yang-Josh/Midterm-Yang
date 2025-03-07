import { F_to_C } from '../F_to_C.js'

describe("with a fahrenheit", function() {
    it("it is celsius", function() {
      let celsius = F_to_C(32);
      expect(celsius).toBe(0);
    });
  });
  