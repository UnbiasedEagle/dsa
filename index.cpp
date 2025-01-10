#include <bits/stdc++.h>
using namespace std;
#define mod 1000000007
#define inf 1e18
#define endl "\n"

void recursiveInsertionSort(vector<int> &v, int idx)
{
    if (idx >= v.size())
    {
        return;
    }

    int j = idx - 1;

    while (j >= 0 && v[j] > v[j + 1])
    {
        swap(v[j], v[j + 1]);
        j--;
    }

    recursiveInsertionSort(v, idx + 1);
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

    recursiveInsertionSort(v, 1);

    cout << endl
         << "After Sorting: ";

    for (int i = 0; i < v.size(); i++)
    {
        cout << v[i] << " ";
    }

    return 0;
}