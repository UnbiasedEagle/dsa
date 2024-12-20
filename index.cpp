int binarySearch(const vector<int> &arr, int key, bool findFirst) {
    int low = 0;
    int high = arr.size() - 1;
    int result = -1;

    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key) {
            result = mid;
            if (findFirst) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else if (arr[mid] > key) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}

vector<int> searchRange(vector<int> &arr, int key) {
    vector<int> ans;

    int firstIdx = binarySearch(arr, key, true);
    int lastIdx = binarySearch(arr, key, false);

    ans.push_back(firstIdx);
    ans.push_back(lastIdx);
    return ans;
}

// Time complexity: O(log n)
// Space complexity: O(1)