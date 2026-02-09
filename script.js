class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    const reqMap = new Map();

    for (const char of t) {
      reqMap.set(char, (reqMap.get(char) || 0) + 1);
    }

    const windowMap = new Map();

    let ws = 0;
    let we = 0;
    let minLength = Infinity;
    let start = -1;
    while (we < s.length) {
      windowMap.set(s[we], (windowMap.get(s[we]) || 0) + 1);

      while (ws <= we && this.isValidWindow(windowMap, reqMap)) {
        const length = we - ws + 1;

        if (length < minLength) {
          minLength = length;
          start = ws;
        }

        windowMap.set(s[ws], windowMap.get(s[ws]) - 1);
        ws++;
      }

      we++;
    }

    if (minLength === Infinity) {
      return "";
    }

    return s.slice(start, start + minLength);
  }

  isValidWindow(map1, map2) {
    for (const [key, value] of map2.entries()) {
      if (!map1.has(key) || map1.get(key) < value) {
        return false;
      }
    }

    return true;
  }
}
