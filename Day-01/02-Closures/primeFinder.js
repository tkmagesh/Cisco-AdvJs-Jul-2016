//write a function 'isPrime' that return true/false depending on the prime'ness of the given number
// make sure the algo is executed only ONCE for any given number


isPrime(100) //run the algo, return false
isPrime(101) //run the algo, return true
isPrime(102) //run the algo, return false 


isPrime(100) //DO NOT run the algo, return false
isPrime(101) //DO NOT run the algo, return true
isPrime(102) //DO NOT run the algo, return false 
isPrime(104) //run the algo, return false 

function primeFinderFactory(){
	var cache = {};

	function checkPrime(n){
		console.log('processing ', n);
		if (n <= 3) return true;
		for(var i = 2; i <= (n/2); i++)
			if (n % i === 0) return false;
		return true;
	}

	return function (n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkPrime(n);
		return cache[n]
	}
}

function oddEvenFinderFactory(){
	var cache = {};

	function checkOddOrEven(n){
		console.log('processing ', n);
		return n % 2 === 0 ? 'even' : 'odd';
	}

	return function (n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkOddOrEven(n);
		return cache[n]
	}
}

function cacheFactory(fn){
	var cache = {};

	return function (n){
		if (typeof cache[n] === 'undefined')
			cache[n] = fn(n);
		return cache[n]
	}
}

//modify the above 'cacheFactory' function so that it supports any alog fn taking any number of arguments.. 
//for ex..

var cachedAdd = cacheFactory(function(x,y){
   console.log('processing ', x , ' and ', y);
   return x + y;
})

var cachedAdd = cacheFactory(function(x,y, z){
   console.log('processing ', x , ' and ', y, ' and ', z);
   return x + y + z;
})




