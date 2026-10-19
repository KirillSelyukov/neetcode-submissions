class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let r = 0;
        const pairs =[]
        position.forEach((item,i) =>  pairs.push([item,speed[i]]))
        pairs.sort((a,b) => b[0]-a[0])

        const stack = []

        for(let i = 0; i < pairs.length - 1; i++){
            const time = (target - pairs[i][0]) / pairs[i][1]
            stack.push(time)
            if(stack.length >= 2 && stack[stack.length - 1] < stack[stack.length - 2]) {
                stack.pop(time)
            }
        }
        return stack.length;
    }
}
