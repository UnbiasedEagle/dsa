vector<vector<int> > mergeIntervals(vector<vector<int> > &intervals) {
    // add your logic here
    sort(intervals.begin(),intervals.end());
    vector<vector<int> > merged;
    for(int i=0;i<intervals.size();i++){
        if(merged.size()==0 || merged.back()[1]<intervals[i][0]){
            merged.push_back(intervals[i]);
        }
        else{
            merged.back()[1]=max(merged.back()[1],intervals[i][1]);
        }
    }
    return merged;
}

// Time Complexity: O(nlogn)
// Auxilary Space Complexity: O(1)