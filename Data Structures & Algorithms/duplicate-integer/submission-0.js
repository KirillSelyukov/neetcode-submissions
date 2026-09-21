class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        let hasDuplicate = false;

        for(let i = 0; i < nums.length; i++){
            if (set.has(nums[i])) {
                hasDuplicate = true;
                return
            }
            set.add(nums[i])
        }

        return hasDuplicate
    }
}
