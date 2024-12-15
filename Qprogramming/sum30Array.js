let arr = [1, 5, 7, -1, 5];
let n = arr.length;
let sum = 6;
printPairs(arr, n, sum);

function printPairs(arr, n, sum) {
  let count = 0; // Initialize result

  // Consider all possible pairs and check
  // their sums
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == sum) {
        console.log(arr[i] + ", " + arr[j])
      }

    } // end of inner  for
  } // end of outer for
} // end of function

/////////////////////////////Optimized pair only once//////////////////////////////////////




function twoSum() {
  let arr = [8, 7, 4, 5, 3, 1];
  let S = 12;
    var sums = [];
    var hashTable = {};
  
    // check each element in array
    for (var i = 0; i < arr.length; i++) {
   
      // calculate S - current element
      var sumMinusElement = S - arr[i];
  
      // check if this number exists in hash table
      // if so then we found a pair of numbers that sum to S
      if (hashTable[sumMinusElement.toString()] !== undefined) { 
        sums.push([arr[i], sumMinusElement]);
      }
  
      // add the current number to the hash table
      hashTable[arr[i].toString()] = arr[i];
  
    }
  
    // return all pairs of integers that sum to S
    return sums;
  
  }
  
  console.log(twoSum())