# DSA practice instructions

I practice DSA in JavaScript from https://risingbrain.org/sheet/pattern-wise-sheet. I write all the code by hand. You create the problem files and review.

## Creating a problem

File path: `<nn>-<topic>/<pattern>/<problem-slug>.js`

1. Header comment, with the problem broken into small pieces:
   - title and LeetCode link
   - Input, Goal, Output, Rules, Constraints, Examples, each a short list
   - `TODO time:` and `TODO space:` for me to fill in
2. Empty function. Inside it, break the solution into easy steps, one `// TODO:` per step with a blank line under it.
   - a step says what to do, not the code
   - read in order, the steps explain the algorithm
   - for hard problems, split into many small, simple steps; each TODO is one tiny action that is easy to code on its own
   - group steps under short phase comments (e.g. `// setup`, `// main loop`, `// return`) when there are many
3. `module.exports = <function>` at the end.

Don't add test-case TODOs or any other scaffolding. Never write the solution unless I ask.

## Reviewing

When I say "check": read the file, run it on the examples and edge cases, then review correctness, edge cases and complexity. Give hints, not the full answer, unless I ask.

## Tracking

- `PROGRESS.md` is the checklist. Add a topic's section when we reach it. I tick problems off myself.
- After a problem, create the next unchecked one.
