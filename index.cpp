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

void printLinkedListReverse(ListNode *head)
{
    // add your logic here
    if (head == NULL)
        return;
    printLinkedListReverse(head->next);
    cout << head->data << " ";
}

// Time Complexity: O(n)
// Auxiliary Space Complexity: O(1)