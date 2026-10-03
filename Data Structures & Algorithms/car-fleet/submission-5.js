class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs =[]
        position.forEach((_,i) =>  pairs.push([position[i], speed[i]]))
        pairs.sort((a,b) => b[0]-a[0])
        const stack = []

        for(let i = 0; i < pairs.length; i++){
            const time = (target - pairs[i][0]) / pairs[i][1]
            if(stack.length === 0 || time > stack.at(-1)) {
                stack.push(time)
            }
        }
        
        return stack.length;
    }
}
