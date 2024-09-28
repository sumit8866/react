#include <stdio.h>

int f = -1;
int r = -1;

void enqueue(int x, int queue[], int n)
{

    if ((r + 1) % n == f)
    {
        printf("queue is full");
    }
    else if (r == -1 && f == -1)
    {
        f = r = 0;
        queue[r] = x;
    }
    else
    {
        r = (r + 1) % n;
        queue[r] = x;
    }
}
void dequeue(int n)
{
    if (r == -1 && f == -1)
    {
        printf("queue is empty");
    }
    else if (f == r)
    {
        f = r = -1;
    }
    else
    {
        f = f + 1 % n;
    }
}
void display(int queue[], int n)
{
    int i = f;
    if (r == -1 && f == -1)
    {
        printf("queue is empty");
    }
    else
    {
        while (i != r)
        {
            printf("%d ", queue[i]);
            i = (i + 1) % n;
        }
        printf("%d ", queue[r]);
    }
}
int main()
{
    int n = 5;
    int queue[n];

    enqueue(10, queue, n);
    enqueue(20, queue, n);
    enqueue(30, queue, n);
    enqueue(40, queue, n);
    enqueue(50, queue, n);
    display(queue, n);
    dequeue(n);
    printf("\n");
    display(queue, n);
    enqueue(60, queue, n);
    printf("\n");
    display(queue, n);
}