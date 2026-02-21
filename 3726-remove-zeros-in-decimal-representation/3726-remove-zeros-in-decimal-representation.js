/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
   let a=n.toString().split('0').join("");
   return Number(a);
};