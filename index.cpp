vector<int> getSquareSortedArray(vector<int> &arr) {
    // add your logic here
    for(int i=0;i<arr.size();i++){
        arr[i]=arr[i]*arr[i];
    }

    sort(arr.begin(),arr.end());
    return arr;
}

// Time Complexity: O(NlogN)
// Space Complexity: O(1)