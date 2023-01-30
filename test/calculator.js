var assert = require("assert");
const { add, mul, div, sub } = require("./../app/calculator");

describe("Test Adding function", function () {
	describe("Adding two positive numbers", function () {
		it("add(5, 2) expected result 7 PASSED", function () {
			assert.equal(add(5, 2), 7);
		});
	});
	describe("Adding two positive numbers with wrong output", function () {
		it("add(5, 2) unexpected result 8 FAILED", function () {
			assert.equal(add(5, 2), 8);
		});
	});
});

describe("Test Subtracting function", function () {
	describe("Subtracting two positive numbers", function () {
		it("sub(5, 2) expected result 3 PASSED", function () {
			assert.equal(sub(5, 2), 3);
		});
	});
	describe("Subtracting two positive numbers", function () {
		it("sub(5, 2) unexpected result 5 FAILED", function () {
			assert.equal(sub(5, 2), 5);
		});
	});
});

describe("Test Multiplying function", function () {
	describe("Multiplying two positive numbers", function () {
		it("mul(5, 2) expected result 10 PASSED", function () {
			assert.equal(mul(5, 2), 10);
		});
	});
	describe("Multiplying two positive numbers", function () {
		it("mul(5, 2) unexpected result 12 FAILED", function () {
			assert.equal(mul(5, 2), 12);
		});
	});
});

describe("Test Dividing function", function () {
	describe("Dividing two positive numbers not 0", function () {
		it("div(10, 2) expected result 5 PASSED", function () {
			assert.equal(div(10, 2), 5);
		});
	});
	describe("Dividing two positive numbers not 0", function () {
		it("sub(10, 2) unexpected result 2 FAILED", function () {
			assert.equal(div(10, 2), 2);
		});
	});
});
