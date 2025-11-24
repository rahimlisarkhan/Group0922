// String methods examples

// 1. toUpperCase() - Converts a string to uppercase letters
const str1 = "hello world";
const upperStr = str1.toUpperCase();
console.log(upperStr); // Output: "HELLO WORLD"

// 2. toLowerCase() - Converts a string to lowercase letters
const str2 = "HeLlO WoRLD";
const lowerStr = str2.toLowerCase();
console.log(lowerStr); // Output: "hello world"

// 3. includes() - Checks if a string contains a specified substring
const str3 = "JavaScript";
const hasAwesome = str3.includes("a");
console.log(hasAwesome); // Output: true

// 4. split() - Splits a string into an array of substrings based on a specified separator
const str4 = "apple banana cherry";
const fruitsArray = str4.split(" ");
console.log(fruitsArray); // Output: ["apple", "banana", "cherry"]

// 5. replace() - Replaces a specified substring with another substring
const str5 = "I love cats";
const newStr = str5.replace("cats", "dogs");
console.log(newStr); // Output: "I love dogs"

// 6. trim() - Removes whitespace from both ends of a string
const str6 = "   Hello World!   ";
const trimmedStr = str6.trim().toLowerCase();
console.log(trimmedStr); // Output: "hello world!"

// 7. charAt() - Returns the character at a specified index
const str7 = "JavaScript";
// const charAtIndex2 = str7.charAt(2);
const charAtIndex2 = str7[2];

// str7[2] = "t"; // String are immutable in JavaScript
console.log(charAtIndex2); // Output: "v"

// 8. substring() - Extracts a substring from a string between two specified indices
const str8 = "Hello, World!";
// const subStr = str8.substring(0, 5);
const subStr = str8.slice(0, 5);
console.log(subStr); // Output: "Hello"

// 9. concat() - Concatenates two or more strings
const str9a = "Hello, ";
const str9b = "World!";
const concatenatedStr = str9a.concat(str9b);
console.log(concatenatedStr); // Output: "Hello, World!"

// 10. indexOf() - Returns the index of the first occurrence of a specified substring
const str10 = "Find the index of the first occurrence";
const index = str10.indexOf("the");
console.log(index); // Output: 5

// 11. lastIndexOf() - Returns the index of the last occurrence of a specified substring
const str11 = "Find the index of the last occurrence of the word 'the'";
const lastIndex = str11.lastIndexOf("the");
console.log(lastIndex); // Output: 43

// 12. repeat() - Repeats a string a specified number of times
const str12 = "Ha! ";
const repeatedStr = str12.repeat(3);
console.log(repeatedStr); // Output: "Ha! Ha! Ha! "

// 13. startsWith() - Checks if a string starts with a specified substring
const str13 = "JavaScript is fun";
const startsWithJava = str13.startsWith("Java");
console.log(startsWithJava); // Output: true

// 14. endsWith() - Checks if a string ends with a specified substring
const str14 = "programming.png";
const endsWithPng = str14.endsWith(".png");
console.log(endsWithPng); // Output: true