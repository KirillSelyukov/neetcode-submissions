class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0], maxProfit = 0;

        for(let i = 1; i< prices.length; i++){
            min = Math.min(min, prices[i])
            maxProfit = Math.max(maxProfit,prices[i] - min )
        }
        
        return maxProfit
    }
}
