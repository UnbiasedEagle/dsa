/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = {};
  const indegree = Array(numCourses).fill(0);

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (const prerequisite of prerequisites) {
    graph[prerequisite[1]].push(prerequisite[0]);
    indegree[prerequisite[0]]++;
  }

  const result = [];
  const queue = [];

  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);

    for (const neighbour of graph[node]) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) {
        queue.push(neighbour);
      }
    }
  }

  return result.length === numCourses ? result : [];
};
