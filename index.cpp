int partition(vector<int> &arr, int low, int high) {
    int pivot = arr[high];
    int i = low;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            swap(arr[i], arr[j]);
            i++;
        }
    }
    swap(arr[i], arr[high]);
    return i;
}

void helper(vector<int> &arr, int low, int high) {
    if(low>=high){
        return;
    }

    int pivot = partition(arr, low, high);
    helper(arr, low, pivot-1);
    helper(arr, pivot+1, high);
}


void quickSort(vector<int> &arr) {
    // add your logic here
    helper(arr, 0, arr.size()-1);
}

// Average Time Complexity: O(NlogN)
// Worst Time Complexity: O(N^2)
// Space Complexity: O(logN)