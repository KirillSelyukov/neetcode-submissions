class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // const m = new Map([[')', '('], [']', '['], ['}', '{']]) 
        const m2 = {')':'(','}':'{', ']':'['}
        const stack = []
        for(let i = 0; i < s.length; i++){
            // if(m.has(s[i])){
            if(m2[s[i]]){
                // if(stack.pop() !== m.get(s[i])) return false
                if(stack.pop() !== m2[s[i]]) return false
            } else {
                stack.push(s[i])
            }
        }

        return stack.length === 0;
    }
}
