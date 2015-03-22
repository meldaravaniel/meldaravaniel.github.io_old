describe("Neopixel", function(){

	var neopixel;

	beforeEach(function(){
		neopixel = new Neopixel();
	});

	it("should take a decimal and return hexidecimal", function(){
		expect(neopixel.getHexValue(0)).toEqual('0');
		expect(neopixel.getHexValue(255)).toEqual('ff');
	});

	it("should not allow negative numbers", function(){
		expect(neopixel.getHexValue(-1)).toEqual("Invalid number.");
	});

	it("should not allow numbers higher than 255", function(){
		expect(neopixel.getHexValue(256)).toEqual("Invalid number.");
	});
});
