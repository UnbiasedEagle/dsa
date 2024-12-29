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

ListNode *removekthElement(ListNode *head, int k)
{
    // add your logic here

    if (k == 1)
    {
        return head->next;
    }

    ListNode *temp = head;

    while (k > 2)
    {
        temp = temp->next;
        k--;
    }

    temp->next = temp->next->next;

    return head;
}

// Time complexity: O(n)
// Space complexity: O(1)