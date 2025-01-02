#include <vector>
using namespace std;

int getElementIndex(vector<int> &array, int target)
{
    int s = 0;
    int e = array.size() - 1;

    while (s <= e)
    {
        int mid = s + (e - s) / 2;

        if (array[mid] == target)
        {
            return mid;
        }

        if (array[mid] >= array[s])
        {
            if (target >= array[s] && target < array[mid])
            {
                e = mid - 1;
            }
            else
            {
                s = mid + 1;
            }
        }
        else
        {
            if (target > array[mid] && target <= array[e])
            {
                s = mid + 1;
            }
            else
            {
                e = mid - 1;
            }
        }
    }

    return -1;
}

// Time Complexity: O(log(n))
// Space Complexity: O(1)