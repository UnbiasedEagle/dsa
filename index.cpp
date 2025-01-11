#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

int longestSubarray(vector<int> &arr, int k)
{
    unordered_map<int, int> mp;
    int sum = 0;
    mp[0] = -1;
    int maxLength = 0;

    for (int i = 0; i < arr.size(); i++)
    {
        sum += arr[i];

        int diff = sum - k;

        if (mp.find(diff) != mp.end())
        {
            int len = i - mp[diff];

            if (len > 0)
            {
                maxLength = max(maxLength, len);
            }
        }

        if (mp.find(sum) == mp.end())
        {
            mp[sum] = i;
        }
    }

    return maxLength;
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