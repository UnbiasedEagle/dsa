#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

long long maxSubarraySum(vector<int> arr, int n)
{
    long long maxSum = arr[0];
    long long currSum = arr[0];

    for (int i = 1; i < arr.size(); i++)
    {
        currSum = max((long long)arr[i], currSum + arr[i]);
        maxSum = max(maxSum, currSum);
    }

    return maxSum;
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