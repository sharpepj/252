var Crypto = function(text) {
	this.orig_text = text;

	/* The normalizePlaintext function removes
	* spaces, punctuation, and the message is downcased
	*/

	this.normalizePlaintext = function() {
		return this.orig_text.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
	}

	//this.normal_text = this.normalizePlaintext();

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
		size =  Math.sqrt(this.normalizePlaintext().length);
		if (size % 1 != 0) {
			size = Math.ceil(size);
		}
		return size;
	}

	/* The plaintextSegments function breaks up the plaintext
	* string into an array of segmented strings where the length
	* of each segment is based on the size from the size
	* function until it runs out of characters to pull from
	* the normalized plaintext string.
	*/
	this.plaintextSegments = function() {
		var output = [];
		var size = this.size();
		var text = this.normalizePlaintext();
		
		for (var i = 0; i < size; i++) {
			if(text != "") {
			var str = "";
				for (var j = 0; j < size; j++) {
					str += text.charAt(j);
				}
			output[i] = str;
			text = text.substring(size);
			}
		}
		return output;
	}

	//this.segments = this.plaintextSegments();

	/* The ciphertext function takes the plaintext segments
	* and encrypts them into ciphertext, grouping the new
	* words with the same index of each word together.
	* For example the first letter in every word is the first
	* word then the second letter in every word is the second
	* word and so on and so forth
	*/
	this.ciphertext = function() {
		var seg = this.plaintextSegments();
		var output = "";
		for (var i = 0; i < seg.length; i++) {
			for (var j = 0; j < seg.length; j++) {
				output += seg[j].charAt(i);
			}
		}
		return output;
	}
};

module.exports = Crypto;