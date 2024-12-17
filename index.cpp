void setRowColumnZeroes(vector<vector<int> > &matrix) {
    // add your logic here
    int row = matrix.size();
    int col = matrix[0].size();

    bool firstRowZero = false;
    bool firstColZero = false;

    for(int i = 0; i < row; i++){
        if(matrix[i][0] == 0){
            firstColZero = true;
        }
    }

    for(int i = 0; i < col; i++){
        if(matrix[0][i] == 0){
            firstRowZero = true;
        }
    }

    for(int i = row-1; i > 0; i--){
        for(int j = col-1; j > 0; j--){
            if(matrix[i][j] == 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(int i = row-1; i >= 0; i--){
        for(int j = col-1; j >= 0; j--){
           if(i!=0 && j!=0){
               if(matrix[i][0] == 0 || matrix[0][j] == 0){
                   matrix[i][j] = 0;
               }
           }else if(i==0 && firstRowZero){
               matrix[i][j] = 0;
           }else if(j==0 && firstColZero){
               matrix[i][j] = 0;
           }
        }
    }
}

// Time Complexity: O(m*n)
// Space Complexity: O(1)