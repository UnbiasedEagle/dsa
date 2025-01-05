#include <vector>
using namespace std;

int kDiffPairs(vector<int> &A, int k)
{
    int i = 0;
    int j = 1;
    int count = 0;

    while (j < A.size())
    {
        int diff = A[j] - A[i];

        if (diff == k)
        {
            count++;
            i++;
            j++;

            while (j < A.size() && A[j] == A[j - 1])
            {
                j++;
            }
        }
        else if (diff < k)
        {
            j++;
        }
        else
        {
            i++;
        }

        if (i == j)
        {
            j++;
        }
    }

    return count;
}

// Time Complexity: O(n)
// Space Complexity: O(1)