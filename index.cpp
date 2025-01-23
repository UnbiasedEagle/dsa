#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

int getLongestZeroSumSubarrayLength(vector<int> &arr)
{
    int largest = 0;
    int sum = 0;
    unordered_map<int, int> mp;
    mp[0] = -1;

    for (int i = 0; i < arr.size(); i++)
    {
        sum += arr[i];
        if (mp.find(sum) != mp.end())
        {
            largest = max(largest, i - mp[sum]);
        }

        if (mp.find(sum) == mp.end())
        {
            mp[sum] = i;
        }
    }

    return largest;
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