#include <stdio.h>
#define n 10
int queue[n];
int f = -1;
int r = -1;

void insert_front(int x)
{

    if (f == 0 && r == n - 1 || (f == r - 1))
    {
        printf("queue is full");
    }
    else if (f == -1 && r == -1)
    {
        f = r = 0;
        queue[f] = x;
    }
    else if (f == 0)
    {
        f = n - 1;
        queue[f] = x;
    }
    else
    {
        f = f - 1;
        queue[f] = x;
    }
}

void insert_rear(int x)
{
    if (f == 0 && r == n - 1 || (f == r - 1))
    {
        printf("queue is full");
    }
    else if (f == -1 && r == -1)
    {
        r = 0;
        queue[r] = x;
    }
    else if (r == n - 1)
    {
        r = 0;
        queue[r] = x;
    }
    else
    {
        r++;
        queue[r] = x;
    }
}
void display()
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

void delete_front()
{
    if ((f == -1) && (r == -1))
    {
        printf("queue is empty");
    }
    else if (f == r)
    {
        printf("\nThe deleted element is %d", queue[f]);
        f = -1;
        r = -1;
    }
    else if (f == (n - 1))
    {
        printf("\nThe deleted element is %d", queue[f]);
        f = 0;
    }
    else
    {
        printf("\nThe deleted element is %d", queue[f]);
        f = f + 1;
    }
}
void delete_rear()
{
    if (r == -1 && f == -1)
    {
        printf("queue is empty");
    }
    else if (f == r)
    {
        printf("\nThe deleted element is %d", queue[r]);
        r = -1;
        f = -1;
    }
    else if (r == 0)
    {
        printf("\nThe deleted element is %d", queue[r]);
        r = n + 1;
    }
    else
    {
        printf("\nThe deleted element is %d", queue[r]);
        r = r - 1;
    }
}
int main()
{

    insert_front(10);
    insert_front(20);
    insert_front(30);
    display();
    insert_rear(40);
    insert_rear(50);
    insert_rear(60);
    printf("\n");
    display();
    delete_front();
    printf("\n");
    display();
    delete_rear();
    printf("\n");
    display();
}