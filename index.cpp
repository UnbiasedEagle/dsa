#include <vector>
using namespace std;

bool hasTwoSumZero(vector<int> &A)
{
    // add your logic here
    int start = 0;
    int end = A.size() - 1;

    while (start < end)
    {
        if (A[start] + A[end] == 0)
        {
            return true;
        }
        else if (A[start] + A[end] < 0)
        {
            start++;
        }
        else
        {
            end--;
        }
    }

    return false;
}

// Time Complexity: O(n)
// Space Complexity: O(1)