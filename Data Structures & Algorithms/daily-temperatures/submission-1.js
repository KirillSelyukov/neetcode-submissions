class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    // [30,38,30,36,35,40,28]
    dailyTemperatures(temp) {
        const stack = [];
        const result = new Array(temp.length).fill(0)

        for (let i = 0; i < temp.length; i++){
            while(stack.length !== 0 && temp[stack[stack.length - 1]] < temp[i]){
                const idx = stack.pop()
                result[idx] = i - idx
            }
            stack.push(i)
        }

        return result
    }
}
