import { Earthquake } from '../Earthquake.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let result = Earthquake();
      expect(result).toBe("hello");
    });
  });
  