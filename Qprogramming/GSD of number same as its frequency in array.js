
// JavaScript code to implement the approach
'use strict';

// Function for calculating gcd
function gcd(a, b)
{
	if (b == 0)
		return a;
	return gcd(b, a % b);
}


// Function to find GCD
function findGcd(arr, n)
{

	var v = [];
	
	// Declaration of map
	var m1 = {};
	for (var i = 0; i < n; i++)
	{
		if (m1.hasOwnProperty(arr[i]))
			m1[arr[i]] += 1;
		else
			m1[arr[i]] = 1;
	}
	
	//iterating through all the keys of m1
	for (const it of Object.keys(m1))
		{
			if (m1[it] == it)
				v.push(it);
		}

	if (v.length == 0)
		return 0;
	else if (v.length == 1)
		return v[0];
	else if (v.length == 2)
		{
			var hcf = gcd(v[0], v[1]);
			return hcf;
		}
	else if (v.length > 2)
		{
			var hcf = math.gcd(v[0], v[1]);
			for (var i = 2; i < v.length; i++)
				hcf = math.gcd(hcf, v[i]);
			return hcf;
		}
	return 1;
}
// driver code
var N = 10;
var arr = [2, 3, 4, 4, 3, 5, 4, 4, 2, 8];

// function call
findGcd(arr, N)

