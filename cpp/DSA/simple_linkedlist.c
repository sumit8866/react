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
        printf("the list are empty");
    }
    else
    {
        while (ptr != NULL)
        {
            printf("%d\t", ptr->data);
            ptr = ptr->next;
        }
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
