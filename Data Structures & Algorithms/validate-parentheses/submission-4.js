class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const m = new Map([[')', '('], [']', '['], ['}', '{']])
        const stack = []
        for(let i = 0; i < s.length; i++){
            if(m.has(s[i])){
                if(stack.pop() !== m.get(s[i])) return false
            } else {
                stack.push(s[i])
            }
        }

        return stack.length === 0;
    }
}
