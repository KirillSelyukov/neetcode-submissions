class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        
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
        if(str === "0#") return [""]
        const result = [];
        let x = 0;

        while(x <= str.length){
            let s = str.indexOf('#', x)
            const numberstr = str.slice(x, s)
            const n = Number(numberstr)

            result.push(str.slice(x + numberstr.length + 1,
            n + x + numberstr.length + 1))


            console.log('n:',n)
            console.log('x:',x)
            console.log('numberstr.length + 1:', numberstr.length + 1)
            x = n + x + numberstr.length + 1;
            console.log('x:',x)


            if(x >= str.length) break

        }
        return result
    }
}
