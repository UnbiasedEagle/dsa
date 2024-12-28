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

ListNode *addAtkthElement(ListNode *head, int k, ListNode *newElement)
{
    if (k == 1)
    {
        newElement->next = head;
        return newElement;
    }

    ListNode *temp = head;
    while (k > 2)
    {
        temp = temp->next;
        k--;
    }

    newElement->next = temp->next;
    temp->next = newElement;

    return head;
}

// Time Complexity: O(n)
// Space Complexity: O(1)