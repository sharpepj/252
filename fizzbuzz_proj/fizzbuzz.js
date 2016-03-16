exports.count = function(start, end) {
	// create a variable for our output
	var output = start;

	// modify output to look like what we want
	for (var i = start; i < end; i += 1) {
		// code to be repeated goes here
		output = output + " " + (i + 1);
	}
	// return the output, e.g "1 2 3 4 5"
	return output;
};

exports.fizzbuzz = function(start, end) {
	
	var output = "";

	for (var i = start; i <= end; i += 1) {
	
		if (i % 3 === 0 && i % 5 === 0) {
			output += ("fizzbuzz");
		}
		else if (i % 3 === 0) {
			output +=  ("fizz");
		}
		else if (i % 5 === 0) {
			output += ("buzz");
		} 
		else {
			output += (i);	
		}

		if(i != end) {
			output += " ";
		}
		
	}
	return output;
};


