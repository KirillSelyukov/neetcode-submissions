class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1
        let maxArea = 0
        while(l < r){
            maxArea = Math.max((r-l) * Math.min(heights[l], heights[r]), maxArea)
            if(heights[l] > heights[r]) {r--; continue}
            if(heights[l] < heights[r]) {l++; continue}
            l++;r--
        }

        return maxArea
    }
}
