#include <vector>
using namespace std;

int removeOccurences(vector<int> &A, int k)
{
    int idx = 0;

    for (int i = 0; i < A.size(); i++)
    {
        if (A[i] != k)
        {
            A[idx++] = A[i];
        }
    }

    return idx;
}

// Time Complexity: O(N)
// Space Complexity: O(1)