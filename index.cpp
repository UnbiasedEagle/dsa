#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

vector<vector<int>> triplet(int n, vector<int> &arr)
{
    sort(arr.begin(), arr.end());
    vector<vector<int>> ans;

    int i = 0;

    while (i < n)
    {
        int start = i + 1;
        int end = n - 1;
        int req = -arr[i];

        while (start < end)
        {
            int sum = arr[start] + arr[end];
            if (sum == req)
            {
                ans.push_back({arr[i], arr[start], arr[end]});
                start++;
                end--;

                while (start < end && arr[start] == arr[start - 1])
                    start++;
                while (start < end && arr[end] == arr[end + 1])
                    end--;
            }
            else if (sum > req)
                end--;
            else
                start++;
        }

        i++;

        while (i < n && arr[i] == arr[i - 1])
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