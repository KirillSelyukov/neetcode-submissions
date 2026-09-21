class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for(const num of nums){
            map.set(num, (map.get(num) || 0) + 1)
        }
        const length = nums.length + 1;
        const b = Array.from({ length }, () => []);
        for(const e of map.entries()){
            b[e[1]].push(e[0])
        }
        const result = []
        let count = k;

         for(let i = b.length - 1; i >= 1; i--){
            if(b[i].length > 0) {
                result.push(...b[i])
                count = count - b[i].length;
            }
            if(count === 0) break
         }

        return result.slice(0,k)
    }
}
