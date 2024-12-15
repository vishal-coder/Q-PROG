/**
 * 
The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones.
It starts with 0 and 1, and continues infinitely like this:

0, 1, 1, 2, 3 (5th), 5, 8, 13, 21, 34(10th), 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181.

The first number is 0.
The second number is 1.
The third number (1st + 2nd) is 0 + 1 = 1.
The fourth number (2nd + 3rd) is 1 + 1 = 2.
And therefore, the fifth number (3rd + 4th) is 1 + 2 = 5.
 */

//////////////////////using RECURSION///////////////////////////////
function fibonacci(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

var num = 7;
answer = fibonacci(num);

console.log("The 7th term of the Fibonacci series is: ", answer);


//////////////////////USING FOR LOOP///////////////////////////

// program to generate fibonacci series up to n terms

// take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}


//////////Example 2: Fibonacci Sequence Up to a Certain Number/

// program to generate fibonacci series up to a certain number

// take input from the user
const number = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

  // print the next term
  console.log(nextTerm);

  n1 = n2;
  n2 = nextTerm;
  nextTerm = n1 + n2;
}





