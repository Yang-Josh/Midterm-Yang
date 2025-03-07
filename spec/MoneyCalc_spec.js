import { MoneyCalc } from '../MoneyCalc.js'

describe("The total value is $", function() {
    it("contains spec with an expectation", function() {
        let Vtotal = MoneyCalc(0,0,2,2,0);
      expect(Vtotal).toBe(2.5);
    });
  });
  