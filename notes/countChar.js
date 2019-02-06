// Create a function that takes two strings as arguments and returns the number of times the first string is found in the second string.

function charCount(myChar, str) {
  duplicates = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] ===  myChar){
      duplicates++
    }
  }
  return duplicates;
}

console.log(charCount("a", "edabit")) // 1
console.log(charCount("c", "Chamber of secrets")) // 1
console.log(charCount("f", "frank and his friends have offered five foxes for sale")) // 7