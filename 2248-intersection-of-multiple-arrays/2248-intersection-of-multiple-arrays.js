/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    return nums.reduce((a,b)=> a.filter(x=> b.includes(x))).sort((a,b)=>a-b);
};
console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))