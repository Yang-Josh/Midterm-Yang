import { Earthquake } from '../Earthquake.js'

describe("with a richter of", function() {
    it("the earthquake result is", function() {
      let result = Earthquake(2);
      expect(result).toBe("Little to no damage");
    });
  });
  