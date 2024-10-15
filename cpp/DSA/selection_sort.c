#include <stdio.h>
#include <stdlib.h>

void selection()
{

    int n, small, t;
    printf("enter array size: ");
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n ; i++)
    {
        arr[i] = (rand() % 50 + 1);
        printf("%d  ", arr[i]);
    }

    for (int i = 0; i < n - 1; i++)
    {
        small = i;
        for (int j = i + 1; j < n; j++)
        {

            if (arr[j] < arr[small])
            {
                small =  j;
            }
        }
        t = arr[small];
        arr[small] = arr[i];
        arr[i] = t;
    }
    printf("\n");
    printf("after swapping :\n");
    for (int i = 0; i < n; i++)
    {
        printf("%d  ", arr[i]);
    }
}
int main()
{   
    selection();
}
#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};

struct node *head = NULL;

void insert_end(int val)
{
    struct node *ptr = head;
    struct node *temp = malloc(sizeof(struct node));
    temp->data = val;
    temp->next = NULL;

    if (head == NULL)
    {
        head = temp;
        return;
    }
    while (ptr->next != NULL)
    {
        ptr = ptr->next;
    }
    ptr->next = temp;
    return;
}

void delete_end()
{
    struct node *ptr = head;
    struct node *p;

    if (head->next == NULL)
    {
        head = NULL;
        free(ptr);
        return;
    }
    while (ptr->next != NULL)
    {
        p = ptr;
        ptr = ptr->next;
    }
    p->next = NULL;
    free(ptr);
    return;
}

void insert_first(int val)
{
    struct node *ptr = head;
    struct node *temp = malloc(sizeof(struct node));
    temp->data = val;
    temp->next = head;
    head = temp;
}

void delete_first()
{
    struct node *ptr = head;
    head = ptr->next;
    free(ptr);
}

void insert_mid(int num, int pos)
{
    struct node *ptr = head;
    struct node *p;
    struct node *temp = malloc(sizeof(struct node));
    temp->data = num;
    temp->next = NULL;

    while (ptr->data != pos)
    {
        p = ptr;
        ptr = ptr->next;
    }
    p->next = temp;
    temp->next = ptr;
}

void delete_mid(int pos)
{
    struct node *ptr = head;
    struct node *p;
    while (ptr->data != pos)
    {
        p = ptr;
        ptr = ptr->next;
    }
    p->next = ptr->next;
    free(ptr);
}

void display()
{
    struct node *ptr = head;
    if (head == NULL)
    {
        printf("the list is already empty..");
    }
    else
    {
        while (ptr != NULL)
        {
            printf("%d ", ptr->data);
            ptr = ptr->next;
        }
    }
    printf("\n\n");
}

int main()
{
    int n, pos;
    do
    {
        printf("\n1.for insert end:\n2.for delete end:\n3.for insert first:\n4.for delete first:\n5.insert mid\n6.delete mid\n7.display\n");

        printf("enter your choice:");
        scanf("%d", &n);

        if (n <= 0 || n > 7)
        {
            printf("\ninvalid input!!!!!!!!!!!\n");
        }
        if (n == 1)
        {
            int num;
            printf("enter the number you want to add in the list:");
            scanf("%d", &num);
            insert_end(num);
        }
        else if (n == 2)
        {
            delete_end();
        }
        else if (n == 3)
        {
            int num;
            printf("enter the number you want to add in the list:");
            scanf("%d", &num);
            insert_first(num);
        }
        else if (n == 4)
        {
            delete_first();
        }
        else if (n == 5)
        {
            int num;
            printf("enter position where you can add new number:");
            scanf("%d", &pos);
            display();
            printf("enter element u want to add:");
            scanf("%d", &num);
            insert_mid(num, pos);
            display();
        }
        else if (n == 6)
        {
            printf("enter position where you can delete your data:");
            scanf("%d",&pos);
            delete_mid(pos);
            display();
        }
        else if (n == 7)
        {
            display();
        }
    } while (n > 0 || n <= 7);
    return 0;
}