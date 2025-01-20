#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

class Solution
{
public:
    void rotate(vector<vector<int>> &matrix)
    {
        for (int i = 0; i < matrix.size(); i++)
        {
            int j = matrix.size() - 1;

            while (j >= i)
            {
                swap(matrix[i][j], matrix[j][i]);
                j--;
            }
        }

        for (int i = 0; i < matrix.size(); i++)
        {
            int start = 0;
            int end = matrix.size() - 1;

            while (start < end)
            {
                swap(matrix[i][start], matrix[i][end]);
                start++;
                end--;
            }
        }
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