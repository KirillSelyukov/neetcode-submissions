class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxLength = 0;
        for (const num of nums){
            let c = 0
            if(!set.has(num - 1)){
                while(set.has(num + c)){
                    c++
                }
                maxLength=Math.max(maxLength,c)
            }
            

         }
           return maxLength

    }
}
