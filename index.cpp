/* This is the ListNode class definition

class ListNode {
public:
    int data;
    ListNode* next;

    ListNode(int data) {
        this->data = data;
        this->next = NULL;
    }
};
*/

vector<int> linkedListToArray(ListNode *head)
{
    // add your logic here
    vector<int> result;
    ListNode *temp = head;

    while (temp != NULL)
    {
        result.push_back(temp->data);
        temp = temp->next;
    }

    return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)