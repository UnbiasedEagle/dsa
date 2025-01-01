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

ListNode *appendLists(ListNode *list1, ListNode *list2)
{
    ListNode *temp = list1;

    while (temp->next != NULL)
    {
        temp = temp->next;
    }

    temp->next = list2;

    return list1;
}

// Time Complexity: O(n)
// Space Complexity: O(1)