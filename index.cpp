int getIdenticalTwinsCount(vector<int> &arr) {
    unordered_map<int, int>map;
    int result=0;

    for(int i = 0;i<arr.size();i++){
        result+=map[arr[i]];
        map[arr[i]]++;
    }

    return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)