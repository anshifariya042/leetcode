/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
   let count={};
   for(let char of s){
    count[char]=(count[char] || 0)+1;
   }
   let length=0;
   for(let char in count){
    if(count[char]%2===0){
       length += count[char];
    }else{
        length +=count[char]-1
    }
   }
     if(length <s.length)length++;

    return length;
};