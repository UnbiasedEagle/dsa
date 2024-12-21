int getNegativeNumbersCount(vector<int> &arr) {
    // add your logic here
    int low = 0;
    int high = arr.size() - 1;
    int idx = -1;
    while(low<=high){
        int mid = low + (high-low)/2;
        if(arr[mid] < 0){
            idx = mid;
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return idx + 1;
}

// Time Complexity: O(log n)
// Space Complexity: O(1)