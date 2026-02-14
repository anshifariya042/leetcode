/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels="aeiouAEIOU";
    let stack=[];
    for(let ch of s){
        if(vowels.includes(ch)){
            stack.push(ch)
        }
    }
    let result="";
    for(let ch of s){
        if(vowels.includes(ch)){
            result +=stack.pop();
        }else{
            result += ch;
        }
    }
    return result;

};