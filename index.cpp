#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

int longestSuccessiveElements(vector<int> &a)
{
    unordered_set<int> s;
    int result = 0;

    for (int i = 0; i < a.size(); i++)
    {
        s.insert(a[i]);
    }

    for (int i = 0; i < a.size(); i++)
    {
        if (s.find(a[i] - 1) == s.end())
        {
            int j = a[i];
            int count = 0;
            while (s.find(j) != s.end())
            {
                j++;
                count++;
            }
            result = max(result, count);
        }
    }

    return result;
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