/*
Substring with Concatenation of All Words
https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/

Input:
- `s`: a string
- `words`: an array of strings, all with the same length

Goal:
- find every start index in `s` where a substring is a concatenation of all the words, each used exactly once, in any order

Output:
- an array of those start indices, in any order

Rules:
- all words have the same length `wordLength`, so the window length is wordLength * words.length
- words may repeat, so count them in a Map `need`
- a match is read in jumps of `wordLength`, one word at a time
- the start index can be any of 0..wordLength - 1 in terms of alignment, so run the sliding window once per offset
- for one offset, `left` and `right` both move in jumps of `wordLength`
- move `right` one word at a time: take the word at `right`
  - if it is not in `need`, nothing before it can be used, so clear the window and start after it
  - otherwise count it in the window's own Map `seen`
  - if `seen` has too many of this word, shrink from the left one word at a time until it is fine again
- when the window holds exactly words.length words, `left` is a valid start index

Constraints:
- 1 <= s.length <= 10^4
- 1 <= words.length <= 5000
- 1 <= words[i].length <= 30
- s and words[i] consist of lowercase English letters

Examples:
findSubstring("barfoothefoobarman", ["foo", "bar"]);              // [0, 9]
findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]); // []
findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]); // [6, 9, 12]

Time: O(n * m * w), where m is words.length and w is the word length
Space: O(m * w)
*/

function findSubstring(s, words) {
  const result = [];
  const need = new Map();

  for (const word of words) {
    need.set(word, (need.get(word) || 0) + 1);
  }

  let right = 0;
  const offset = words[0].length;
  while (right < s.length) {
    let matched = 0;
    let curr = right;
    let left = right;
    const seen = new Map();
    while (curr + offset <= s.length) {
      const word = s.slice(curr, curr + offset);
      if (need.has(word)) {
        seen.set(word, (seen.get(word) || 0) + 1);
        if (seen.get(word) > need.get(word)) {
          break;
        }
        matched++;
      } else {
        break;
      }

      if (matched === words.length) {
        result.push(left);
        break;
      }
      curr += offset;
    }
    right += 1;
  }

  return result;
}

module.exports = findSubstring;
