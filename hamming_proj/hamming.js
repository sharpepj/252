var compute;

compute = function(strand1, strand2) {
	var count = 0;
	if(strand1.length === strand2.length)
	{
		for(var i = 0; i < strand1.length; i++) {
			if(strand1.charAt(i) != strand2.charAt(i)) {
				count++;
			}
		}

	} else {
		throw new Error("DNA strands must be of equal length.");
	}
	return count;
}


module.exports = {
	compute: compute
};