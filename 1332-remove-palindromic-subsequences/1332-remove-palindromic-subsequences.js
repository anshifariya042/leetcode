/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
  let reversed=s.split("").reverse().join("");
  return s=== reversed ?1:2;  
};