#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

vector<vector<int>> fourSum(vector<int> &nums, int target)
{
    vector<vector<int>> ans;
    sort(nums.begin(), nums.end());
    int n = nums.size();

    int i = 0;
    while (i < n)
    {
        int j = i + 1;
        while (j < n)
        {
            int start = j + 1;
            int end = n - 1;
            while (start < end)
            {
                int sum = nums[i] + nums[j] + nums[start] + nums[end];
                if (sum == target)
                {
                    ans.push_back({nums[i], nums[j], nums[start], nums[end]});
                    while (start < end && nums[start] == nums[start + 1])
                    {
                        start++;
                    }
                    while (start < end && nums[end] == nums[end - 1])
                    {
                        end--;
                    }
                    start++;
                    end--;
                }
                else if (sum > target)
                {
                    end--;
                }
                else
                {
                    start++;
                }
            }
            j++;

            while (j < n && nums[j] == nums[j - 1])
            {
                j++;
            }
        }
        i++;
        while (i < n && nums[i] == nums[i - 1])
        {
            i++;
        }
    }

    return ans;
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

    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    vector<vector<int>> ans = triplet(n, arr);

    for (auto i : ans)
    {
        cout << i[0] << " " << i[1] << " " << i[2] << endl;
    }

    return 0;
}