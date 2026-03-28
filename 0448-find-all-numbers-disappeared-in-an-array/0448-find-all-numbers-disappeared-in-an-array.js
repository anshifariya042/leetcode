/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result=[];
    let set=new Set(nums);

    let i=1;
    while(i <=nums.length){
        if(!set.has(i)){
            result.push(i);
        }
        i++;
    }
    return result;
};