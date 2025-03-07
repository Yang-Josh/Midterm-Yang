import { MemberCalc } from '../MemberCalc.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let total = MemberCalc();
      expect(total).toBe(10);
    });
  });
  