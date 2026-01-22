/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const indegrees = Array.from({ length: numCourses }, () => 0);

  for (const [course1, course2] of prerequisites) {
    graph[course2].push(course1);
    indegrees[course1]++;
  }

  const queue = [];

  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i] === 0) {
      queue.push(i);
    }
  }

  let processedCount = 0;

  while (queue.length) {
    const course = queue.unshift();
    processedCount++;

    for (const neighbour of graph[course]) {
      indegrees[neighbour]--;
      if (indegrees[neighbour] === 0) {
        queue.push(neighbour);
      }
    }
  }

  return processedCount === numCourses;
};

// Time Complexity: O(V+E)
// Space Complexity: O(V+E)
