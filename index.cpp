#include <vector>
using namespace std;

void sortTheArray(vector<int> &A)
{
    int i = 0;
    int j = A.size() - 1;
    int k = 0;

    while (i <= j)
    {
        if (A[i] == 1)
        {
            i++;
        }
        else if (A[i] == 0)
        {
            swap(A[i], A[k]);
            i++;
            k++;
        }
        else
        {
            swap(A[i], A[j]);
            j--;
        }
    }
}

// Time Complexity: O(N)
// Space Complexity: O(1)