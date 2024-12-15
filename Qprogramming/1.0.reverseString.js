// program to reverse a string

function reverseString(str) {
  // empty string
  let newString = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   newString += str[i];
  // }

  for (let char of str) {
    newString = char + newString;
  }
  return newString;
}

// take input from the user
const string = prompt("Enter a string: ");

const result = reverseString(string);
console.log(result);

/////////////////////////////////////////////////////////////////////////////

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");
//////////////////////////RECURSION//////////////////////////////////////

function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");

/////////////////////////////using reduce function ////////////////////////

const str = "node1234";
const result1 = str.split("").reduce((prev, next) => next + prev, "");
// debugger node inspect test.js
