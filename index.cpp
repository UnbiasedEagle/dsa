#include <vector>
#include <algorithm>
using namespace std;

void countingSort(vector<int> &arr)
{
    if (arr.empty())
        return;

    const int RANGE = 2001;

    vector<int> count(RANGE, 0);

    for (int num : arr)
    {
        count[num + 1000]++;
    }

    int index = 0;
    for (int i = 0; i < RANGE; i++)
    {
        while (count[i] > 0)
        {
            arr[index++] = i - 1000;
            count[i]--;
        }
    }
}

// Time Complexity: O(n + k)
// Space Complexity: O(k)