#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

int maximumProfit(vector<int> &prices)
{
    int maxProfit = 0;
    int buyPrice = prices[0];

    for (int i = 1; i < prices.size(); i++)
    {
        if (prices[i] < buyPrice)
        {
            buyPrice = prices[i];
        }
        else
        {
            maxProfit = max(maxProfit, prices[i] - buyPrice);
        }
    }

    return maxProfit;
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