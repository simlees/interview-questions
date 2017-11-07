/**
 * Return length of longest substring with no repeating characters
 */
export function lengthOfLongestSubstring(str) {
  let longestSubstring = '';
  let currentSubstring = '';
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (currentSubstring.includes(str[i])) { // Letter is in current substring
      start += currentSubstring.indexOf(str[i]) + 1;
    }
    currentSubstring = str.substring(start, i + 1);
    if (currentSubstring.length > longestSubstring.length) {
       longestSubstring = currentSubstring;
    }
  }
  return longestSubstring.length;
}
