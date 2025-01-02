#include <vector>
using namespace std;

int mergeAndCount(vector<int> &array, int start, int mid, int end)
{
    int size1 = mid - start + 1;

    vector<int> temp(end - start + 1);
    int idx = 0;
    int i = start;
    int j = mid + 1;
    int result = 0;

    while (i <= mid && j <= end)
    {
        if (array[i] <= array[j])
        {
            temp[idx++] = array[i++];
        }
        else
        {
            temp[idx++] = array[j++];
            result += size1 - (i - start);
        }
    }

    while (i <= mid)
    {
        temp[idx++] = array[i++];
    }

    while (j <= end)
    {
        temp[idx++] = array[j++];
    }

    for (int i = 0; i < temp.size(); i++)
    {
        array[start + i] = temp[i];
    }

    return result;
}

int helper(vector<int> &array, int start, int end)
{
    if (start >= end)
    {
        return 0;
    }

    int result = 0;
    int mid = start + (end - start) / 2;
    result += helper(array, start, mid);
    result += helper(array, mid + 1, end);
    result += mergeAndCount(array, start, mid, end);

    return result;
}

int getInversionCount(vector<int> &array)
{
    return helper(array, 0, array.size() - 1);
}

// Time Complexity: O(nlogn)
// Space Complexity: O(n)
