class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
       const  isAlphanumeric=(char)=> {
            return /[a-z0-9]/i.test(char);
        }

        let l = 0;
        let r = s.length -1
        while(l < r){
            while(!isAlphanumeric(s[l]) && l < r) l ++
            while(!isAlphanumeric(s[r])&& l < r) r --
            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false  
            l++;r--
        }
        
        return true;
    }
    
}
