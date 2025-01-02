/** 
An n digit integer is said to be an Armstrong number if the sum of the nth power of
all the individual digits is the same as the number itself
*/

//https://www.geeksforgeeks.org/program-for-armstrong-numbers/

// program to check an Armstrong number of n digits

// take an input
const number = prompt("Enter a positive integer");
const numberOfDigits = number.length;
let sum = 0;

// create a temporary variable
let temp = number;

while (temp > 0) {

  let remainder = temp % 10;

  sum += remainder ** numberOfDigits;

  // removing last digit from the number
  temp = parseInt(temp / 10); // convert float into integer
}

if (sum == number) {
  console.log(`${number} is an Armstrong number`);
}
else {
  console.log(`${number} is not an Armstrong number.`);
}
////////////////////////////////////////////////////////////////////////////////////
// with reduce

let number = 159
number = number.toString()
let res = number.split("").reduce((acc,x) => acc + Math.pow(Number(x),number.length)  , 0 )
console.log(res)

////////////////////////////////////////////////////////////////////////////////////////////////////

//Program to find Armstrong Number in an Interval

// JavaScript program to find Armstrong numbers between intervals

const lower = prompt('Enter the lower integer value: ');
const higher = prompt('Enter the upper integer value: ');

console.log('Armstrong Numbers are as follows :');

// looping through lower to higher
for (var i = lower; i < higher + 1; i++) {

  // converting number to string 
  var digits = i.toString().length;
  var sum = 0;
  var temp = i;

  while (temp > 0) {

    var remainder = temp % 10;
    sum += remainder ** digits;
    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
  }
  if (sum == i)
    console.log(i);
}


////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////Find nth Armstrong number /////////////////////////////////////////////

// Javascript program to find Nth Armstrong Number

// Function to find Nth Armstrong Number
function NthArmstrong(n) {
  let count = 0;

  // Upper limit from integer
  for (let i = 1; i <= Number.MAX_VALUE; i++) {
    let num = i, rem, digit = 0, sum = 0;

    // Copy the value for num in num
    num = i;

    // Find total digits in num
    digit = parseInt(Math.log10(num), 10) + 1;

    // Calculate sum of power of digits
    while (num > 0) {
      rem = num % 10;
      sum = sum + Math.pow(rem, digit);
      num = parseInt(num / 10, 10);
    }

    // Check for Armstrong number
    if (i == sum)
      count++;
    if (count == n)
      return i;
  }
  return n;
}

// Driver code
let n = 12;

console.log(NthArmstrong(n));

