class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return ""
        const separator = '#';
        let result=""
        for (const str of strs){
            result += str === "" ? "0#":`${str.length}${separator}${str}`
        }

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str ==="") return []
        if(str === "0#") return [""]
        const result = [];
        let x = 0;

        while(x <= str.length){
            const s = str.indexOf('#', x)
            const numberstr = str.slice(x, s)
            const n = Number(numberstr)

            result.push(str.slice(x + numberstr.length + 1,
            n + x + numberstr.length + 1))
            x = n + x + numberstr.length + 1;

            if(x >= str.length) break

        }
        return result
    }
}
