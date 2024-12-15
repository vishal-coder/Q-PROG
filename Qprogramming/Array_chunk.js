let array = [1, 2, 3, 4, 5]; //[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
let result = [];
const chunk_size = 4;
let temp = [];
for (let item of array) {
  if (temp.length != chunk_size) {
    temp.push(item);
  } else {
    result.push(temp);
    temp = [];
    temp.push(item);
  }
  if (item == arr[arr.length - 1]) {
    result.push(temp);
  }
}
console.log(result);

/////////////////////////////////
const size = 2;
let chunked = [];
for (let element of array) {
  const last = chunked[chunked.length - 1];

  if (!last || last.length == size) {
    chunked.push([element]);
  } else {
    last.push(element);
  }
}

console.log(chunked);

///////// using Array.Slice methode

let arr = [1, 2, 3, 4, 5];
let result1 = [];
const size1 = 4;
let index = 0;
while (index < arr.length) {
  result1.push(arr.slice(index, index + size1));
  index += size1;
}
console.log(result1);
