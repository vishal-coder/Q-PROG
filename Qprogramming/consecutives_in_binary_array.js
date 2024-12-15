
let arr = new Array(1, 1, 0, 0, 1, 0,
  1, 0, 1, 1, 1, 1);
// find consecutive 1's

function getMaxConsecutive(arr) {
  const length = arr.length
  let count = 0;
  let result;

  for (let i = 0; i < length; i++) {
    if (i == 0) {
      count = 0;
    }else{
      count ++
      result = Math.max(result,count)
    }
  }
  console.log("max consecutive count is",result)
}


////////////////////////////////

// let a = [1,0,1,1,0,0,1,1,1,1]
// let res = {1:0,0:0};
// let countOne = 0;
// let countZero = 0;

// for(let i = 0 ; i < a.length ; i++){
//   if(a[i] == 0){
//     countOne = 0
//     countZero ++
//   }
//   if(a[i] == 1){
//     countZero = 0
//     countOne ++
//   }
//   res["1"] = Math.max(countOne,res["1"])
//   res["0"] = Math.max(countZero,res["0"])
// }