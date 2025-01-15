#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

vector<int> nextPermutation(vector<int> &permutation, int n)
{
    if (n == 1)
    {
        return permutation;
    }

    int i = n - 2;

    while (i >= 0 && permutation[i] >= permutation[i + 1])
    {
        i--;
    }

    reverse(permutation.begin() + i + 1, permutation.end());

    if (i == -1)
    {
        return permutation;
    }

    int minIndex = -1;
    int minValue = INT_MAX;

    for (int j = i + 1; j < n; j++)
    {
        if (permutation[j] > permutation[i] && permutation[j] < minValue)
        {
            minValue = permutation[j];
            minIndex = j;
        }
    }

    swap(permutation[i], permutation[minIndex]);

    return permutation;
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