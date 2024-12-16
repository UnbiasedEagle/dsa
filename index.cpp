bool isArithmeticSequence(vector<int> &arr) {
    // add your logic here
    if(arr.size() == 1){
        return true;
    }

    sort(arr.begin(), arr.end());

    int diff = arr[1] - arr[0];

    for(int i = 2; i < arr.size(); i++){
        if(arr[i] - arr[i-1] != diff){
            return false;
        }
    }

    return true;
}

// Time Complexity: O(nlogn)
// Space Complexity: O(1)