class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
       const  isAlphanumeric=(char)=> {
            return /[a-z0-9]/i.test(char);
        }
        const l = s.length;
        for(let i=0,j=l-1; i<l, j>0; i++,j--){
            while(!isAlphanumeric(s[i])) i++
            while(!isAlphanumeric(s[j])) j--
            console.log(s[i])
            console.log(s[j])
            if(s[i].toLowerCase() !== s[j].toLowerCase()) return false
        }
        
        return true;
    }
    
}
