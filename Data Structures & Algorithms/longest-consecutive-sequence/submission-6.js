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
            let length = 0
                while(set.has(num + length)){
                    length++
                }
                maxLength=Math.max(maxLength,length)
            }
         }
        
        return maxLength

    }
}
