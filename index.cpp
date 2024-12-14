bool isEven(int num) {
    int digits=0;

    if(num==0){
        return false;
    }

    while(num>0){
        digits++;
        num/=10;
    }

    return digits%2==0;
}

vector<int> getEvenDigitNumbers(vector<int> &arr) {
    vector<int> result;

    for(int i=0;i<arr.size();i++){
        if(isEven(arr[i])){
            result.push_back(arr[i]);
        }
    }

    return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)