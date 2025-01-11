#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

int partition(vector<int> &v, int start, int end)
{
    int pivot = v[end];
    int idx = start;

    for (int j = start; j < end; j++)
    {
        if (v[j] < pivot)
        {
            swap(v[idx], v[j]);
            idx++;
        }
    }

    swap(v[idx], v[end]);

    return idx;
}

void quickSort(vector<int> &v, int start, int end)
{
    if (start >= end)
    {
        return;
    }

    int pivot = partition(v, start, end);

    quickSort(v, start, pivot - 1);
    quickSort(v, pivot + 1, end);
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

    vector<int> v;

    v.push_back(5);
    v.push_back(4);
    v.push_back(3);
    v.push_back(2);
    v.push_back(1);

    cout << "Before Sorting: ";

    for (int i = 0; i < v.size(); i++)
    {
        cout << v[i] << " ";
    }

    cout << endl;

    quickSort(v, 0, v.size() - 1);

    cout << endl
         << "After Sorting: ";

    for (int i = 0; i < v.size(); i++)
    {
        cout << v[i] << " ";
    }

    return 0;
}