/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
 let result="";
 for(let i=0;i<s.length;i+=2*k){
    let a=s.slice(i,i+k).split("").reverse().join("");
    let b=s.slice(i+k,i+2*k);
    result +=a+b;
 }
 return result;

};