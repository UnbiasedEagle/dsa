#include <vector>
using namespace std;

vector<int> intersection(vector<int> &A, vector<int> &B)
{
    // add your logic here
    int i = 0;
    int j = 0;

    vector<int> ans;

    while (i < A.size() && j < B.size())
    {
        if (A[i] == B[j])
        {
            ans.push_back(A[i]);
            i++;
            j++;
        }
        else if (A[i] < B[j])
        {
            i++;
        }
        else
        {
            j++;
        }
    }

    return ans;
}

// Time Complexity: O(N + M)
// Space Complexity: O(1)