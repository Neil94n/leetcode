/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {  
    var n = {};
    for(var i=0;i<nums.length;i++){
        if(n[target-nums[i]] !== undefined){
            return [n[target-nums[i]],i];
        }
        n[nums[i]] = i;
    }
};