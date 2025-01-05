// Implement the Stack class
class Stack
{
private:
    int capacity;
    int *arr;
    int topIdx;

public:
    Stack(int capacity)
    {
        capacity = capacity;
        arr = new int[capacity];
        topIdx = -1;
    }

    bool isEmpty()
    {
        return topIdx == -1;
    }

    int size()
    {
        return topIdx + 1;
    }

    int top()
    {
        if (isEmpty())
        {
            return -1;
        }

        return arr[topIdx];
    }

    void push(int element)
    {
        arr[++topIdx] = element;
    }

    void pop()
    {
        topIdx--;
    }
};
