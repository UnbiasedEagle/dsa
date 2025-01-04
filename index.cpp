#include <vector>
using namespace std;

bool searchMatrix(vector<vector<int>> &matrix, int key)
{
    int i = 0;
    int j = matrix[0].size() - 1;

    while (i < matrix.size() && j >= 0)
    {
        if (matrix[i][j] == key)
        {
            return true;
        }

        if (key > matrix[i][j])
        {
            i++;
        }
        else
        {
            j--;
        }
    }

    return false;
}

// Time Complexity: O(N + M)
// Space Complexity: O(1)