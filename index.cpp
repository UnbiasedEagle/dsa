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

ListNode *kthElement(ListNode *head, int k)
{
    // add your logic here
    ListNode *temp = head;
    while (k > 1)
    {
        temp = temp->next;
        k--;
    }

    return temp;
}

// Time Complexity: O(N)
// Space Complexity: O(1)