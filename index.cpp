#include <vector>
using namespace std;

int getKthElement(vector<int> &firstArr, vector<int> &secondArr, int k)
{
    int i = 0, j = 0;

    while (true)
    {
        if (i == firstArr.size())
            return secondArr[j + k - 1];
        if (j == secondArr.size())
            return firstArr[i + k - 1];
        if (k == 1)
            return min(firstArr[i], secondArr[j]);

        int mid = k / 2;
        int new_i = min(i + mid, (int)firstArr.size()) - 1;
        int new_j = min(j + mid, (int)secondArr.size()) - 1;

        if (firstArr[new_i] <= secondArr[new_j])
        {
            k -= (new_i - i + 1);
            i = new_i + 1;
        }
        else
        {
            k -= (new_j - j + 1);
            j = new_j + 1;
        }
    }
}

// Time Complexity: O(log(K))
// Space Complexity: O(1)