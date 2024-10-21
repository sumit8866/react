#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
    struct node *prev;
};
struct node *head=NULL;
void insert_end(int num){
    struct node *ptr = head;
    struct node *temp = malloc(sizeof(struct node));
    temp->data = num;
    temp->next = NULL;
    temp->prev = NULL;
    if (head == NULL)
    {
        head = temp;
        head->next=head;
        head ->prev=head;

    }else{
        while (ptr->next!=head)
        {
            ptr=ptr->next;
        }
        ptr->next=temp;
        temp->prev=ptr;
        temp->next=head;
        head->prev=temp;
    } 
}

void delete_end(){
    struct node*ptr=head;
    struct node*p;
    if(head->next==head){
        head=NULL;
        free(ptr);
        return;
    }else{
        while (ptr->next != head)
        {
            p = ptr;
            ptr = ptr->next;
        }

        p->next = head;
        head->prev = p;
        free(ptr);
    }
}
void insert_first(int num){
    struct node *ptr = head;
    struct node *temp = malloc(sizeof(struct node));

    temp->data = num;
    temp->next = NULL;
    temp->prev = NULL;

    if (head == NULL)
    {
        head = temp;
        head->next = head; 
        head->prev = head; 
        return;
    }
    else{
        while (ptr->next!=head)
        {
            ptr=ptr->next;
        }
        temp->next=head;
        head->prev=temp;
        head=temp;
        ptr->next=head;
        head->prev=ptr;
        
    }
}
void delete_first()
{
    struct node *ptr = head;

    if (head->next == head)
    {
        free(head);
        head = NULL;
        return;
    }
    else
    {
        while (ptr->next!=head)
        {
            ptr=ptr->next;
        }
        
        head = head->next;
        ptr->next = head;
        head->prev = ptr;
        free(ptr);
    }
}
void insert_mid(int val,int pos){

    struct node *ptr = head;
    struct node *p;
    struct node *temp = malloc(sizeof(struct node));
    temp->data = val;
    temp->next = NULL;
    temp->prev = NULL;
    while (ptr->data != pos)     
    {
        p = ptr;
        ptr = ptr->next;
    }

    p->next = temp;
    temp->prev = p;
    temp->next = ptr;
    ptr->prev = temp;
}
void delete_mid(int pos){
    struct node*ptr=head;
    struct node*p;

    while (ptr->data!=pos)
    {
        p=ptr;
        ptr=ptr->next;
    }
    p->next=ptr->next;
    ptr->next->prev=p;
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
        while (ptr->next != head)
        {
            printf("%d\t", ptr->data);
            ptr = ptr->next;
        }
        printf("%d\t", ptr->data);
        printf("\n");
    }
}
int main (){
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
