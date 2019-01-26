/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

var search = function(nums, target) {
    return nums.some(function(item, index, array) {
      return item === target;
    });
  };