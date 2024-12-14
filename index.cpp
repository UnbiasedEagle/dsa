vector<int> getCumulativeSum(vector<int> &arr) {
    for(int i = 1;i<arr.size();i++){
        arr[i] = arr[i-1] + arr[i];
    }
    return arr;
}

// Time Complexity: O(n)
// Space Complexity: O(1)