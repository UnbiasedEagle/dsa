function dfs(graph, node, visited, result) {
  result.push(node);
  visited.add(node);

  for (const neighbour of graph[node]) {
    if (!visited.has(neighbour)) {
      dfs(graph, neighbour, visited, result);
    }
  }
}
