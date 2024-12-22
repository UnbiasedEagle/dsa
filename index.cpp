#include <vector>
using namespace std;

int getInsertPosition(vector<int> &arr, int key)
{
    // add your logic here
    if (key >= arr[arr.size() - 1])
    {
        return arr.size();
    }
    if (key <= arr[0])
    {
        return 0;
    }

    int start = 0;
    int end = arr.size() - 1;
    int idx = 0;

    while (start <= end)
    {
        int mid = start + (end - start) / 2;

        if (arr[mid] == key)
        {
            return mid;
        }

        if (arr[mid] > key)
        {
            idx = mid;
            end = mid - 1;
        }
        else
        {
            start = mid + 1;
        }
    }

    return idx;
}

// Time Complexity: O(logN)
// Space Complexity: O(1)