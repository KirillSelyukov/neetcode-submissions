class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const l = nums.length;
        const p = new Array(l)
        p[0]=1
        const s = new Array(l)
        s[l-1] = 1

        const r = []

        for(let i=1; i < l; i++){
            p[i] = p[i-1] * nums[i-1]
        }
        for(let j=l-2; j >= 0; j--){
            s[j] = s[j+1] * nums[j+1]
        }
        for(let k=0; k < l; k++){
            r[k] = s[k] * p[k]
        }
        
        return r
    }
}
