class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const l = nums.length;
        const p = new Array(l)
        p[0]=1
        let sa = 1

        for(let i=1; i < l; i++){
             p[i] = p[i-1] * nums[i-1]
        }
        for(let j=l-1; j >= 0; j--){
            p[j] *= sa;
            sa *= nums[j]

        }

        return p
    }
}
