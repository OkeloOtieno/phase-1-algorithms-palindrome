function isPalindrome(word) {

  let normalizedStr = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let reversedStr = normalizedStr.split('').reverse().join('');
   
  return normalizedStr === reversedStr;
}

/* 
  Function isPalindrome(word)
    NormalizedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '')
    
    ReversedString = NormalizedString.split('').reverse().join('')
    
    If NormalizedString is equal to ReversedString
        Return true
    Else
        Return false
End Function
*/


/*
  1. Normalization is done by converting the string to lowercase then removing any alphanumeric strings using a regex expression that matcches any
  character that is not a letter and replacing it with an empty string.
  2. reversing the string is done by splitting it using the split('') method then reverse() the resultant array and finally join('') -in it.
  3. the original normalized string is then compared to the reversed copy .  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("")

  console.log('Expecting: true')
  console.log('=>', isPalindrome('radar'))

  console.log("")

  console.log('Expecting: false')
  console.log('=>', isPalindrome('creative'))
}

module.exports = isPalindrome;
