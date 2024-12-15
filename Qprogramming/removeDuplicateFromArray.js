//How to remove duplicate elements from JavaScript Array 


let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];
 
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
 
console.log(removeDuplicates(arr));

////////////////////////////////////////////////////



let arr = ["apple", "mango",
          "apple", "orange", "mango", "mango"];
 
function removeDuplicates(arr) {
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
console.log(removeDuplicates(arr));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// indexOf  and lastIndexOf

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//without using inbuilt function


const input1 = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];
// const input2 = [1, 2, 3, 3, 4, 5,2, 6,3,6,7];

function removeDuplicate(arr) {
  let map= {}
  const length = arr.length
  
  for(let i = 0; i < length; i++){
    if(map[arr[i]] == undefined){
      map[arr[i]] = 1
    }else{
      // console.log("map[arr[i]]",map[arr[i]])
      // map[arr[i]] = map[arr[i]] + 1 
    }
  }
  return map
}

console.log(removeDuplicate(input1));
// console.log(removeDuplicate(input2));