#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};
struct node *head = NULL;
struct node *tail = NULL;

void insert_end(int num)
{

     struct node *temp = malloc(sizeof(struct node));
    temp->data = num;
    temp->next = head;

    if (head == NULL || tail == NULL)
    {
        head = temp;
        tail = temp;
        return;
    }
    else
    {
        tail->next = temp;
        tail = temp;
    }
}
void insert_first(int num)
{
    struct node *temp = malloc(sizeof(struct node));
    temp->data = num;
    temp->next = head;
    head = temp;
    tail->next = head;
}
void delete_end()
{
    struct node *ptr = tail;
    struct node *p = head;

    if (head == NULL)
    {
        printf("list is empty");
    }
    if (head == tail)
    {
        head = tail = NULL;
        return;
    }
     while (p->next != ptr)
        {
            p = p->next;
        }
        p->next = head;
        tail = p;
        free(ptr);
}
void delete_first()
{
    if (head == NULL)
    {
        printf("\n\n The List Alaready Empty!!");
    }
    if (head == tail)
    {
        head = tail = NULL;
        return;
    }
    struct node *ptr = head;
    head = head->next;
    tail->next = head;
    free(ptr);
}
void insert_mid(int num, int pos)
{
    struct node *ptr = head;
    struct node *p;

    struct node *temp = malloc(sizeof(struct node));
    temp->data = num;

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
        printf("list is empty");
    }
    else
    {
        while (ptr != tail)
        {
            printf("%d\t", ptr->data);
            ptr = ptr->next;
        }
        printf("%d\t", ptr->data);
        printf("\n");
    }
}
int main()
{

    int ac;
    int num;
    int pos;
    do
    {
        printf("\n1.for insert end:\n2.for delete end:\n3.for insert first:\n4.for delete first:\n5.insert mid\n6.delete mid\n7.display\n0.exit\n");

        printf("enter your choice:\n");
        scanf("%d", &ac);

        switch (ac)
        {
        case 1:

            printf("enter the number you want to add in the list:");
            scanf("%d", &num);
            insert_end(num);
            break;
        case 2:
            delete_end();
            break;
        case 3:
            printf("enter the number you want to add in the list:");
            scanf("%d", &num);
            insert_first(num);
            break;
        case 4:
            delete_first();
            break;
        case 5:

            printf("enter the position you want to add in the list:");
            scanf("%d", &pos);
            printf("enter the number you want to add in the list:");
            scanf("%d", &num);
            insert_mid(num, pos);
            break;
        case 6:
            printf("enter the position you want to delete in the list:");
            scanf("%d", &pos);
            delete_mid(pos);
            break;
        case 7:
            display();
            break;
        case 0:
            printf("exit");
            break;
        default:
            printf("enter valid number");
            break;
        }

    } while (ac != 0);
}