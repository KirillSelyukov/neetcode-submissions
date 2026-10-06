class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(h) {
        const stack = []
        let maxArea = 0

        for(let i = 0; i < h.length; i++){
                let start = i;

            while(stack.length !== 0 &&  stack.at(-1)[1] > h[i]){
                let [idx, height] = stack.pop()
                start = idx
                maxArea = Math.max(maxArea, height * (i - idx))
            }
            stack.push([start, h[i]])
        }
        for(let i = 0; i < stack.length; i++){
            maxArea = Math.max(maxArea, stack[i][1] * (h.length - stack[i][0] ))
        }

        return maxArea

    }
}
