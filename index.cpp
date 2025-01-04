bool isPerfectSquare(int num)
{
    int s = 1;
    int end = num;

    while (s <= end)
    {
        long long mid = s + (end - s) / 2;
        long long square = mid * mid;

        if (square == num)
        {
            return true;
        }
        else if (square < num)
        {
            s = mid + 1;
        }
        else
        {
            end = mid - 1;
        }
    }

    return false;
}

// Time complexity: O(log n)
// Space complexity: O(1)