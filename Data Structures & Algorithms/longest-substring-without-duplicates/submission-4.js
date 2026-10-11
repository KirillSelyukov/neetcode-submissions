class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    //s="abcabcbb"
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let l = 0;
        let bestLength = 0;
        for(let i = 0; i < s.length; i++){
                while(set.has(s[i])){
                    set.delete(s[l])
                    l++
                }

            bestLength = Math.max(bestLength,  i - l + 1)
            set.add(s[i])
        }

        return bestLength;
    }
}
