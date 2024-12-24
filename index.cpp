#include <vector>
using namespace std;

int removeDuplicates(vector<int> &A)
{
    // add logic here
    int size = 1;

    for (int i = 1; i < A.size(); i++)
    {
        if (A[i] != A[i - 1])
        {
            size++;
        }
    }

    return size;
}

// Time Complexity: O(N)
// Space Complexity: O(1)