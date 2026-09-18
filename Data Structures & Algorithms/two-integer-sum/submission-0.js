class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        const result = []

        for(let i = 0; i < nums.length; i++){
            const second = target - nums[i];
            if(map.has(second)) {
                result.push(Math.min(i, map.get(second)))
                result.push(Math.max(i, map.get(second)))
                return result
            }
            map.set(nums[i], i)
        }
        return result
    }
}
