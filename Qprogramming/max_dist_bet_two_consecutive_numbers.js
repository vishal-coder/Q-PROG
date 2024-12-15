  ////////////////////////////////////////////////////
  /*
  Given an array A of integers, find the maximum of j - i subjected to the constraint of A[i] + 1 = A[j].
  Example:
  Input A: [3, 5, 4, 2]
  Output: 2 for the pair (3, 4)
  
  */
  
  
  function maxDistance(arr, n) {
    let map = new Map();
    let max_dist = 0;
    let second;
    
       for (let i = 0; i < n; i++) {
        max_dist = 0
        for(let j = i;j <n ; j++){        
          if((arr[i] + 1 ==  arr[j]) ){
            max_dist = Math.max(max_dist,(j - i))
            second = j
          }
        } // inner for loop
        
        if(max_dist != 0){
          map.set([arr[i],arr[second]],max_dist)
        }
        
      } // end of for loop
      for (let [key, value] of map) {
        console.log(key + " = " + value);
        }
  
    return map;
  }
  
  // Driver program
  
  let arr = [3, 5, 4, 2,7,8,6] //Map(3) { [ 3, 4 ] => 2, [ 5, 6 ] => 5, [ 7, 8 ] => 1 }
  
  let n = arr.length;
  console.log(maxDistance(arr, n));