class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const result = []

        for(let i = 0; i < nums.length; i++){
            if(i > 0 && nums[i] === nums[i-1]) continue
            const t = nums[i];
            let l = i+1, r = nums.length-1;

            while(l < r){
                const s = nums[l] + nums[r]  + t
                if(s  === 0 ) {
                    result.push([nums[l], nums[r], nums [i]]);
                    while(nums[l] === nums[l+1] && l < r ) {l++;}
                    while(nums[r] === nums[r-1] && l < r ) {r--;}
                    l++;r--;
                };
                if(s < 0) {l++; continue;}
                if(s > 0) {r--; continue;}
            }

        }
        return result
    }
}
