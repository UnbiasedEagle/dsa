class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    const combined = [];

    for (let i = 0; i < position.length; i++) {
      combined.push([position[i], speed[i]]);
    }

    combined.sort((a, b) => a[0] - b[0]);

    const stack = [];

    for (let i = combined.length - 1; i >= 0; i--) {
      const [pos, speed] = combined[i];
      const time = (target - pos) / speed;

      if (stack.length === 0 || time > stack[stack.length - 1]) {
        stack.push(time);
      }
    }

    return stack.length;
  }
}
