// Kahn Algorithm -> topological ordering && cycle detection using bfs

function cycleDetectionUsingBFS(graph, n) {
  const indegree = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const neighbours = graph[i] || [];

    for (const neighbour of neighbours) {
      indegree[neighbour]++;
    }
  }

  const queue = [];

  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let processedNodes = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    processedNodes++;

    for (const neighbour of graph[node]) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) {
        queue.push(neighbour);
      }
    }
  }

  return processedNodes !== n;
}
