class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        const operands = ['*', '/', '+', '-']
        for(const t of tokens){
            if(operands.includes(t)) {
                const v1 = stack.pop()
                const v2 = stack.pop()
                if(t === '*') stack.push(v2 * v1)
                if(t === '/') stack.push(Math.trunc(v2 / v1))
                if(t === '+') stack.push(v2 + v1)
                if(t === '-') stack.push(v2 - v1)
            } else {
                stack.push(+t)
            }

        }
        return stack[0]
    }
}
