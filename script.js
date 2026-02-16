function bfs(graph, srcNode) {
  const visted = new Set();
  const queue = [];
  queue.push(srcNode);
  visted.add(srcNode);
  const result = [];

  while (queue.length) {
    const curr = queue.shift();
    result.push(curr);

    for (const neighbour of graph[curr]) {
      if (!visted.has(neighbour)) {
        visted.add(neighbour);
        queue.push(neighbour);
      }
    }
  }

  return result;
}
