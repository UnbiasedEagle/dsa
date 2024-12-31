#include <iostream>
using namespace std;

class ListNode
{
public:
    int data;
    ListNode *next;

    ListNode(int data)
    {
        this->data = data;
        this->next = NULL;
    }
};

int getMiddleElementOfLinkedList(ListNode *list)
{
    ListNode *slow = list;
    ListNode *fast = list;

    while (fast != NULL && fast->next != NULL)
    {
        slow = slow->next;
        fast = fast->next->next;
    }

    return slow->data;
}

// Time Complexity: O(n)
// Space Complexity: O(1)