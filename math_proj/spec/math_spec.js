//tell the test where to find the code
var math = require('../math');

describe("A simple arithmetic program", function() {
	
  it("can add two numbers", function() {
    expect(math.add(3,5)).toBe(8);
  });

  it("can subtract two numbers", function() {
  	expect(math.subtract(3,5)).toBe(-2);
  });
});