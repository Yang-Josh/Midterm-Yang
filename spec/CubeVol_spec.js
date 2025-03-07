import { CubeVol } from '../CubeVol.js'

describe("the height", function() {
    it("The volume of the cube is", function() {
      let volume = CubeVol();
      expect(volume).toBe(1);
    });
  });
  