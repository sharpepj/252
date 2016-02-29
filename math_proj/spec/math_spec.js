//tell the test where to find the code
var math = require('../math');

describe("A simple arithmetic program", function() {
	
  it("can add two numbers", function() {
    expect(math.add(3,5)).toBe(8);
    expect(math.add(3.2,5.7)).toBe(8.9);
    expect(math.add(-3,5)).toBe(2);
    expect(math.add(3.2,-5.7)).toBe(-2.5);
  });

  it("can subtract two numbers", function() {
  	expect(math.subtract(3,5)).toBe(-2);
    expect(math.subtract(-3.2,5.7)).toBe(-8.9);
  });

  it("can multiply two numbers", function() {
  	expect(math.multiply(3,5)).toBe(15);
    expect(math.multiply(3,0)).toBe(0);
    expect(math.multiply(3.3,5)).toBe(16.5);
    expect(math.multiply(-3.3,5)).toBe(-16.5);
  });

  it("can divide two numbers", function() {
  	expect(math.divide(3,5)).toBe(0.6);
    expect(math.divide(4.5,2.5)).toBe(1.8);
    expect(math.divide(-4.5,2.5)).toBe(-1.8);
  });

  it("can't divide by zero", function() {
    expect(math.divide(2,0)).toBe("Error! Can't divide by zero");
  });

});