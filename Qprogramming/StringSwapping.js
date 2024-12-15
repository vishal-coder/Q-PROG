let s1 = "one";
let s2 = "two";
const i = s1.length;
s1 = s1 + s2;
s2 = s1.substring(0, i);
s1 = s1.substring(i);
console.log("Value of s1 after swapping :" + s1);
console.log("Value of s2 after swapping :" + s2);


///////////////////////////////////////////

var a = "Hello", b = "World!";
console.log(a, b); // Hello World!
[a, b] = [b, a]; //
console.log(a, b); // World! Hello

///////////////////////////////////////////////////////

//swapping two numbers

// Javascript program to swap two numbers without using temporary variable
 
let x = 10, y = 5;

// x now becomes 15
x = x + y;
 
// y becomes 10
y = x - y;
 
// x becomes 5
x = x - y;
 
document.write("After Swapping: x =" + x + ", y=" + y);