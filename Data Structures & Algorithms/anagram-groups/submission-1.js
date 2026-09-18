class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(const str of strs){
            const tag = str.split("").sort().join("")
            // map.set(tag, [...map.get(tag)||[], str])
            if (!map.has(tag)) map.set(tag, []);
            map.get(tag).push(str)
        }
        
        return [...map.values()]
    }
}
