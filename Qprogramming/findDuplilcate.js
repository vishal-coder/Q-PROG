//////////////////////////////////  using map and for loop  ///////////////////////////////////////
// same logic can be used to find out occurance of each number of array using object/map and counter
const arr = [1, 3, 5, 7, 5, 4];

const n = arr.length;
let map = {};
let i;

for (i = 0; i < n; i++) {
  if (!map[arr[i]]) {
    map[arr[i]] = 1;
  } else {
    map[arr[i]] = map[arr[i]] + 1;

    // or
    // const key = arr[i]
    // console.log(map.key)

    //or
    // Object destructuring:
    //const { name } = hero;
  }
}

for (key in map) {
  if (map[key] != 1) {
    console.log("duplicate elements are", key);
  }
}

//////////////////////////////////  using nested for loop  ///////////////////////////////////////

const arr = [1, 3, 5, 7, 1];
const n = arr.length;
let i, j;
let uniqueobj = {};

for (i = 0; i <= n; i++) {
  for (j = 0; j <= n; j++) {
    if (arr[i] == arr[j] && i != j) {
      if (!uniqueobj[arr[i]]) {
        uniqueobj[arr[i]] = 1;
      }
    }
  }
}
console.log(Object.keys(uniqueobj)); //printing only keys of object
