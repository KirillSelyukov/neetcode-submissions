class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
console.log(nums)
        const result = []

        for(let i = 0; i < nums.length; i++){
            if(i > 0 && nums[i] === nums[i-1]) continue
            const t = nums[i];
            let l = i+1, r = nums.length-1;

            while(l < r){
                const s = nums[l] + nums[r] 
                if(s  === -t ) {
                    result.push([nums[l], nums[r], nums [i]]);
                    l++;r--
                };
                if(s < -t) {l++; continue;}
                if(s > -t) {r--; continue;}
            }

        }
    console.log(result)
        return result
    }
}
