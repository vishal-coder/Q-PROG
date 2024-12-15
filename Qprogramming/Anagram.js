//Since the given string ‘b’ contains all the characters in the string ‘a’ thus we will return True.

export function ifAnagram() {
  let a = "india";
  let b = "nidia";

  if (a.length != b.length) {
    console.log("not Anagram");
    return;
  }

  let str1 = a.split("").sort().join("");
  let str2 = b.split("").sort().join("");
  if (str1 === str2) {
    console.log("String is Anagram");
  } else {
    console.log("String is not Anagram");
  }
}

///////////////////////////////////////or using MAP
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();
  let counter = {};
  for (let letters of str1) {
    counter[letters] = counter[letters] + 1 || 1;
    // if  counter[letters] is null then null + 1 gives undefined hence for first time
    // flow will go to 1 after ||
  }
  for (let items of str2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}
let str1 = "I am Monu";
let str2 = "am I OnnU";
const checkAnagram = isAnagram(str1, str2);
console.log(checkAnagram);
