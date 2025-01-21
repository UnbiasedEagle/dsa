#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

class Solution
{
public:
    vector<int> spiralOrder(vector<vector<int>> &matrix)
    {
        vector<int> ans;
        int m = matrix.size();
        int n = matrix[0].size();
        int top = 0, bottom = m - 1, left = 0, right = n - 1;
        while (top <= bottom && left <= right)
        {
            for (int i = left; i <= right; i++)
            {
                ans.push_back(matrix[top][i]);
            }
            top++;
            for (int i = top; i <= bottom; i++)
            {
                ans.push_back(matrix[i][right]);
            }
            right--;
            if (top <= bottom)
            {
                for (int i = right; i >= left; i--)
                {
                    ans.push_back(matrix[bottom][i]);
                }
                bottom--;
            }
            if (left <= right)
            {
                for (int i = bottom; i >= top; i--)
                {
                    ans.push_back(matrix[i][left]);
                }
                left++;
            }
        }
        return ans;
    }
};

int32_t main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif

    return 0;
}