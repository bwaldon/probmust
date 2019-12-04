var _ = require("underscore")
var v = require("vulcan")
var w = require("webppl")

var webppl = function(arg) {
	w.run(arg, function(s,x) { return x }, {debug: true});
}

const getAllSubsets = 
      theArray => theArray.reduce(
        (subsets, value) => subsets.concat(
         subsets.map(set => [value,...set])
        ),
        [[]]
      );

const searchForArray = function(haystack, needle){
	h = JSON.stringify(haystack);
 	n = JSON.stringify(needle);
 	var c = h.indexOf(n);
 	return c;
}

// todo: a generative definition of the set of groundFormulae, to some level of recursion

var groundFormulae = ["A","B","C","D","!C"]

var K = ["A", "B"]

// var Delta = ["A & B -> C", "C -> D", "A -> !C"]

var deltaPrior = function() {
	var D = [];
	webppl("flip(0.9)") ? D.push("A & B -> C") : null;
	webppl("flip(0.8)") ? D.push( "C -> D") : null;
	webppl("flip(1)") ? D.push("A -> !C") : null;
	return D;
}

var T = ["A & B -> C", "C -> D"]

var complete = function(k,h) {
	return v.isProofComplete(v.prove(k,h))
}

// Definition 1: is t an argument for h? 
var argCheck = function(k, delta, t, h) {
// SUBCHECK 1: do k and t jointly entail c? 
if(complete([...k,...t],h) == false){
	// console.log("1")
	return false
// SUBCHECK 2: are k and t inconsistent? (verify by seeing if k and t entail both h and its negation) 
} else if(complete([...k,...t],h) & complete([...k,...t],"!("+h+")")) {
	// console.log("2")
	return false 
} else {
// SUBCHECK 3: is t the minimal argument that entails c? 
	for(var s of getAllSubsets(t)) {
			if(!(_.isEqual(t.sort(),s.sort())) && complete([...k,...s],h)) {
				// console.log(s)
				return false 
				break
			}
		};
}
return true
}

// By Definition 2: generate all subarguments for <t, h>_k
var getSubArguments = function(k, delta, t, h) {
	var subArguments = [];
	getAllSubsets(t).forEach(function(s) {
		groundFormulae.forEach(function(i) {
			if(argCheck(k, delta, s, i) == true) {
				subArguments.push([s,i])
			} 
		})
	})
	return subArguments
}

// By Definition 3: generate all counterarguments for <t, h>_k
var getCounterArguments = function(k, delta, t, h) {
	var possibleArguments = []
	var counterArguments = []
	var subArguments = getSubArguments(k, delta, t, h)

	getAllSubsets(delta).forEach(function(s) {
		groundFormulae.forEach(function(i) {
			if(argCheck(k, delta, s, i) == true) {
				possibleArguments.push([s,i])
			} 
		})
	})

	// console.log(possibleArguments)

	possibleArguments.forEach(function(c) {
		subArguments.forEach(function(s) {
			if(complete([c[1]],"!("+s[1]+")")) {
				counterArguments.push(c)
			}
		})
	});

	return counterArguments
}

// By Definition 4: determine which argument is more specific 

var moreSpecific = function(t1, h1, t2, h2) { 

	var set = []

	for(var e of groundFormulae) {
		// Condition 1: for all ground formuale, if t1 is necessary to conclude h1, then t2 supports h2
		// Antecedent of condition 1: t1 is necessary to conclude h1
		var ant = complete([e, ...t1],h1) && !(complete([e],h1))
		// Consequent of condition 1: t2 supports h2
		var consq = complete([e, ...t2],h2)
		if(ant && !(consq)) {
			// console.log("cond1");
			return false 
			break
		}
		// Condition 2: there's a ground where t2 is necessary for h2 but t1 doesn't support h2
		var a = complete([e, ...t2],h2)
		var b = !(complete([e, ...t1],h1))
		var c = !(complete([e],h2))
		if(a && b && c) {
			set.push(e)
		}
	};

	if(set.length > 0) {
		return true 
	} else {
		// console.log("cond2");
		return false 
	}
}


var defeats = function(k, delta, t1, h1, t2, h2) { 

	if(searchForArray(getCounterArguments(k,delta,t2,h2),[t1,h1]) !== -1 && moreSpecific(t1,h1,t2,h2)) {
	return true 
	} else {
		return false
	}
}

var isJustified = function(k, delta, t, h) {

	if(!argCheck(k, delta, t, h)) {
		return false 
	}

	for(var s of getSubArguments(k,delta,t,h)) {
		for(c of getCounterArguments(k,delta,s[0],s[1])) {
			if(moreSpecific(c[0],c[1],s[0],s[1]) && isJustified(k, delta, c[0], c[1])) {
				return false
				break
			}
		}
	}
	return true 
}

// Check, is "D" justified on the basis of ["A & B -> C","C -> D"]? (should be)






console.log(isJustified(K, deltaPrior(), ["A & B -> C","C -> D"],"D"))

// Check, is "!C" justified on the basis of ["A -> !C"]? (shouldn't be)

// console.log(isJustified(K, Delta, ["A -> !C"],"!C"))

// console.log(getSubArguments(K, Delta, ["A -> !C"],"!C"))

// [1,2,3,4,5].forEach(function(s) {
// 	console.log(s)
// })
// console.log(getAllSubsets(["A -> B"]))

// console.log(getAllSubsets(T))
// console.log(getAllSubsets(T).shift())
// console.log(argCheck(K, Delta, T, "D"))
// console.log(getCounterArguments(K, Delta, ["A -> !C"],"!C"))

// console.log(defeats(K,Delta,["A & B -> C"],"C",["A -> !C"],"!C"))

//console.log(searchForArray([ [ [ 'A & B -> C' ], 'C' ] ],[ [ 'A & B -> C' ], 'C' ]))

// console.log(complete(["A & B", ...T],"C"))

// console.log(moreSpecific(["A & B -> D"],"D",["A & B & C -> D"],"D"))
                            
// console.log(v.isProofComplete(proof)); 
// console.log(complete([...K,...getAllSubsets(T)[0]],"B"))
// console.log(proof)
