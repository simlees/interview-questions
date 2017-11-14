export function letterCombinationsOfPhoneNumber(digits) {
 const letterMapping = {
   1: [' '],
   2: ['a', 'b', 'c'],
   3: ['d', 'e', 'f'],
   4: ['g', 'h', 'i'],
   5: ['j', 'k', 'l'],
   6: ['m', 'n', 'o'],
   7: ['p', 'q', 'r', 's'],
   8: ['t', 'u', 'v'],
   9: ['w', 'x', 'y', 'z'],
   0: [' ']
 }

 // Add first round of combinations
 let combinations = digits.length ? letterMapping[digits[0]].slice() : [];

 // for each combination, remove and add combinations with new letter
 for (let i = 1; i < digits.length; i++) {
   for (let j = combinations.length - 1; j >= 0; j--) {
     let currentCombination = combinations.splice(j, 1)[0];
     letterMapping[digits[i]].forEach(l => {
       combinations.push(currentCombination + l);
     })
   }
 }
 return combinations;
}
