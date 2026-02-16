/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (const prerequisite of prerequisites) {
    graph[prerequisite[0]].push(prerequisite[1]);
  }

  const indegree = Array(numCourses).fill(0);

  for (const prerequisite of prerequisites) {
    indegree[prerequisite[1]]++;
  }

  const queue = [];
  let count = 0;

  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const node = queue.shift();
    count++;

    for (const neighbour of graph[node]) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) {
        queue.push(neighbour);
      }
    }
  }

  return count === numCourses;
};
