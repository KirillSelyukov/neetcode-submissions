class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        const isAlphanumeric = (char) => /[a-z0-9]/i.test(char);

        let l = 0, r = s.length - 1;

        while (l < r) {
            if (!isAlphanumeric(s[l])) { l++;  }
            if (!isAlphanumeric(s[r])) { r--; }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++; r--;
        }
        return true;
    }
    
}
