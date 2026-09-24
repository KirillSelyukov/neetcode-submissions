class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxLength = 0;
        for (const num of nums){
            if(!set.has(num - 1)){
            let c = 0
                while(set.has(num + c)){
                    c++
                }
                maxLength=Math.max(maxLength,c)
            }
         }
        
        return maxLength

    }
}
