class Solution {
  /**
   * @param {number[]} asteroids
   * @return {number[]}
   */
  asteroidCollision(asteroids) {
    const result = [];

    for (const asteroid of asteroids) {
      let broken = false;

      while (
        result.length > 0 &&
        result[result.length - 1] > 0 &&
        asteroid < 0
      ) {
        if (result[result.length - 1] < Math.abs(asteroid)) {
          result.pop();
        } else {
          broken = true;
          if (result[result.length - 1] === Math.abs(asteroid)) {
            result.pop();
          }
          break;
        }
      }

      if (!broken) {
        result.push(asteroid);
      }
    }

    return result;
  }
}
