// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// ---------------------------------------------------------------------------------------------------------

// prices = arr of nums type: number[]

// prices[i] = price of given stock on i day

// choose 1 day to buy, and 1 day (in future) to sell

// return max profit - type: number

var maxProfit = function (prices) {
  // if price does not have more than 2 data points, return 0
  if (!prices || prices.length < 2) {
    return 0;
  }

  // initialize minimum price to first value in prices
  let minPrice = prices[0];

  // initialize max profit to 0
  let maxProfit = 0;

  // loop through prices, checking index 1 first
  for (let i = 1; i < prices.length; i++) {
    const currentValue = prices[i];

    // reassign minPrice to be the minimum price between what is currently stored and the current iterative
    minPrice = Math.min(minPrice, currentValue);

    // reassign max profit to be the max value between max profit variable or the difference between the current iterative and minimum price
    // ex: 6 - 1 = 5 -> store in maxProfit
    maxProfit = Math.max(maxProfit, currentValue - minPrice);
  }

  return maxProfit;
};

// prices = [7, 1, 5, 3, 6, 4] -> return 5
// buy on day 2 (price[i] = 1), sell on day 5 (price[i] = 6) -> 6 - 1 = 5 profit

// prices = [7, 6, 4, 3, 1] -> return 0
// all desc, no profit, return 0

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
console.log(maxProfit([7, 6, 4, 3, 1]), 0);
