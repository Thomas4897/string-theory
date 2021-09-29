//! xify function: will replace letters with 'x'
function xify(str) {
	let output = "";

	for (let i = 0; i < str.length; i++) {
		output = output + "x";
	}
	return output;
}

console.log("xify function:");
console.log(xify("hello"));
console.log(xify("hi there"));

//! yellingChar function: will insert '!' after every letter
function yellingChars(str) {
	let output = "";

	for (let i = 0; i < str.length; i++) {
		output = output + str[i] + "!";
	}
	return output;
}

console.log("\nyellingChars function:");
console.log(yellingChars("goodness"));
console.log(yellingChars("oh hello"));

//! indexedChars function:
function indexedChars(str) {
	let output = "";

	for (let i = 0; i < str.length; i++) {
		output = output + i + str[i];
	}
	return output;
}

console.log("\nindexedChars function:");
console.log(indexedChars("hello"));
console.log(indexedChars("bye"));

//! numberedChars function:
function numberedChars(str) {
	let output = "";

	for (let i = 0; i < str.length; i++) {
		const position = i + 1;
		output = output + position + str[i];
	}
	return output;
}

console.log("\nnumberedChars function:");
console.log(numberedChars("hello"));
console.log(numberedChars("bye"));

//! exclaim function:
function exclaim(str) {
	let output = "";

	for (let i = 0; i < str.length; i++) {
		if (str[i] === "." || str[i] === "?") {
			output = output + "!";
		} else {
			output = output + str[i];
		}
	}
	return output;
}

console.log("\nexclaim function:");
console.log(exclaim("What are you doing? Are you a fool?"));

//! repeatIt function:
function repeatIt(str, n) {
	let output = "";

	for (let i = 0; i < n; i++) {
		output = output + str;
	}
	return output;
}

console.log("\nrepeatIt function:");
console.log(repeatIt("beetlejuice", 3));
console.log(repeatIt("oh hi!", 8));

//! truncate function:
function truncate(str) {
	let output = "";

	for (let i = 0; i < 15; i++) {
		output = output + str[i];
	}
	return output + "...";
}

console.log("\ntruncate function:");
console.log(
	truncate("The fault, dear Brutus, is not in our stars, but in ourselves.")
);
console.log(truncate("Well, that's just, like, your opinion man."));

//! ciEmailify function:
function ciEmailify(str) {
	let output = "";

	for (let i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			output = output + ".";
		} else {
			output = output + str[i];
		}
	}
	return output + "@codeimmersives.com";
}

console.log("\nciEmailify function:");
console.log(ciEmailify("colin jaffe"));
console.log(ciEmailify("Anthony DeRosa"));

//! reverse function: will replace letters with 'x'
function reverse(str) {
	let output = "";

	for (let i = str.length - 1; i >= 0; i = i - 1) {
		output = output + str[i];
	}
	return output;
}

console.log("\nreverse function:");
console.log(reverse("colin"));
console.log(reverse("mesuara"));

//! onlyVowels function:
function onlyVowels(str) {
	let output = "";

	for (let i = 0; i < str.length; i++) {
		if (
			str[i] === "a" ||
			str[i] === "A" ||
			str[i] === "e" ||
			str[i] === "E" ||
			str[i] === "i" ||
			str[i] === "I" ||
			str[i] === "o" ||
			str[i] === "O" ||
			str[i] === "u" ||
			str[i] === "U"
		) {
			output = output + str[i];
		} else {
		}
	}
	return output;
}

console.log("\nonlyVowels function:");
console.log(onlyVowels("Colin Jaffe"));
console.log(onlyVowels("quickly"));
console.log(onlyVowels("Anthony DeRosa"));

//! crazyCase function:
function crazyCase(str) {
	let output = "";

	for (let i = 0; i < str.length; i++) {
		if (i % 2 !== 0) {
			output = output + str[i].toUpperCase();
		} else {
			output = output + str[i].toLowerCase();
		}
	}
	return output;
}

console.log("\ncrazyCase function:");
console.log(crazyCase("hello"));
console.log(crazyCase("multiple words here"));
console.log(crazyCase("YELLING"));

//! titleCase function:
function titleCase(str) {
	let output = "";

	for (let i = 0; i < str.length; i++) {
		if (i === 0 || (str[i - 1] === " " && str[i] !== " ")) {
			output = output + str[i].toUpperCase();
		} else {
			output = output + str[i].toLowerCase();
		}
	}
	return output;
}

console.log("\ntitleCase function:");
console.log(titleCase("return of the king"));
console.log(titleCase("cOde iMMerSives"));

//! camelCase function:
function camelCase(str) {
	let output = "";

	for (let i = 0; i < str.length; i++) {
		if (i === 0) {
			output = output + str[i].toLowerCase();
		} else if (str[i] !== " " && str[i - 1] === " ") {
			output = output + str[i].toUpperCase();
		} else if (str[i] === " ") {
			i + 1;
		} else {
			output = output + str[i].toLowerCase();
		}
	}
	return output;
}

console.log("\ntitleCase function:");
console.log(camelCase("oh Hello"));
console.log(camelCase("well yeah of course"));
console.log(camelCase("Boy howdy"));

//! crazyCase2ReturnOfCrazyCase function:
function crazyCase2ReturnOfCrazyCase(str) {
	let output = "";
	count = 0;

	for (let i = 0; i < str.length; i++) {
		if (count % 2 !== 0 && str[i] !== " ") {
			output = output + str[i].toUpperCase();
		} else if (str[i] === " ") {
			count = count + 1;

			output = output + str[i].toUpperCase();
		} else {
			output = output + str[i].toLowerCase();
		}

		count = count + 1;
	}
	return output;
}

console.log("\ncrazyCase2ReturnOfCrazyCase function:");
console.log(crazyCase2ReturnOfCrazyCase("multiple words here"));
console.log(crazyCase2ReturnOfCrazyCase("crazy stuff"));
