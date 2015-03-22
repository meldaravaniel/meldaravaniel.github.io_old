function Neopixel(){
};

Neopixel.prototype.getHexValue = function(decimal){
	if(decimal < 0 || decimal > 255){
		return "Invalid number.";
	}
	return decimal.toString(16);
};