

function longest_substring_without_repeating_characters(string){
    const length = string.length;
    let longestSubString = "";
    let currentSubString = "";
    let left = 0;
    let right = 0;
    let obj = {}
    
    for(let i = 0; i < length ; i++){
    
        if((!obj[string[i]]) && obj[string[i]] != 0){
            obj[string[i]] = i
            currentSubString += string[i]
        }else{
            if(longestSubString.length < currentSubString.length  ){
                longestSubString = currentSubString
            }
            let duplicateIndex = currentSubString.indexOf(string[i])
            currentSubString += string[i]           
            currentSubString = currentSubString.substring(duplicateIndex + 1)
        }
    }
    
       if(longestSubString.length < currentSubString.length  ){
                longestSubString = currentSubString
            }
    return longestSubString;
}

console.log(longest_substring_without_repeating_characters("google.com"));
console.log(longest_substring_without_repeating_characters("njldsauyplq"));
console.log(longest_substring_without_repeating_characters("example.com"));
console.log(longest_substring_without_repeating_characters("ccc"));
console.log(longest_substring_without_repeating_characters("cccafklsllkdsfogsdfgjsdfgsdfg"));