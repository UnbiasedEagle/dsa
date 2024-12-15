void insertionSort(vector<int> &arr) {
    // add your logic here
    for(int i = 1;i<arr.size();i++){
        int j = i-1;

        while(j>=0 && arr[j]>arr[j+1]){
            swap(arr[j],arr[j+1]);
            j--;
        }
    }
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)