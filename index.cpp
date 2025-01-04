int searchRoot(int num)
{
    int left = 0;
    int right = num;
    int result = 0;
    while (left <= right)
    {
        long long mid = left + (right - left) / 2;
        long long square = mid * mid;
        if (square == num)
        {
            return mid;
        }
        else if (mid * mid < num)
        {
            result = mid;
            left = mid + 1;
        }
        else
        {
            right = mid - 1;
        }
    }
    return result;
}

// Time Complexity: O(logN)
// Space Complexity: O(1)