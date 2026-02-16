// All paths from src to target

function findAllPaths(graph, currNode, visted, target, currPath, result) {
  if (currNode === target) {
    result.push([...currPath]);
    return;
  }
  if (visted.has(currNode)) {
    return;
  }

  visted.add(currNode);

  for (const neighbour of graph[currNode]) {
    currPath.push(neighbour);
    findAllPaths(graph, neighbour, visted, target, currPath, result);
    currPath.pop();
  }

  visted.delete(currNode);
}

const result = [];
const graph = {
  0: [1, 4, 2],
  1: [3],
  2: [3],
  3: [],
  4: [2],
};

findAllPaths(graph, 0, new Set(), 3, [0], result);

console.log(result);
