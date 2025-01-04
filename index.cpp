#include <vector>
using namespace std;

int calculateMedianOfMatrix(vector<vector<int>> &matrix)
{
    int n = matrix.size();
    int m = matrix[0].size();
    int min = INT_MAX, max = INT_MIN;
    for (int i = 0; i < n; i++)
    {
        if (matrix[i][0] < min)
            min = matrix[i][0];
        if (matrix[i][m - 1] > max)
            max = matrix[i][m - 1];
    }

    int desired = (n * m + 1) / 2;

    while (min < max)
    {
        int mid = min + (max - min) / 2;
        int place = 0;

        for (int i = 0; i < n; i++)
        {
            place += upper_bound(matrix[i].begin(), matrix[i].end(), mid) - matrix[i].begin();
        }

        if (place < desired)
            min = mid + 1;
        else
            max = mid;
    }

    return min;
}
