class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // const leftMax = new Array(height.length)
        // leftMax[0] = height[0]
        // const rightMax = new Array(height.length)
        // rightMax[height.length-1] = height[height.length-1]
        // let result = 0
        // for (let i = 1; i < height.length; i++){
        //     leftMax[i] = Math.max(leftMax[i-1], height[i])
        // }
        // for (let i = height.length-2; i >= 0 ; i--){
        //     rightMax[i] = Math.max(rightMax[i+1], height[i])
        // }
        // for (let i = 0; i < height.length; i++){
        //     result += Math.min(leftMax[i], rightMax[i]) - height[i]
        // }
        // return result

        // Optimized by memory
        let l=0, r = height.length-1,lm=0, rm = 0,result=0;
        while(l < r){
            if(height[l] < height[r]) {
                lm =  Math.max(lm, height[l])
                result += lm - height[l]
                l++
            } else {
                rm =  Math.max(rm, height[r])
                result += rm - height[r]
                r--
            }
        }

        return result;
    }
}
