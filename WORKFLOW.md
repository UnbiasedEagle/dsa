# Workflow

I write every line of code by hand. Claude sets up the problem, gives the steps as TODOs, and reviews.

## Problem file format

Each problem lives in `<nn>-<topic>/<pattern>/<problem-slug>.js`.

1. **Header comment**: the problem broken into small labeled pieces.
   - Input, Goal, Output, Rules, Constraints, Examples
   - link to the LeetCode problem
   - `TODO time:` and `TODO space:` lines, filled in by me
2. **Function**: an empty body with one TODO per step, a blank line under each.
   - a step says what to do, not how to code it
   - the TODOs are the mental model: reading them in order should explain the algorithm
3. **Export**: `module.exports = <function>`

## Loop

1. Claude creates the problem file.
2. I read the pieces and the step TODOs, then write the code under each TODO.
3. I fill in time and space complexity.
4. I tell Claude "check". Claude runs it and reviews: correctness, edge cases, complexity. Hints only, no full answer unless I ask.
5. I tick the problem in `PROGRESS.md`, and mark `R` if it needs a re-solve in a few days.
6. Claude creates the next problem.

## Rules for Claude

- Never write the solution code unless I ask.
- Keep stubs free of extra scaffolding: no test-case TODOs.
- Add the next topic's section to `PROGRESS.md` when we reach it.
