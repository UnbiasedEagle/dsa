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

void printLinkedList(ListNode *head)
{
    ListNode *temp = head;

    while (temp != NULL)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
}

// Time Complexity: O(n)
// Space Complexity: O(1)