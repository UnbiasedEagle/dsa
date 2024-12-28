#include <iostream>
#include <vector>
using namespace std;

class Node
{
public:
    Node *left;
    Node *right;
    int data;

    Node(int data)
    {
        this->left = NULL;
        this->right = NULL;
        this->data = data;
    }
};

void helper(Node *root, vector<int> &res)
{
    if (root == NULL)
    {
        return;
    }

    helper(root->left, res);
    res.push_back(root->data);
    helper(root->right, res);
}

vector<int> getInorderTraversal(Node *root)
{
    vector<int> res;
    helper(root, res);
    return res;
}

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)