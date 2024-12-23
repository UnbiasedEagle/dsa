#include <vector>
using namespace std;

vector<int> kSubarraySum(vector<int> &A, int k)
{
    // add your logic here
    vector<int> result(A.size() - k + 1);

    int sum = 0;
    for (int i = 0; i < k; i++)
    {
        sum += A[i];
    }

    result.push_back(sum);

    for (int i = k; i < A.size(); i++)
    {
        sum = sum - A[i - k] + A[i];
        result.push_back(sum);
    }

    return result;
}

// Time Complexity: O(n)
// Space Complexity: O(1)