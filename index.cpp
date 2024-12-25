#include <vector>
#include <queue>
using namespace std;

int partition(vector<int> &list, int left, int right)
{
    int pivot = list[right];
    int i = left;
    for (int j = left; j < right; j++)
    {
        if (list[j] < pivot)
        {
            swap(list[i], list[j]);
            i++;
        }
    }
    swap(list[i], list[right]);
    return i;
}

int quickSelect(vector<int> &list, int left, int right, int k)
{
    if (left == right)
    {
        return list[left];
    }

    int pivotIndex = partition(list, left, right);

    if (k == pivotIndex)
    {
        return list[k];
    }
    else if (k < pivotIndex)
    {
        return quickSelect(list, left, pivotIndex - 1, k);
    }
    else
    {
        return quickSelect(list, pivotIndex + 1, right, k);
    }
}

int getKthLargestElement(vector<int> &list, int k)
{
    return quickSelect(list, 0, list.size() - 1, list.size() - k);
}

// Time Complexity: O(n)
// Auxilary Space Complexity: O(log n)