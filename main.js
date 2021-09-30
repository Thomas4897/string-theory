//! xify function: will replace letters with 'x';
function xify(str) {
	//? Sets output to empty string;
	let output = ""; //* Note: Output is a changable variable it will save what the loop does each time and add an 'x' to the end;

	//? for loop that loops through the string array starting at 0;
	for (let i = 0; i < str.length; i++) {
		//? As it loops through the string array inputs an 'x' in output and will add 'x' to the end of each oupt every time it loops;
		output = output + "x";
	}
	return output;
}

console.log("xify function:");
console.log(xify("hello"));
console.log(xify("hi there"));

//! yellingChar function: will insert '!' after every letter;
function yellingChars(str) {
	//? Sets output to empty string;
	let output = "";

	//? for loop that loops through the string array starting at 0;
	for (let i = 0; i < str.length; i++) {
		//? places a char from str plus an "!" in the output variable each loop;
		output = output + str[i] + "!";
	}
	return output;
}

console.log("\nyellingChars function:");
console.log(yellingChars("goodness"));
console.log(yellingChars("oh hello"));

//! indexedChars function;
function indexedChars(str) {
	//? Sets output to empty string;
	let output = "";

	//? for loop that loops through the string array starting at 0;
	for (let i = 0; i < str.length; i++) {
		//? Placees index value then char from str in the output var each loop;
		output = output + i + str[i];
	}
	return output;
}

console.log("\nindexedChars function:");
console.log(indexedChars("hello"));
console.log(indexedChars("bye"));

//! numberedChars function;
function numberedChars(str) {
	//? Sets output to empty string;
	let output = "";

	//? for loop that loops through the string array starting at 0;
	for (let i = 0; i < str.length; i++) {
		//? Places the number postition and the char from str in the output var each loop;
		const position = i + 1;
		output = output + "(" + position + ")" + str[i];
	}
	return output;
}

console.log("\nnumberedChars function:");
console.log(numberedChars("hello"));
console.log(numberedChars("bye"));

//! exclaim function;
function exclaim(str) {
	//? Sets output to empty string;
	let output = "";

	//? for loop that loops through the string array starting at 0;
	for (let i = 0; i < str.length; i++) {
		//?if the loop encounters either a '.' or '?';
		if (str[i] === "." || str[i] === "?") {
			//? if triggered places a '!' in place of the '.' or '?' in the output var;
			output = output + "!";
		} else {
			//? Otherwise it will place the char from the str in the output var;
			output = output + str[i];
		}
	}
	return output;
}

console.log("\nexclaim function:");
console.log(exclaim("What are you doing? Are you a fool?"));
console.log(exclaim("This is fine."));

//! repeatIt function;
function repeatIt(str, n) {
	//? Sets output to empty string;
	let output = "";

	//? for loop that loops through the string array starting at 0 and will continue until the 'i' is less than 'n';
	for (let i = 0; i < n; i++) {
		//? Place str in the output var each loop;
		output = output + str;
	}
	return output;
}

console.log("\nrepeatIt function:");
console.log(repeatIt("beetlejuice", 3));
console.log(repeatIt("oh hi!", 8));

//! truncate function;
function truncate(str) {
	//? Sets output to empty string;
	let output = "";

	//? for loop that loops through the string array starting at 0 and will only continue until the index is less than 15;
	for (let i = 0; i < 15; i++) {
		//? Places str char in the output var each loop;
		output = output + str[i];
	}
	return output + "...";
}

console.log("\ntruncate function:");
console.log(
	truncate("The fault, dear Brutus, is not in our stars, but in ourselves.")
);
console.log(truncate("Well, that's just, like, your opinion man."));

//! ciEmailify function;
function ciEmailify(str) {
	//? Sets output to empty string;
	let output = "";

	//? for loop that loops through the string array starting at 0;
	for (let i = 0; i < str.length; i++) {
		//? If " " is encountered;
		if (str[i] === " ") {
			//? replaces the " " in the output var with '.';
			output = output + ".";
		} else {
			//? Otherwise put str char in output var;
			output = output + str[i];
		}
	}

	//? Adds "@codeimmersives.com" to the end of output var;
	return output + "@codeimmersives.com";
}

console.log("\nciEmailify function:");
console.log(ciEmailify("colin jaffe"));
console.log(ciEmailify("Anthony DeRosa"));

//! reverse function;
function reverse(str) {
	//? Sets output to empty string;
	let output = "";

	//? for loop that loops through the string array starting at the end of the String and loops to the beginning;
	for (let i = str.length - 1; i >= 0; i = i - 1) {
		//?  Puts str char in output var;
		output = output + str[i];
	}
	return output;
}

console.log("\nreverse function:");
console.log(reverse("colin"));
console.log(reverse("mesuara"));

//! onlyVowels function;
function onlyVowels(str) {
	//? Sets output to empty string;
	let output = "";

	//? for loop that loops through the string array starting at 0;
	for (let i = 0; i < str.length; i++) {
		//? if vowel encoutered;
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
			//? If vowel encounterd places it in the output var;
			output = output + str[i];
		}
		//? Other wise nothing happens
		else {
		}
	}
	return output;
}

console.log("\nonlyVowels function:");
console.log(onlyVowels("Colin Jaffe"));
console.log(onlyVowels("quickly"));
console.log(onlyVowels("Anthony DeRosa"));

//! crazyCase function;
function crazyCase(str) {
	//? Sets output to empty string;
	let output = "";

	//? for loop that loops through the string array starting at 0;
	for (let i = 0; i < str.length; i++) {
		//? if index position is not divisable by 2;
		if (i % 2 !== 0) {
			//? If triggered makes str char upperCase and places it in the output var;
			output = output + str[i].toUpperCase();
		}
		//? Otherwise it is made lowerCase and places in the output var;
		else {
			output = output + str[i].toLowerCase();
		}
	}
	return output;
}

console.log("\ncrazyCase function:");
console.log(crazyCase("hello"));
console.log(crazyCase("multiple words here"));
console.log(crazyCase("YELLING"));

//! titleCase function;
function titleCase(str) {
	//? Sets output to empty string;
	let output = "";

	//? for loop that loops through the string array starting at 0;
	for (let i = 0; i < str.length; i++) {
		//? If index is 0 or " " to the left of a char is encountered;
		if (i === 0 || (str[i - 1] === " " && str[i] !== " ")) {
			//? Makes char upperCase and places it in the output var;
			output = output + str[i].toUpperCase();
		}

		//? Otherwise it makes the lowerCase and places them in the output var;
		else {
			output = output + str[i].toLowerCase();
		}
	}
	return output;
}

console.log("\ntitleCase function:");
console.log(titleCase("return of the king"));
console.log(titleCase("cOde iMMerSives"));

//! camelCase function;
function camelCase(str) {
	//? Sets output to empty string;
	let output = "";

	//? for loop that loops through the string array starting at 0;
	for (let i = 0; i < str.length; i++) {
		//? if index os 0;
		if (i === 0) {
			//? char is made lowerCase and placed in the output var;
			output = output + str[i].toLowerCase();
		}
		//? Or if char is not " " And the char before it is a " ";
		else if (str[i] !== " " && str[i - 1] === " ") {
			//? makes it upperCase and places it in the output var;
			output = output + str[i].toUpperCase();
		}
		//? if encounter a " " add 1 to 'i';
		else if (str[i] === " ") {
			i + 1; //* This will skip over the space;
		}
		//? Itherwise make the char lowerCase and put in the output var;
		else {
			output = output + str[i].toLowerCase();
		}
	}
	return output;
}

console.log("\ncamelCase function:");
console.log(camelCase("oh Hello"));
console.log(camelCase("well yeah of course"));
console.log(camelCase("Boy howdy"));

//! crazyCase2ReturnOfCrazyCase function;
function crazyCase2ReturnOfCrazyCase(str) {
	//? Sets output to empty string;
	let output = "";
	count = 0;

	//? for loop that loops through the string array starting at 0;
	for (let i = 0; i < str.length; i++) {
		//? if not divisable by 2 and not " ";
		if (count % 2 !== 0 && str[i] !== " ") {
			//? Make char upperCase and place in output var;
			output = output + str[i].toUpperCase();
		}

		//? Else if " ";
		else if (str[i] === " ") {
			//? Add one to the count var and make Uppercase and place in output var;
			count = count + 1;
			output = output + str[i].toUpperCase();
		}

		//? Otherwise make lowerCase and place in output var;
		else {
			output = output + str[i].toLowerCase();
		}

		//? Adds 1 to count each loop
		count = count + 1;
	}
	return output;
}

console.log("\ncrazyCase2ReturnOfCrazyCase function:");
console.log(crazyCase2ReturnOfCrazyCase("multiple words here"));
console.log(crazyCase2ReturnOfCrazyCase("crazy stuff"));
