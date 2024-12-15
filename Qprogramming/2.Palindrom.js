/** 
A string is said to be palindrome if it remains the same on reading from both ends.
*/

export function checkPalindrome() {
  const inputStr = "MalayalaM";
  const length = inputStr.length;

  for (let i = 0; i < length / 2; i++) {
    if (inputStr[i] != inputStr[length - 1 - i]) {
      console.log("not palindrome");
      return;
    }
  }
  console.log("String is palindrome");
}

////////////////

const str = "Bock";
let rev = str.split("").reverse().join("");
console.log(str == rev);

///////////////////////
