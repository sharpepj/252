var fb = require('../fizzbuzz');

describe("A fizzbuzz program", function() {

	it("can count from 1 to 5", function() {
		expect(fb.fizzbuzz(1,5)).toBe("1 2 fizz 4 buzz");
	});

	it("can do fizzbuzz from 6 to 10", function() {
		expect(fb.fizzbuzz(6, 10)).toBe("fizz 7 8 fizz buzz");
	});

	it("can do fizzbuzz from 11 to 15", function() {
		expect(fb.fizzbuzz(11, 15)).toBe("11 fizz 13 14 fizzbuzz");
	});

	it("can do fizzbuzz from 16 to 20", function() {
		expect(fb.fizzbuzz(16, 20)).toBe("16 17 fizz 19 buzz");
	});

	it("can do fizzbuzz from 21 to 25", function() {
		expect(fb.fizzbuzz(21, 25)).toBe("fizz 22 23 fizz buzz");
	});

	it("can do fizzbuzz from 26 to 30", function() {
		expect(fb.fizzbuzz(26, 30)).toBe("26 fizz 28 29 fizzbuzz");
	});

	it("can do fizzbuzz from 31 to 35", function() {
		expect(fb.fizzbuzz(31, 35)).toBe("31 32 fizz 34 buzz");
	});

	it("can do fizzbuzz from 36 to 40", function() {
		expect(fb.fizzbuzz(36, 40)).toBe("fizz 37 38 fizz buzz");
	});

	it("can do fizzbuzz from 41 to 45", function() {
		expect(fb.fizzbuzz(41, 45)).toBe("41 fizz 43 44 fizzbuzz");
	});

	it("can do fizzbuzz from 46 to 50", function() {
		expect(fb.fizzbuzz(46, 50)).toBe("46 47 fizz 49 buzz");
	});

	it("can fizzbuzz from 51 to 55", function() {
		expect(fb.fizzbuzz(51,55)).toBe("fizz 52 53 fizz buzz");
	});

	it("can do fizzbuzz from 56 to 60", function() {
		expect(fb.fizzbuzz(56, 60)).toBe("56 fizz 58 59 fizzbuzz");
	});

	it("can do fizzbuzz from 61 to 65", function() {
		expect(fb.fizzbuzz(61, 65)).toBe("61 62 fizz 64 buzz");
	});

	it("can do fizzbuzz from 66 to 70", function() {
		expect(fb.fizzbuzz(66, 70)).toBe("fizz 67 68 fizz buzz");
	});

	it("can do fizzbuzz from 71 to 75", function() {
		expect(fb.fizzbuzz(71, 75)).toBe("71 fizz 73 74 fizzbuzz");
	});

	it("can do fizzbuzz from 76 to 80", function() {
		expect(fb.fizzbuzz(76, 80)).toBe("76 77 fizz 79 buzz");
	});

	it("can do fizzbuzz from 81 to 85", function() {
		expect(fb.fizzbuzz(81, 85)).toBe("fizz 82 83 fizz buzz");
	});

	it("can do fizzbuzz from 86 to 90", function() {
		expect(fb.fizzbuzz(86, 90)).toBe("86 fizz 88 89 fizzbuzz");
	});

	it("can do fizzbuzz from 91 to 95", function() {
		expect(fb.fizzbuzz(91, 95)).toBe("91 92 fizz 94 buzz");
	});

	it("can do fizzbuzz from 96 to 100", function() {
		expect(fb.fizzbuzz(96, 100)).toBe("fizz 97 98 fizz buzz");
	});
});