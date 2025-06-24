function isPalindrome(word) {
  // reverse the word
  const reversedWord = word.split('').reverse().join('');
  // compare the reversed word with the original
  return word === reversedWord;
}

/* 
  Pseudocode:
  - Take the input word
  - Reverse the characters of the word
  - Compare the reversed word to the original
  - If they are the same, return true
  - Otherwise, return false
*/

/*
  Explanation:
  A palindrome is a word that reads the same backward and forward.
  To check for a palindrome:
  - We reverse the input string.
  - If the reversed string matches the original, it's a palindrome and we return true.
  - Otherwise, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));
}

module.exports = isPalindrome;
