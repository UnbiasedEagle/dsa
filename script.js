/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const map = new Map();

  for (const s of stones) {
    map.set(s, (map.get(s) || 0) + 1);
  }

  let count = 0;

  for (const j of jewels) {
    count += map.get(j) || 0;
  }

  return count;
};
