var Crypto = function(text) {
	this.orig_text = text;

	/* The normalizePlaintext function removes
	* spaces, punctuation, and the message is downcased
	*/

	this.normalizePlaintext = function() {
		return this.orig_text.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
	}

	this.normal_text = this.normalizePlaintext();

	/* The size function returns the size of the square
	* if the length is a perfect square then the
	* size is that numbers square root for
	* the number of columns.
	* if the lenght is not a perfect square then
	* choose the number of columns that corresponds
	* to the smallest square that is larger than the
	* number of characters in the message.
	* 
	* For example a message b/w 5 and 8 characters
	* should use a rectangle 3 characters wide.
	*/

	this.size = function() {
		size =  Math.sqrt(this.normal_text.length);
		if (size % 1 != 0) {
			size = Math.floor(size)+1;
		}
		return size;
	}

	this.plaintextSegments = function() {
		var output = "";
	}
};

module.exports = Crypto;