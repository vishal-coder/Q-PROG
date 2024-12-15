const int1 = 123;

let result1 = int1.toString().split("").reverse().join("");

console.log(parseInt(result1) * Math.sign(int1));

//---------------------------------

let int = -900;

let result = "";
num = Math.abs(int); // Math.abs to get absolute number
while (num > 0) {
  let temp = num % 10;
  num = parseInt(num / 10);

  result = result + temp;
}
console.log(result * Math.sign(int)); // Math.sign returns 1 for positive and -1 for negative number
