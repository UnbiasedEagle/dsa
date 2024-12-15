void merge(vector<int> &arr, int endIndex) {
    // add your logic here
    vector<int>result;

    int i = 0;
    int j = endIndex + 1;

    while(i <= endIndex && j < arr.size()) {
        if(arr[i] < arr[j]) {
            result.push_back(arr[i]);
            i++;
        } else {
            result.push_back(arr[j]);
            j++;
        }
    }

    while(i <= endIndex) {
        result.push_back(arr[i]);
        i++;
    }

    while(j < arr.size()) {
        result.push_back(arr[j]);
        j++;
    }

    for(int i = 0; i < arr.size(); i++) {
        arr[i] = result[i];
    }
}

// Time Complexity: O(n)
// Space Complexity: O(n)