/*
Fruits Into Baskets
https://leetcode.com/problems/fruit-into-baskets/description/

Input:
- `fruits`: an array where fruits[i] is the type of fruit on tree i

Goal:
- pick fruits from a row of trees to collect the most fruits

Output:
- the maximum number of fruits you can pick, as a number

Rules:
- you have two baskets, and each basket holds only one type of fruit (unlimited amount)
- you pick exactly one fruit from every tree, moving right, starting at any tree
- you must stop when you reach a tree whose fruit fits neither basket
- so the picked fruits form a contiguous subarray with at most 2 distinct types

Constraints:
- 1 <= fruits.length <= 10^5
- 0 <= fruits[i] < fruits.length

Examples:
totalFruit([1, 2, 1]);             // 3
totalFruit([0, 1, 2, 2]);          // 3
totalFruit([1, 2, 3, 2, 2]);       // 4

Time: O(n)
Space: O(1)
*/

function totalFruit(fruits) {
  let left = 0;
  let basket = new Map();
  let max = 0;

  for (let right = 0; right < fruits.length; right++) {
    basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1);

    while (basket.size > 2) {
      basket.set(fruits[left], basket.get(fruits[left]) - 1);
      if (basket.get(fruits[left]) === 0) {
        basket.delete(fruits[left]);
      }
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}

module.exports = totalFruit;
