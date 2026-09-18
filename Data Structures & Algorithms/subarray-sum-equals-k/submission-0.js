class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const map = new Map();
        map.set(0,1);
        let count = 0;
        let cs = 0;

        for(let i = 0; i < nums.length; i++){
            cs = cs + nums[i];
            count = (map.get(cs-k) || 0) + count
            map.set(cs, (map.get(cs) || 0) + 1)
        }
  //1. cs = 2, count = 1, {0:1, 2:1}
  //2. cs = 1, count = 1, {0:1, 2:1, 1:1}
  //3. cs = 2, count = 2, {0:1, 2:2, 1:1}
  //4. cs = 4, count = 4, {0:1, 2:2, 1:1, 4:1}



        return count;
    }
}
