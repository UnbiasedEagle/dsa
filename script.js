// Find if path exists

function isPathExists(graph, node, dest, visited) {
  if (node === dest) {
    return true;
  }
  visited.add(node);

  for (const neighbour of graph[node]) {
    if (!visited.has(neighbour)) {
      if (isPathExists(graph, neighbour, dest, visited)) {
        return true;
      }
    }
  }

  return false;
}
