#include <vector>
using namespace std;

int binarySearch(vector<int> &arr, int low, int high)
{
    while (low <= high)
    {
        int mid = low + (high - low) / 2;

        if (low == high)
            return arr[low];

        if (mid % 2 == 0)
        {
            if (arr[mid] == arr[mid + 1])
            {
                low = mid + 1;
            }
            else
            {
                high = mid;
            }
        }
        else
        {
            if (arr[mid] == arr[mid - 1])
            {
                low = mid + 1;
            }
            else
            {
                high = mid;
            }
        }
    }

    return 0;
}

int findNonRepeatingElement(vector<int> &arr)
{
    return binarySearch(arr, 0, arr.size() - 1);
}

// Time Complexity: O(log n)
// Space Complexity: O(1)