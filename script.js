// Detect cycle in a directed graph using dfs

function cycleDetectionUsingDFS(graph) {
  const visited = new Set();
  const recStack = new Set();

  function dfs(node) {
    if (recStack.has(node)) {
      return true;
    }
    if (visited.has(node)) {
      return false;
    }
    visited.add(node);
    recStack.add(node);

    for (const neighbour of graph[node]) {
      if (dfs(neighbour)) {
        return true;
      }
    }

    recStack.delete(node);
    return false;
  }
}
