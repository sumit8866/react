#include <stdio.h>
#define n 5
int stack[n];
int top = -1;

void push(int val)
{

    if (top == n - 1)
    {
        printf("stack is full");
    }
    else
    {
        top = top + 1;
        stack[top] = val;
    }
}

void display()
{
    if (top == -1)
    {
        printf("stack is empty.");
    }
    else
    {
        for (int i = 0; i <= top; i++)
        {
            printf("%d ", stack[i]);
        }
    }
}
void pop()
{
    if (top == -1)
    {
        printf("stack is empty.");
    }
    else
    {
        top = top - 1;
    }
}
int main()
{

    push(10);
    push(20);
    push(30);
    push(40);
    display();
    printf("\n");
    pop();
    pop();
    display();
}