vector<int> pascalTriangleRow(int rowNo) {
    rowNo--;
    vector<int> row;
    row.push_back(1);
    int C = 1; // Binomial coefficient
    for (int i = 1; i <= rowNo; i++) {
        C = C * (rowNo-i+1)/i;
        row.push_back(C);
    }
    return row;
}

// Time Complexity: O(n)
// Space Complexity: O(n)