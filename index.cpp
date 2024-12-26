#include <vector>
using namespace std;

vector<vector<int>> threeSum(vector<int> &A)
{
    // add your logic here
    vector<vector<int>> res;
    sort(A.begin(), A.end());

    for (int i = 0; i < A.size(); i++)
    {
        if (i > 0 && A[i] == A[i - 1])
            continue;
        int l = i + 1, r = A.size() - 1;
        while (l < r)
        {
            int sum = A[i] + A[l] + A[r];
            if (sum == 0)
            {
                res.push_back({A[i], A[l], A[r]});
                while (l < r && A[l] == A[l + 1])
                    l++;
                while (l < r && A[r] == A[r - 1])
                    r--;
                l++;
                r--;
            }
            else if (sum < 0)
                l++;
            else
                r--;
        }
    }

    return res;
}

// Time Complexity: O(N^2)
// Space Complexity: O(1)