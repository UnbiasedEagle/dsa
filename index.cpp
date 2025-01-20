#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

vector<vector<int>> zeroMatrix(vector<vector<int>> &matrix, int n, int m)
{
    bool isFirstColZero = false;
    bool isFirstRowZero = false;

    for (int i = 0; i < n; i++)
    {
        if (matrix[i][0] == 0)
        {
            isFirstColZero = true;
            break;
        }
    }

    for (int i = 0; i < m; i++)
    {
        if (matrix[0][i] == 0)
        {
            isFirstRowZero = true;
            break;
        }
    }

    for (int i = n - 1; i >= 1; i--)
    {
        for (int j = m - 1; j >= 1; j--)
        {
            if (matrix[i][j] == 0)
            {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (int i = n - 1; i >= 0; i--)
    {
        for (int j = m - 1; j >= 0; j--)
        {
            if (j == 0 && isFirstColZero)
            {
                matrix[i][j] = 0;
            }
            if (i == 0 && isFirstRowZero)
            {
                matrix[i][j] = 0;
            }
            else if (matrix[i][0] == 0 || matrix[0][j] == 0)
            {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

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