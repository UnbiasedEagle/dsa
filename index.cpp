#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

vector<vector<int>> pascalTriangle(int N)
{
    vector<vector<int>> res(N);
    res[0] = {1};
    for (int i = 1; i < N; i++)
    {
        vector<int> temp(i + 1, 1);
        for (int j = 1; j < i; j++)
        {
            temp[j] = res[i - 1][j - 1] + res[i - 1][j];
        }
        res[i] = temp;
    }
    return res;
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