void merge(vector<int> &arr, int l, int m, int r) {
    vector<int>temp;
    int i=l;
    int j=m+1;
    while(i<=m && j<=r){
        if(arr[i]<=arr[j]){
            temp.push_back(arr[i]);
            i++;
        }
        else{
            temp.push_back(arr[j]);
            j++;
        }
    }
    while(i<=m){
        temp.push_back(arr[i]);
        i++;
    }
    while(j<=r){
        temp.push_back(arr[j]);
        j++;
    }
    for(int i=l;i<=r;i++){
        arr[i]=temp[i-l];
    }
}

void helper(vector<int> &arr, int l, int r) {
    if(l>=r){
        return;
    }
    int m = l + (r-l)/2;
    helper(arr, l, m);
    helper(arr, m+1, r);
    merge(arr, l, m, r);
}

void mergeSort(vector<int> &arr) {
    // add your logic here
    helper(arr, 0, arr.size()-1);
}

// Time Complexity: O(nlogn)
// Space Complexity: O(n)