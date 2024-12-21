int getNextGreaterElement(vector<int> &arr, int key) {
    // add your logic here
    int low = 0;
    int high = arr.size() - 1;
    int idx = -1;

    while(low <= high) {
        int mid = (low + high) / 2;

        if(arr[mid]<=key){
            low = mid + 1;
        }else{
            idx = mid;
            high = mid - 1;
        }
    }

    if(idx==-1){
        return key;
    }

    return arr[idx];
}

// Time Complexity: O(logN)
// Space Complexity: O(1)