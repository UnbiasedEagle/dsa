vector<vector<int> > rotateMatrix(vector<vector<int> > &matrix){
    int row = matrix.size();
    int col = matrix[0].size();

    vector<vector<int> > result(col, vector<int>(row));

    for(int i = 0;i<col;i++){
        for(int j = row-1;j>=0;j--){
            result[i][row-1-j] = matrix[j][i];
        }
    }
    return result;
}

// Time Complexity: O(R*C)
// Space Complexity: O(R*C)