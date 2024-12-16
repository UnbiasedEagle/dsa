int getMaxConsecutiveOnes(vector<int> &A) {
    int maxCount=0;
    int count=0;

    for(int i=0;i<A.size();i++){
        if(A[i]==1){
            count++;
            maxCount=max(maxCount,count);
        }
        else{
            count=0;
        }
    }
    return maxCount;
}

// Time Complexity: O(n)
// Space Complexity: O(1)