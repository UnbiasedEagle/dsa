vector<int> getPositiveCumulativeSum(vector<int> &arr) {
	// add your logic here
    vector<int>ans;

    int sum = arr[0];

    if(sum>0){
        ans.push_back(sum);
    }

    for(int i=1;i<arr.size();i++){
        sum += arr[i];

        if(sum>0){
            ans.push_back(sum);
        }
    }

    return ans;
}

// Time Complexity: O(N)
// Space Complexity: O(N)