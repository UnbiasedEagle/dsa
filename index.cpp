#include <vector>
using namespace std;

int maxKSubarraySum(vector<int> &A, int k)
{
    int n = A.size();
    int sum = 0;
    for (int i = 0; i < k; i++)
    {
        sum += A[i];
    }
    int maxSum = sum;
    for (int i = k; i < n; i++)
    {
        sum += A[i] - A[i - k];
        maxSum = max(maxSum, sum);
    }
    return maxSum;
}

// Time Complexity: O(n)
// Space Complexity: O(1)