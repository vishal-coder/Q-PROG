//Remove a specific element from array

/*
1. Set index value as -1 initially. i.e. index = -1

2. Get key value from the user which needs to be deleted.

3. Search and store the index of a given key

[index will be -1, if the given key is not present in the array]

4. if index not equal to -1

     Shift all the elements from index + 1 by 1 position to the left.

5. else

     print "Element Not Found"
*/

const arr = [1, 3, 5, 9, 10]
const length = arr.length
const target = 5;
let key, i

for (i = 0; i <= length; i++) {
  if (arr[i] == target) {
    key = i;
    break;
  }
}

if (key) {
  for (i = key; i < length; i++) {
    arr[i] = arr[i + 1]
  }
  arr.length = length - 1; // if we dont do this then last element will be undefined
  console.log("final arry", arr)
}
