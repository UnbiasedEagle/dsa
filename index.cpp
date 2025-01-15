#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

class Solution
{
public:
    vector<int> rearrangeArray(vector<int> &nums)
    {
        vector<int> ans(nums.size());
        int posIndex = 0;
        int negIndex = 1;

        for (int i = 0; i < nums.size(); i++)
        {
            if (nums[i] >= 0)
            {
                ans[posIndex] = nums[i];
                posIndex += 2;
            }
            else
            {
                ans[negIndex] = nums[i];
                negIndex += 2;
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