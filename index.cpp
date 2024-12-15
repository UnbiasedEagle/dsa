vector<int> mergeSortedArrays(vector<int> &A, vector<int> B) {
    vector<int>result;

    int i = 0;
    int j = 0;

    while(i < A.size() || j < B.size()){
        if(i >= A.size()){
            result.push_back(B[j]);
            j++;
        }
        else if(j >= B.size()){
            result.push_back(A[i]);
            i++;
        }
        else if(A[i] < B[j]){
            result.push_back(A[i]);
            i++;
        }
        else{
            result.push_back(B[j]);
            j++;
        }
    }

    return result;
}

// Time Complexity: O(m+n)
// Space Complexity: O(m+n)