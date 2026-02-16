// Find town judge -> indegree = n-1 and outdegree = 0

function findTownJudge(n, trust) {
  const indegree = Array(n + 1).fill(0);
  const outdegree = Array(n + 1).fill(0);

  for (let i = 0; i < trust.length; i++) {
    const [v1, v2] = trust[i];

    indegree[v2]++;
    outdegree[v1]++;
  }

  for (let i = 1; i <= n; i++) {
    if (outdegree[i] === 0 && indegree[i] === n - 1) {
      return i;
    }
  }

  return -1;
}
