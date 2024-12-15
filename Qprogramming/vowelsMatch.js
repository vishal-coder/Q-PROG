 export function vowelcount(){
  const vowels = ['a','e', 'i', 'o', 'u']
let str = "this is test ABC";
let count = 0

for(let letter of str){
  if (vowels.includes(letter.toLowerCase())){
    count++
  }
}

console.log("vowelcount is-",count)
}

export function vowelCountUsingRegex(){
  let str = "this is test ABC";
  const result = str.match(/[aeiou]/gi).length;
  console.log("vowelCountUsingRegex is - ",result)
}


///////////////////////////////////////////////////////////////////

// count vowel   and list only unique and sort them alphabetically

let s = "vishal gaikwad"

const arr = ['a','e','i','o','u']
let vowel = []

for(char of s){
if(arr.includes(char)){
  if(!vowel.includes(char)){
    vowel.push(char)
  }
}
}

console.log("Before sort",vowel)
sort(vowel)

console.log("after sort",vowel)
// console.log(char)

function sort(arr){
const length = arr.length
let flag = true
while(flag){
  flag = false
  for(let i = 0; i < length; i++){
    if(arr[i] > arr[i + 1]){
      let temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
      flag = true
    }
  }
}
}

///////////////////sort with count////////////////

const string = 'India is unique'

const length = string.length
let obj = {}
for(char of string){
  if(['a','e','i','o','u'].includes(char)){
    if(obj[char] == undefined){
      obj[char] = 1
      
    }else{
      obj[char] = obj[char] + 1
      // = obj[char] +1
    }
  }
}

// for(const key in obj){
//   if(obj[key] > 1){
//     delete obj[key]
//   }
// }

let flag = true
const l = Object.keys(obj).length
let arr = Object.entries(obj)
console.log("arr",arr)
while(flag){
  
  flag = false
  for(let i = 0; i < l -1; i++){
    if(arr[i][0] > arr[i + 1][0] ){
      let temp = arr[i][0]
      arr[i][0] = arr[i + 1][0]
      arr[i + 1][0] = temp
      flag = true
    }
  }
  
}


console.log("final",obj)
console.log("final",arr)


//{ i: 3, a: 1, u: 2, e: 1 }
