

// Javascript program to find maximum distance between two
// same occurrences of a number.

// Function to find maximum distance between equal elements
function maxDistance(arr, n) {
  // Used to store element to first index mapping
  let map = new Map();

  // Traverse elements and find maximum distance between
  // same occurrences with the help of map.
  let max_dist = 0;
  let obj = {}

  for (let i = 0; i < n; i++) {
    // If this is first occurrence of element, insert its
    // index in map
    if (!obj[arr[i]])
      obj[arr[i]] = i;

    // Else update max distance
    else
    {
      max_dist = Math.max(max_dist, i - obj[arr[i]]);
      map.set(arr[i],max_dist)

    }
  }

  return map;
}

// Driver program

let arr = [3, 2, 1, 2, 1, 4, 5, 8, 6, 7, 4, 2];
let n = arr.length;
console.log(maxDistance(arr, n));
